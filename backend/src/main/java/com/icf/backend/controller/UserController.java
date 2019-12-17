package com.icf.backend.controller;

import com.icf.backend.entity.User;
import com.icf.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable("id") int id) {
        return userRepository.findById(id).get();
    }

    @RequestMapping(value = "/users", params = {"fname", "lname", "password"}, method = RequestMethod.GET)
    public User getUserByFirstNameAndLastNameAndPassword(@RequestParam("fname") String fname, @RequestParam("lname") String lname, @RequestParam("password") String password) {
        return userRepository.findUserByFirstNameAndLastNameAndPassword(fname, lname, password).get(0);
    }

    @RequestMapping(value = "/users", params = {"unique_id"}, method = RequestMethod.GET)
    public User getUserByUniqueId(@RequestParam("unique_id") String unique_id) {
        return userRepository.findUserByUniqueId(unique_id).get(0);
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @RequestMapping(value = "/users", method = RequestMethod.PUT)
    public User updateUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public void deleteUserById(@PathVariable("id") int id) {
        userRepository.deleteById(id);
    }
}
