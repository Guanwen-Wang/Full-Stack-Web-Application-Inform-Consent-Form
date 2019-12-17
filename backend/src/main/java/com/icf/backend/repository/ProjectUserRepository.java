package com.icf.backend.repository;

import com.icf.backend.entity.ProjectUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectUserRepository extends JpaRepository<ProjectUser, Integer> {

    @Query("SELECT pu FROM ProjectUser pu, User u WHERE u.id = pu.uid AND u.id = ?1")
    List<ProjectUser> findProjectUsersByUid(int uid);

    @Query("SELECT pu FROM ProjectUser pu, User u, Project p WHERE u.id = pu.uid AND pu.pid = p.id AND u.unique_id = ?1 AND p.site_id = ?2")
    List<ProjectUser> findProjectUsersByUniqueIdAndSiteId(String unique_id, String site_id);
}
