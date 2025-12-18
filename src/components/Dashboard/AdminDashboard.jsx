import React from "react";
import Header from "../Navbar/Header";
import CreateTask from "../../utils/CreateTask";
import AllTask from "../../utils/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
    <CreateTask/>
    <AllTask/>
        </div>
  );
};

export default AdminDashboard;
