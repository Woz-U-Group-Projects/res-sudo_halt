package com.group.sudo_halt.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
    UserRepository userRepository;
	
	
	@GetMapping("/{username}")
	public ResponseEntity<UserEnity> getUserInfo(@PathVariable(value = "username") String username) {
        UserEnity foundUser = userRepository.findByUsername(username);

        if (foundUser == null) {
            return ResponseEntity.notFound().header("Message", "Not user is found").build();
        }

        return ResponseEntity.ok(foundUser);
    }

}
