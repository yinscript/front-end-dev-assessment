// Group employees by department
function groupByDepartment(employees) {
    const result = {};

    for (const employee of employees) {
        const dept = employee.department;
        if (!result[dept]) {
            result[dept] = [];
        }
        result[dept].push(employee.name);
    }

    return result;
}
