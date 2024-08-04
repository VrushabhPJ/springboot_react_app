/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {

    const {id} = useParams();
    const navigate= useNavigate();
    const [employee , setEmployee] = useState({  
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const updateEmployee= (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response) => {
            navigate("/employeelist");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleChange = (e) => {
        const value= e.target.value
        setEmployee({ ...employee, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response= await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    } , []);

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b"> 
            <div className="px-8 py-8">
                <div className="font-thin text-2xl">
                    <h1>Update Employee</h1>
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
                    onClick={updateEmployee} >
                        Update
                    </button>
                    <button 
                    onClick={() => navigate("/employeelist")}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500  rounded ">
                        Cancel
                    </button>
                </div>
            </div>

        </div>
    );
};

export default UpdateEmployee;