/* eslint-disable react/jsx-no-undef */
import "./App.css";
import AddEmployee from "./component/AddEmployee";
import EmployeeList from "./component/EmployeeList";
import UpdateEmployee from "./component/UpdateEmployee";
import Navbar from "./component/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
