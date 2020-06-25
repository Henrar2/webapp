package com.webapp.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.back.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
	
	Employee findByName(String name);
	
}
