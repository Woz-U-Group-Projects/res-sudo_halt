package com.group.sudo_halt;

import org.jasypt.encryption.StringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@SpringBootApplication
@EnableMongoRepositories
@EnableEncryptableProperties
public class SudoHaltApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SudoHaltApplication.class, args);
	}

}
