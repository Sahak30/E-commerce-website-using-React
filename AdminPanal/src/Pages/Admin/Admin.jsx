import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";
import { Route, Routes } from "react-router-dom";
import Addproduct from "../../Components/Addproduct/Addproduct";
import Listproduct from "../../Components/Listproduct/Listproduct";

function Admin() {
  return (
    <section className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Listproduct />} />
      </Routes>
    </section>
  );
}

export default Admin;
