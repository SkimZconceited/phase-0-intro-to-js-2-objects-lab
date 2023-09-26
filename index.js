const employee = {
    name: 'Sam',
}

function updateEmployeeWithKeyAndValue(x, y, z) {
    const newEmployee = {...x};
    newEmployee[y] = z;
    // console.log(Object.keys(employee) + ' with value ' + Object.values(employee) + ' \n new object ' + Object.keys(newEmployee) + ' with value ' + Object.values(newEmployee));
    // console.log(newEmployee);
    // console.log(employee);
    return newEmployee;
}

updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");


function destructivelyUpdateEmployeeWithKeyAndValue(x, y, z) {
    x[y] = z;
    console.log(x);
    return x;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(x, y) {
    const newEmployee = {...x};
    delete newEmployee[y];
    return newEmployee;
}

deleteFromEmployeeByKey(employee, 'streetAddress');


function destructivelyDeleteFromEmployeeByKey(x, y) {
    x = employee;
    delete x[y];
    console.log(x);
    console.log(employee);
    return x;
}

let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');