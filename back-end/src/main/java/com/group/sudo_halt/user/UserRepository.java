package com.group.sudo_halt.user;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<UserEnity, String> {

    public UserEnity findByUsername(String username);

}