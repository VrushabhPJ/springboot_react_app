package org.employeemanagement.services;

import org.employeemanagement.entity.EmployeeEntity;
import org.employeemanagement.model.Employee;
import org.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository= employeeRepository;
    }
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity= new EmployeeEntity();

        BeanUtils.copyProperties(employee , employeeEntity);
        employeeRepository.save(employeeEntity); //saving the employee in db

        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                = employeeRepository.findAll();
        List<Employee> employees= employeeEntities
                .stream()
                .map(emp -> new Employee(emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployeeById(Long id) {
        EmployeeEntity employee= employeeRepository.findById(id).get();
        employeeRepository.delete(employee);

        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntities
                = employeeRepository.findById(id).get();
        Employee employee= new Employee();
        BeanUtils.copyProperties(employeeEntities , employee);

        return employee;
    }

    @Override
    public Employee updateEmployeeById(Long id, Employee employee) {
        EmployeeEntity employeeEntity=
                employeeRepository.findById(id).get();

        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;
    }
}
