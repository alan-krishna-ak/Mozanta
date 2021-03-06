package com.mozanta.student.registration.serivce;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.mozanta.student.registration.model.IdSequence;

import com.mozanta.student.registration.model.Student;
import com.mozanta.student.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;

	@Autowired
	private MongoOperations mongoOperations;

	public int getSequenceNumber(String sequenceName) {
		// get sequence number
		Query query = new Query(Criteria.where("id").is(sequenceName));

		// update the sequence number
		Update update = new Update().inc("idSequence", 1);

		// modify in the document
		IdSequence counter = mongoOperations.findAndModify(query, update, options().returnNew(true).upsert(true),
				IdSequence.class);
		return !Objects.isNull(counter) ? counter.getIdSequence() : 1;
	}

	public String save(Student student) {
		repo.save(student);
		return "saved";
	}

	public List<Student> findAll() {
		List<Student> s = mongoOperations.findAll(Student.class);
		return s;
	}

}
