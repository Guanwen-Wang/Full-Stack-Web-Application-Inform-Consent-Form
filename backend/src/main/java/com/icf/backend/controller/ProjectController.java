package com.icf.backend.controller;

import com.icf.backend.entity.Project;
import com.icf.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @RequestMapping(value = "/projects", method = RequestMethod.GET)
    public List<Project> getProjects() {
    return projectRepository.findAll();
}

    @RequestMapping(value = "/projects/{id}", method = RequestMethod.GET)
    public Project getProjectById(@PathVariable("id") int id) {
        return projectRepository.findById(id).get();
    }

    @RequestMapping(value = "/projects", params = {"uid", "site_id"}, method = RequestMethod.GET)
    public Project getProjectByUserIdAndSiteId(@RequestParam("uid") int uid, @RequestParam("site_id") String site_id) {
        return projectRepository.findProjectsByUserIdAndSiteId(uid, site_id).get(0);
    }

    @RequestMapping(value = "/projects", params = {"unique_id", "site_id"}, method = RequestMethod.GET)
    public Project getProjectsByUniqueIdAndSiteId(@RequestParam("unique_id") String unique_id, @RequestParam("site_id") String site_id) {
        return projectRepository.findProjectsByUniqueIdAndSiteId(unique_id, site_id).get(0);
    }

    @RequestMapping(value = "/projects", params = {"site_id"}, method = RequestMethod.GET)
    public Project getProjectsBySiteId(@RequestParam("site_id") String site_id) {
        return projectRepository.findProjectsBySiteId(site_id).get(0);
    }

    @RequestMapping(value = "/projects", params = {"uid"}, method = RequestMethod.GET)
    public List<Project> getProjectsByUid(@RequestParam("uid") int uid) {
        return projectRepository.findProjectsByUid(uid);
    }

    @RequestMapping(value = "/projects", method = RequestMethod.POST)
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @RequestMapping(value = "/projects", method = RequestMethod.PUT)
    public Project updateProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @RequestMapping(value = "/projects/{id}", method = RequestMethod.DELETE)
    public void deleteProjectById(@PathVariable("id") int id) {
        projectRepository.deleteById(id);
    }
}
