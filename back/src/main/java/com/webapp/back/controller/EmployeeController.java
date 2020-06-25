package com.webapp.back.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.back.model.Employee;
import com.webapp.back.repository.EmployeeRepository;

@Controller
@RestController
@RequestMapping(path="/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping(path="/employees")
	Collection<Employee> getEmployee(){
		return employeeRepository.findAll();
	}
	
	@DeleteMapping(path="/employees/{afm}")
	ResponseEntity<?> deleteEmployee(@PathVariable Long afm){
		employeeRepository.deleteById(afm);
		return ResponseEntity.ok().build();	
	}
	
	@PostMapping(path="/employees")
	ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) throws URISyntaxException{
		Employee result=employeeRepository.save(employee);
		return ResponseEntity.created(new URI("/api/employees"+result.getAfm())).body(result);
	}
	
	//Update
}
