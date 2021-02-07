package com.devninenine.tasklist.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.entities.Home;

public class HomeDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String description;
	private LocalDate date;

	private List<CategoryDTO> categories = new ArrayList<>();

	public HomeDTO() {
	}

	public HomeDTO(Long id, String name, String description, LocalDate date) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.date = date;
	}

	public HomeDTO(Home entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
		this.date = entity.getDate();
	}

	public HomeDTO(Home entity, Set<Category> categories) {
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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}
}
