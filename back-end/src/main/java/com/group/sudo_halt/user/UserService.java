package com.group.sudo_halt.user;


import com.group.sudo_halt.auth.CustomUserDetailsUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private PasswordEncoder passwordEncoder;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /**
     *  Get and encrypt password from a new user and then save it to  userRepository
     * @param newUser the registration info from a nuew user
     * @return userdetails include username, password, and authorities
     */
    public org.springframework.security.core.userdetails.User save(UserEnity newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        UserEnity savedUser = userRepository.save(newUser);
        return new org.springframework.security.core.userdetails.User(savedUser.getUsername(), savedUser.getPassword(), getAuthorities());
    }

    private List<SimpleGrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authList = new ArrayList<>();
        authList.add(new SimpleGrantedAuthority("ROLE_USER"));
        return authList;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        UserEnity user = userRepository.findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException(username);
        }
        return new CustomUserDetailsUser(user.getUsername(), user.getPassword(), getAuthorities(), user.getUserId());
    }
}