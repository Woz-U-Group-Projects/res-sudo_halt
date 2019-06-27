package com.group.sudo_halt.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
    UserRepository userRepository;

    @Autowired
    private UserService userService;
	
	@GetMapping("/{username}")
	public ResponseEntity<UserEntity> getUserInfo(@PathVariable(value = "username") String username) {
        UserEntity foundUser = userRepository.findByUsername(username);

        if (foundUser == null) {
            return ResponseEntity.notFound().header("Message", "No user is found").build();
        }

        return ResponseEntity.ok(foundUser);
    }


    @PostMapping("/register")
    public void register(@RequestBody UserEntity newUser) {
        userService.save(newUser);
    }
    
    
	@PutMapping("/{username}")
	public ResponseEntity<UserEntity> updateUserInfo(@PathVariable(value = "username") String username, @RequestBody UserEntity user) {
        UserEntity foundUser = userRepository.findByUsername(username);

        if (foundUser == null) {
            return ResponseEntity.notFound().header("Message", "No user is found").build();
        }
        else {
        	foundUser.setFirstName(user.getFirstName());
        	foundUser.setLastName(user.getLastName());
        	foundUser.setEmail(user.getEmail());
        	foundUser.setPassword(user.getPassword());
        	foundUser.setUsername(user.getUsername());
        	userRepository.save(foundUser);
        }

        return ResponseEntity.ok(foundUser);
    }
	
	@DeleteMapping("/{username}")
	public ResponseEntity<UserEntity> deleteUserInfo(@PathVariable(value = "username") String username){
		 UserEntity foundUser = userRepository.findByUsername(username);
		 if (foundUser == null) {
	            return ResponseEntity.notFound().header("Message", "No user is found").build();
	     }
		 else {
			 userRepository.delete(foundUser);
		 }
		 return ResponseEntity.ok().build();
		 
	}

}