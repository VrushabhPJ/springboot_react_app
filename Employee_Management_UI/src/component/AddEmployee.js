/* eslint-disable no-undef */
import React, { useState } from "react"
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


const AddEmployee= () => {

    const [employee, setEmployee] = useState({  //default state on AddEmployee
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const navigate= useNavigate();

    const handleChange = (e) => {
        const value= e.target.value
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
          .then((response) => {
            console.log(response);
            navigate("/employeelist");
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const reset = (e) => {   //functionality for clear button
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b"> 
            <div className="px-8 py-8">
                <div className="font-thin text-2xl">
                    <h1>Add New Employee</h1>
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-normal">
                        First Name
                    </label>
                    <input className="h-10 w-96 border mt-2 px-2 py-2"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                    type="text"></input>
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-normal">
                        Last Name
                    </label>
                    <input className="h-10 w-96 border mt-2 px-2 py-2"
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    ></input>
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 font-normal">
                        Email
                    </label>
                    <input className="h-10 w-96 border mt-2 pt-2 py-2"
                    name="emailId"
                    value={employee.emailId}
                    onChange={(e) => handleChange(e)}
                    type="email"></input>
                </div>
                <div className="item-center justify-center h-14 w-full my-4 pt-4 space-x-4">
                    <button 
                    className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                    onClick={saveEmployee} >
                        Save
                    </button>
                    <button 
                    onClick={reset}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500  rounded ">
                        Clear
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AddEmployee;