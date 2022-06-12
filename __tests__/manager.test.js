const Manager = require('../lib/Manager');

// this tests the parent class 

// creates the new Manager object 
test('Creates new Manager', () => {
    const manager = new Manager('Alberto', 80, 'someEmail@gmail.com', 'School');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
    
})

// gets all the values from the methods 
test('Checks all methods for Manager class', () => {
    const manager = new Manager('Alberto', 80, 'someEmail@gmail.com', 'School');

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOffice()).toBe(manager.office);
    expect(manager.getRole()).toBe('Manager');
})