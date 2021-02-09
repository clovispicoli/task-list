package com.devninenine.tasklist.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devninenine.tasklist.dto.CategoryDTO;
import com.devninenine.tasklist.dto.WorkDTO;
import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.entities.Work;
import com.devninenine.tasklist.repositories.CategoryRepository;
import com.devninenine.tasklist.repositories.WorkRepository;
import com.devninenine.tasklist.services.exceptions.DatabaseException;
import com.devninenine.tasklist.services.exceptions.ResourceNotFoundException;

@Service
public class WorkService {

	@Autowired
	private WorkRepository repository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Transactional(readOnly = true)
	public Page<WorkDTO> findAllPaged(PageRequest pageRequest) {
		Page<Work> list = repository.findAll(pageRequest);
		return list.map(x -> new WorkDTO(x));
	}

	@Transactional(readOnly = true)
	public WorkDTO findById(Long id) {
		Optional<Work> obj = repository.findById(id);
		Work entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new WorkDTO(entity, entity.getCategories());
	}

	@Transactional
	public WorkDTO insert(WorkDTO dto) {
		Work entity = new Work();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new WorkDTO(entity);
	}

	@Transactional
	public WorkDTO update(Long id, WorkDTO dto) {
		try {
			Work entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new WorkDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

	private void copyDtoToEntity(WorkDTO dto, Work entity) {

		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity.setDate(dto.getDate());

		entity.getCategories().clear();
		for(CategoryDTO catDto : dto.getCategories()) {
			 Category category = categoryRepository.getOne(catDto.getId());
			 entity.getCategories().add(category);
		}
	}
}
