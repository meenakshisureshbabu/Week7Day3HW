import EmpName from "./EmpName";

function Employee(props) {
  return (
    <div className="employee-div">
      
            {props.details.map((emp) => {
             return <EmpName classnme="employeedetails-div" detail = {emp} onClick=""/>
            })}
      
    </div>
  )
}

export default Employee