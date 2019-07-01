package com.group.sudo_halt.user;

import java.util.List;


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
    
    // GET ALL USERS
    @GetMapping()
    public List<UserEntity> getAllUsers(){
    	return userRepository.findAll();
    }
    
    // GET INDIVIDUAL USER
	@GetMapping("/{username}")
	public ResponseEntity<UserEntity> getUserInfo(@PathVariable(value = "username") String username) {
        UserEntity foundUser = userRepository.findByUsername(username);

        if (foundUser == null) {
            return ResponseEntity.notFound().header("Message", "No user is found").build();
        }
        return ResponseEntity.ok(foundUser);
    }

	// REGISTER USER
	@PostMapping("/register")
	public ResponseEntity<UserEntity> register(@RequestBody UserEntity newUser){
		UserEntity searchedUsername = userRepository.findByUsername(newUser.getUsername());
//		UserEntity searchedEmail = userRepository.findByEmail(newUser.getEmail());
//		System.out.println(searchedEmail);
//		if(searchedEmail != null) {
//			return ResponseEntity.badRequest().header("Message", "Email already exists!").build();
//		}
		if(searchedUsername != null) {
			return ResponseEntity.badRequest().header("Message", "User already exists!").build();
		}	
		
		userService.save(newUser);
		return ResponseEntity.ok(newUser);
	}
	
	// EDIT USER
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
	
	// DELETE USER
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