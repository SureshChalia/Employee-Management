import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeeEditForm from "./components/EmployeeEditForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
        <Route path="/editform/:id" element={<EmployeeEditForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
