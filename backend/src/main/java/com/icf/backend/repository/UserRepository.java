package com.icf.backend.repository;

import com.icf.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.first_name = ?1 AND u.last_name = ?2 AND u.password = ?3")
    List<User> findUserByFirstNameAndLastNameAndPassword(String first_name, String last_name, String password);

    @Query("SELECT u FROM User u WHERE u.unique_id = ?1")
    List<User> findUserByUniqueId(String unique_id);
}
