package com.icf.backend.controller;

import com.icf.backend.entity.ProjectUser;
import com.icf.backend.repository.ProjectUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectUserController {

    @Autowired
    ProjectUserRepository projectUserRepository;

    @RequestMapping(value = "/project_users", method = RequestMethod.GET)
    public List<ProjectUser> getProjectUsers() {
        return projectUserRepository.findAll();
    }

    @RequestMapping(value = "/project_users/{id}", method = RequestMethod.GET)
    public ProjectUser getProjectUserById(@PathVariable("id") int id) {
        return projectUserRepository.findById(id).get();
    }

    @RequestMapping(value = "/project_users", params = {"uid"}, method = RequestMethod.GET)
    public List<ProjectUser> getProjectUsersByUid(@RequestParam("uid") int uid) {
        return projectUserRepository.findProjectUsersByUid(uid);
    }

    @RequestMapping(value = "/project_users", params = {"unique_id", "site_id"}, method = RequestMethod.GET)
    public ProjectUser getProjectUserByUniqueIdAndSiteId(@RequestParam("unique_id") String unique_id, @RequestParam("site_id") String site_id) {
        return projectUserRepository.findProjectUsersByUniqueIdAndSiteId(unique_id, site_id).get(0);
    }

    @RequestMapping(value = "/project_users", method = RequestMethod.POST)
    public ProjectUser createProjectUser(@RequestBody ProjectUser projectUser) {
        return projectUserRepository.save(projectUser);
    }

    @RequestMapping(value = "/project_users", method = RequestMethod.PUT)
    public ProjectUser updateProjectUser(@RequestBody ProjectUser projectUser) {
        return projectUserRepository.save(projectUser);
    }

    @RequestMapping(value = "/project_users/{id}", method = RequestMethod.DELETE)
    public void deleteProjectUserById(@PathVariable("id") int id) {
        projectUserRepository.deleteById(id);
    }
}
