package com.webapp.back.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.back.model.Department;
import com.webapp.back.repository.DepartmentRepository;



@Controller
@RestController
@RequestMapping(path="/api")
public class DepartmentController {
	
	private DepartmentRepository departmentsRepository;
		
	public DepartmentController(DepartmentRepository departmentsRepository) {
		super();
		this.departmentsRepository=departmentsRepository;
	}	
	
	@GetMapping("/departments")
	Collection<Department> departments(){
		return departmentsRepository.findAll(); 
	}
	
	@GetMapping("/departments/{id}")
	ResponseEntity<?> getDepartments(@PathVariable long id){
		Optional<Department> department = departmentsRepository.findById(id);
		return department.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/departments")
	ResponseEntity<Department> createDepartments(@Valid @RequestBody Department department)throws URISyntaxException{
		Department result = departmentsRepository.save(department);
		return ResponseEntity.created(new URI ("api/departments" + result.getId())).body(result);
	}
	
	@PutMapping("/departments/{id}")
	ResponseEntity<Department> updateDepartments(@Valid @RequestBody Department department){
		Department result = departmentsRepository.save(department);
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/departments/{id}")
	ResponseEntity<?> deleteDepartments(@PathVariable Long id){
		departmentsRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	 
}
