import Header from "../Navbar/Header"
import TaskListNumber from "../Navbar/TaskListNumber"
import TaskList from "../TaskList/TaskList"


const EmployeeDashboard = () => {
    return (
        <div className="bg-[#1C1C1C] p-10 h-screen">
            <Header/>
            <TaskListNumber/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard