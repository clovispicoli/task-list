package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devninenine.tasklist.entities.Work;

@Repository
public interface WorkRepository extends JpaRepository<Work, Long> {

}
