package com.icf.backend.controller;

import com.icf.backend.entity.ProjectDetail;
import com.icf.backend.repository.ProjectDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectDetailController {

    @Autowired
    ProjectDetailRepository projectDetailRepository;

    @RequestMapping(value = "/project_details", method = RequestMethod.GET)
    public List<ProjectDetail> getProjectDetails() {
        return projectDetailRepository.findAll();
    }

    @RequestMapping(value = "/project_details", params = {"project_id"}, method = RequestMethod.GET)
    public List<ProjectDetail> getProjectDetailsByProjectId(@RequestParam("project_id") int project_id) {
        return projectDetailRepository.findProjectDetailsByProjectId(project_id);
    }

    @RequestMapping(value = "/project_details", params = {"site_id"}, method = RequestMethod.GET)
    public List<ProjectDetail> getProjectDetailsBySiteId(@RequestParam("site_id") String site_id) {
        return projectDetailRepository.findProjectDetailsBySiteId(site_id);
    }

    @RequestMapping(value = "/project_details/{id}", method = RequestMethod.GET)
    public ProjectDetail getProjectDetailById(@PathVariable("id") int id) {
        return projectDetailRepository.findById(id).get();
    }

    @RequestMapping(value = "/project_details", method = RequestMethod.POST)
    public ProjectDetail createProjectDetail(@RequestBody ProjectDetail projectDetail) {
        return projectDetailRepository.save(projectDetail);
    }

    @RequestMapping(value = "/project_details", method = RequestMethod.PUT)
    public ProjectDetail updateProjectDetail(@RequestBody ProjectDetail projectDetail) {
        return projectDetailRepository.save(projectDetail);
    }

    @RequestMapping(value = "/project_details/{id}", method = RequestMethod.DELETE)
    public void deleteProjectDetailById(@PathVariable("id") int id) {
        projectDetailRepository.deleteById(id);
    }
}
