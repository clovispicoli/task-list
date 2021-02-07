package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devninenine.tasklist.entities.Personal;

@Repository
public interface PersonalRepository extends JpaRepository<Personal, Long> {

}
