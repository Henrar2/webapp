package com.webapp.back.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.back.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Long>{

	Department findByName(String name);	
	
}
