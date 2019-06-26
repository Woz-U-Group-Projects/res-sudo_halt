package com.group.sudo_halt.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class UserEnity {

	@Id
    public String id;

    public String fullname;
    public String username;
    
    public UserEnity() {}

    public UserEnity(String fullname, String username) {
        this.fullname = fullname;
        this.username = username;
    }
	
}
