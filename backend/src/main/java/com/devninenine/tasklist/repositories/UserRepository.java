package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devninenine.tasklist.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
