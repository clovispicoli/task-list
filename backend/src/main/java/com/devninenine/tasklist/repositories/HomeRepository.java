package com.devninenine.tasklist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devninenine.tasklist.entities.Home;

@Repository
public interface HomeRepository extends JpaRepository<Home, Long> {

}
