import EmpName from "./EmpName";

function Employee(props) {
  return (
    <div className="employee-div">
      
            {props.details.map((emp) => {
             return <EmpName detail = {emp} onClick=""/>
            })}
      
    </div>
  )
}

export default Employee