package com.icf.backend.controller;

import com.icf.backend.entity.Quiz;
import com.icf.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @RequestMapping(value = "/quizzes", method = RequestMethod.GET)
    public List<Quiz> getQuizzes() {
        return quizRepository.findAll();
    }

    @RequestMapping(value = "/quizzes", params = {"pid"}, method = RequestMethod.GET)
    public List<Quiz> getQuizzesByProjectId(@RequestParam("pid") int pid) {
        return quizRepository.findQuizzesByProjectId(pid);
    }

    @RequestMapping(value = "/quizzes", params = {"site_id"}, method = RequestMethod.GET)
    public List<Quiz> getQuizzesBySiteId(@RequestParam("site_id") String site_id) {
        return quizRepository.findQuizzesBySiteId(site_id);
    }

    @RequestMapping(value = "/quizzes/{id}", method = RequestMethod.GET)
    public Quiz getQuizById(@PathVariable("id") int id) {
        return quizRepository.findById(id).get();
    }

    @RequestMapping(value = "/quizzes", method = RequestMethod.POST)
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @RequestMapping(value = "/quizzes", method = RequestMethod.PUT)
    public Quiz updateQuiz(@RequestBody Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @RequestMapping(value = "/quizzes/{id}", method = RequestMethod.DELETE)
    public void deleteQuizById(@PathVariable("id") int id) {
        quizRepository.deleteById(id);
    }
}
