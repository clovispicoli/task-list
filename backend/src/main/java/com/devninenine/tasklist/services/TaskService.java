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

import com.devninenine.tasklist.dto.TaskDTO;
import com.devninenine.tasklist.entities.Task;
import com.devninenine.tasklist.repositories.TaskRepository;
import com.devninenine.tasklist.services.exceptions.DatabaseException;
import com.devninenine.tasklist.services.exceptions.ResourceNotFoundException;

@Service
public class TaskService {

	@Autowired
	private TaskRepository repository;

	@Transactional(readOnly = true)
	public Page<TaskDTO> findAllPaged(PageRequest pageRequest) {
		Page<Task> list = repository.findAll(pageRequest);
		return list.map(x -> new TaskDTO(x));
	}

	@Transactional(readOnly = true)
	public TaskDTO findById(Long id) {
		Optional<Task> obj = repository.findById(id);
		Task entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new TaskDTO(entity, entity.getCategories());
	}

	@Transactional
	public TaskDTO insert(TaskDTO dto) {
		Task entity = new Task();
		//entity.setName(dto.getName());
		entity = repository.save(entity);
		return new TaskDTO(entity);
	}

	@Transactional
	public TaskDTO update(Long id, TaskDTO dto) {
		try {
			Task entity = repository.getOne(id);
			//entity.setName(dto.getName());
			entity = repository.save(entity);
			return new TaskDTO(entity);
		}
		catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
		repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
}