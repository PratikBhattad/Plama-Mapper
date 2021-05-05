package com.plasma.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	
	@Column(unique = true)
	@NotBlank
	private String email;
	
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String location;
	
	@NotBlank
	private String bloodGroup;
	
	@NotBlank
	private String phone;
	
	@NotBlank
	private String verified;
	
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Kolkata")
	private Date diagnosisDate;
	
}
