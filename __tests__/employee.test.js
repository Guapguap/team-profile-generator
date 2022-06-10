const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Alberto', 80, 'someEmail@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
})

