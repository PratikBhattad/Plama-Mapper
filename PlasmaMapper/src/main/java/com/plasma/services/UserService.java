package com.plasma.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.plasma.models.User;
import com.plasma.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {
	
	
	private final UserRepository userRepository;
	
	public User verifyDonor(User user) {

		return userRepository.save(user);
		
	}

	public User createUser(User user) {

		return userRepository.save(user);
		
	}
	public List<User> getAllDonors() {

		return userRepository.findAll();
		
	}
	public List<User> getAllDonorsByLocationAndBloodGroup(String location,String bloodGroup) {

		return userRepository.findAllByLocationAndBloodGroup(location,bloodGroup);
		
	}
	
	public List<User> getAllDonorsByLocation(String location) {

		return userRepository.findAllByLocation(location);
		
	}
	
	public List<User> getAllDonorsByBloodGroup(String bloodGroup) {

		return userRepository.findAllByBloodGroup(bloodGroup);
		
	}
	
	public void deleteDonor(Long userId)
	{
		userRepository.deleteById(userId);
	}
	

}
