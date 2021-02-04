package com.devninenine.tasklist.entities.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devninenine.tasklist.entities.Category;
import com.devninenine.tasklist.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;

	public List<Category> fikndAll(){
		return repository.findAll();
	}
}
