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
import com.devninenine.tasklist.dto.PersonalDTO;
import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.entities.Personal;
import com.devninenine.tasklist.repositories.CategoryRepository;
import com.devninenine.tasklist.repositories.PersonalRepository;
import com.devninenine.tasklist.services.exceptions.DatabaseException;
import com.devninenine.tasklist.services.exceptions.ResourceNotFoundException;

@Service
public class PersonalService {

	@Autowired
	private PersonalRepository repository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Transactional(readOnly = true)
	public Page<PersonalDTO> findAllPaged(PageRequest pageRequest) {
		Page<Personal> list = repository.findAll(pageRequest);
		return list.map(x -> new PersonalDTO(x));
	}

	@Transactional(readOnly = true)
	public PersonalDTO findById(Long id) {
		Optional<Personal> obj = repository.findById(id);
		Personal entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new PersonalDTO(entity, entity.getCategories());
	}

	@Transactional
	public PersonalDTO insert(PersonalDTO dto) {
		Personal entity = new Personal();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PersonalDTO(entity);
	}

	@Transactional
	public PersonalDTO update(Long id, PersonalDTO dto) {
		try {
			Personal entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new PersonalDTO(entity);
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

	private void copyDtoToEntity(PersonalDTO dto, Personal entity) {

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
