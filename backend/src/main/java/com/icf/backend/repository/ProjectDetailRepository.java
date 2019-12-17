package com.icf.backend.repository;

import com.icf.backend.entity.ProjectDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectDetailRepository extends JpaRepository<ProjectDetail, Integer> {

    @Query("SELECT pd FROM Project p, ProjectDetail pd WHERE p.id = pd.pid AND p.site_id = ?1")
    List<ProjectDetail> findProjectDetailsBySiteId(String site_id);

    @Query("SELECT pd FROM Project p, ProjectDetail pd WHERE p.id = pd.pid AND p.id = ?1")
    List<ProjectDetail> findProjectDetailsByProjectId(int project_id);
}
