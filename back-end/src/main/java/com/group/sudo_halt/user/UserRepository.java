package com.group.sudo_halt.user;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<UserEntity, String> {

    public UserEntity findByUsername(String username);

	public UserEntity findByEmail(String email);
	
}