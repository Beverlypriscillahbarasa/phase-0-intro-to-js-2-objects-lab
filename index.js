// Write your solution in this file!
let employee = {
    name:"  99 ",
    streetAddress: " 1234 Nairobi  "
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let updateEmployee = { ...employee};
    updateEmployee [ key] = value;
    return updateEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key, value)  {
     let deleteFromEmployee = {...employee}
    delete deleteFromEmployee[key];
  // Return the new object without the deleted key
  return deleteFromEmployee;

}



function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }

// destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");

// console.log(employee); // Output: { name: "John Doe" }


  
  