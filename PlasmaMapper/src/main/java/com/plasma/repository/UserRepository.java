package com.plasma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.plasma.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	List <User> findAllByLocationAndBloodGroup(String location, String bloodGroup);
	List <User> findAllByLocation(String location);
	List <User> findAllByBloodGroup(String bloodGroup);
}
