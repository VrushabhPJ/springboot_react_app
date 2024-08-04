package org.employeemanagement.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.persister.collection.mutation.UpdateRowsCoordinatorNoOp;

@Entity
@Data
@Table(name = "employee")
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
