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
import com.devninenine.tasklist.dto.HomeDTO;
import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.entities.Home;
import com.devninenine.tasklist.repositories.CategoryRepository;
import com.devninenine.tasklist.repositories.HomeRepository;
import com.devninenine.tasklist.services.exceptions.DatabaseException;
import com.devninenine.tasklist.services.exceptions.ResourceNotFoundException;

@Service
public class HomeService {

	@Autowired
	private HomeRepository repository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Transactional(readOnly = true)
	public Page<HomeDTO> findAllPaged(PageRequest pageRequest) {
		Page<Home> list = repository.findAll(pageRequest);
		return list.map(x -> new HomeDTO(x));
	}

	@Transactional(readOnly = true)
	public HomeDTO findById(Long id) {
		Optional<Home> obj = repository.findById(id);
		Home entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new HomeDTO(entity, entity.getCategories());
	}

	@Transactional
	public HomeDTO insert(HomeDTO dto) {
		Home entity = new Home();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new HomeDTO(entity);
	}

	@Transactional
	public HomeDTO update(Long id, HomeDTO dto) {
		try {
			Home entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new HomeDTO(entity);
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

	private void copyDtoToEntity(HomeDTO dto, Home entity) {

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
