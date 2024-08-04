package org.employeemanagement.services;

import org.employeemanagement.model.Employee;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployeeById(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployeeById(Long id, Employee employee);

}
