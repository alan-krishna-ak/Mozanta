package com.mozanta.student.registration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mozanta.student.registration.model.Student;

@Repository
public interface RegistrationRepository extends MongoRepository<Student,String>{
	
	

}
