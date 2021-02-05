package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devninenine.tasklist.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
