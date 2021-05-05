package com.plasma.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
/**
 * This class is used for Web configuration
 * 
 *
 */
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
	/**
	 *This method is used for enabling Cors for all origins and all methods
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("*");
	}
	
	
}