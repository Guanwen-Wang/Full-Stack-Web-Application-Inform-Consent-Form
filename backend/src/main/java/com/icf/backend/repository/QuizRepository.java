package com.icf.backend.repository;

import com.icf.backend.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {

    @Query("SELECT q FROM Quiz q WHERE q.pid = ?1")
    List<Quiz> findQuizzesByProjectId(int pid);

    @Query("SELECT q FROM Quiz q, Project p WHERE q.pid = p.id AND p.site_id = ?1")
    List<Quiz> findQuizzesBySiteId(String site_id);
}
