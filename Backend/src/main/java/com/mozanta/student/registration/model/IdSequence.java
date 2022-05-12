package com.mozanta.student.registration.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "id_sequence")
public class IdSequence {

	private String id;
	private int idSequence;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getIdSequence() {
		return idSequence;
	}

	public void setIdSequence(int idSequence) {
		this.idSequence = idSequence;
	}

}
