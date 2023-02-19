// Write your solution in this file!
const employee = {
    name: "Josh",
    streetAddress: "118-80 Metropolitan Ave.",    
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee};

    updateEmployee[key] = value;

    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updateEmployee = {...employee[key]};
    delete updateEmployee.key;
    return updateEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}