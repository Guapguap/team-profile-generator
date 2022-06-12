const Intern = require('../lib/Intern');

// this tests the parent class 

// creates the new Intern object 
test('Creates new Intern', () => {
    const intern = new Intern('Alberto', 80, 'someEmail@gmail.com', 'School');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    
})

// gets all the values from the methods 
test('Checks all methods for Intern class', () => {
    const intern = new Intern('Alberto', 80, 'someEmail@gmail.com', 'School');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
})