package com.plasma.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plasma.models.User;
import com.plasma.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UserController {
	
	private final UserService userService;
	
	@PostMapping("/Donor")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	@GetMapping("/Donor")
	public List<User> getAllDonors() {
		return userService.getAllDonors();
	}
	@GetMapping("/Donor/{location}/{bloodGroup}")
	public List<User> getAllDonorsByLocationAndBloodGroup(@PathVariable String location,@PathVariable String bloodGroup) {
		return userService.getAllDonorsByLocationAndBloodGroup(location, bloodGroup);
	}
	@GetMapping("/Donor/location/{location}")
	public List<User> getAllDonorsByLocation(@PathVariable String location) {
		return userService.getAllDonorsByLocation(location);
	}
	@GetMapping("/Donor/bloodgroup/{bloodGroup}")
	public List<User> getAllDonorsByBloodGroup(@PathVariable String bloodGroup) {
		return userService.getAllDonorsByBloodGroup(bloodGroup);
	}
	@DeleteMapping("/Donor/{userId}")
	public void deleteDonor(@PathVariable Long userId) {
		userService.deleteDonor(userId);
	}
	@PutMapping("/Donor/{userId}")
	public User verifyDonor(@RequestBody User user) {
		return userService.verifyDonor(user);
	}
	@GetMapping("/login/{username}/{password}")
	public boolean login(@PathVariable String username,@PathVariable String password) {
		if(username.equals("admin@123") && password.equals("admin@123"))
		{
			System.out.println(true);
			return true;
		}
		else
		{
			return false;
		}
	}
}
