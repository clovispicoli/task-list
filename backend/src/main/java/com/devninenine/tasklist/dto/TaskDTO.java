package com.devninenine.tasklist.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.entities.Task;

public class TaskDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String description;
	private Instant date;

	private List<CategoryDTO> categories = new ArrayList<>();

	public TaskDTO() {
	}

	public TaskDTO(Long id, String name, String description, Instant date) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.date = date;
	}

	public TaskDTO(Task entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
		this.date = entity.getDate();
	}

	public TaskDTO(Task entity, Set<Category> categories) {
		this(entity);
		categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

}
