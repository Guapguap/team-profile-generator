const Employee = require('../lib/Employee');

// this tests the parent class 

// creates the new employee object 
test('Creates new employee', () => {
    const employee = new Employee('Alberto', 80, 'someEmail@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
})

// gets all the values from the methods 
test('Checks all methods for Employee class', () => {
    const employee = new Employee('Alberto', 80, 'someEmail@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})