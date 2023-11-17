import EmpName from "./EmpName"
import employeelist from "../models/employeelist";
import EmployeeContact from "./EmployeeContact";

function EmployeeDisplay(props) {
    let id = props.details.id;
    id = 0;// TODO : Remove this hardcoding
    const data = employeelist[id]; 
  return (
    <div>
        <EmpName classnme="employeedetails-large-div" detail={employeelist[id]}/>
        <EmployeeContact displayName={"CALL Office"} data={data.office}/>
        <EmployeeContact displayName={"CALL Mobile"} data={data.mobile}/>
        <EmployeeContact displayName={"SMS"} data={data.sms}/>
        <EmployeeContact displayName={"Email"} data={data.email}/>

    </div>
  )
}

export default EmployeeDisplay