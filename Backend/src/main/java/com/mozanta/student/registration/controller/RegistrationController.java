package com.mozanta.student.registration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mozanta.student.registration.model.Student;
import com.mozanta.student.registration.repository.RegistrationRepository;
import com.mozanta.student.registration.serivce.RegistrationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class RegistrationController {

	@Autowired
	private RegistrationService service;

	@PostMapping("/save")
	public String save(@RequestBody Student student) {
		// generate sequence
		Integer i = service.getSequenceNumber(Student.SEQUENCE_NAME);

		String str = String.format("%03d", i); // triple digit format
		student.setAdNumber("R-" + str); // Appending
		return service.save(student);
	}

	@GetMapping(value = "/students")
	public List<Student> getAllStudents() {
		return service.findAll();
	}


}
