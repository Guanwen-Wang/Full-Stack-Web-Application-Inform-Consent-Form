package com.icf.backend.repository;

import com.icf.backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    @Query("SELECT p FROM Project p, ProjectUser pu WHERE p.id = pu.pid AND pu.uid = ?1 AND p.site_id = ?2")
    List<Project> findProjectsByUserIdAndSiteId(int uid, String site_id);

    @Query("SELECT p FROM Project p, User u, ProjectUser pu WHERE p.id = pu.pid AND pu.uid = u.id AND u.unique_id = ?1 AND p.site_id = ?2")
    List<Project> findProjectsByUniqueIdAndSiteId(String unique_id, String site_id);

    @Query("SELECT p FROM Project p WHERE p.site_id = ?1")
    List<Project> findProjectsBySiteId(String site_id);

    @Query("SELECT p FROM Project p, User u, ProjectUser pu WHERE p.id = pu.pid AND pu.uid = u.id AND u.id = ?1")
    List<Project> findProjectsByUid(int uid);
}
