import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import "./EmployeeList.css";

export function EmployeeList(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmp => setEmployees(dbEmp))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="EmployeeList">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Birth Date</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e => <tr>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.country}</td>
                        <td>{e.city}</td>
                        <td>{e.birthDate}</td>
                        <td>
                            <img src={e.imageUrl} />
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}
