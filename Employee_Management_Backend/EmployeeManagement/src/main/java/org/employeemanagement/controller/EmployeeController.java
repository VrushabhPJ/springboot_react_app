package org.employeemanagement.controller;

import org.employeemanagement.model.Employee;
import org.employeemanagement.services.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
     private final EmployeeService employeeService;

     public EmployeeController(EmployeeService employeeService) {
         this.employeeService= employeeService;
     }

     @PostMapping("/employees")
     public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
     }

     @GetMapping("/employees")
     public List<Employee> getAllEmployees() {
         return employeeService.getAllEmployees();
     }

     @DeleteMapping("/employees/{id}")
     public ResponseEntity<Map<String , Boolean>> deleteEmployee(@PathVariable Long id) {
         boolean deleted= false;
         deleted= employeeService.deleteEmployeeById(id);

         Map<String , Boolean> response= new HashMap<>();
         response.put("deleted" , deleted);

         return ResponseEntity.ok(response);
     }

     @GetMapping("/employees/{id}")
     public ResponseEntity<Employee> getEmployeesById(@PathVariable Long id) {
         Employee employee= employeeService.getEmployeeById(id);

         return ResponseEntity.ok(employee);
     }

     @PutMapping("/employees/{id}")
     public ResponseEntity<Employee> updateEmployeesById(@PathVariable Long id,
                                                        @RequestBody Employee employee) {
         employee= employeeService.updateEmployeeById(id , employee);
         return ResponseEntity.ok(employee);
     }

}

//2.00.36