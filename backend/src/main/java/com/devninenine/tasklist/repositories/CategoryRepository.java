package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devninenine.tasklist.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
