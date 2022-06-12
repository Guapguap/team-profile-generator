const Engineer = require('../lib/Engineer');

// this tests the parent class 

// creates the new Engineer object 
test('Creates new Engineer', () => {
    const engineer = new Engineer('Alberto', 80, 'someEmail@gmail.com', 'Guapguap');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    
})

// gets all the values from the methods 
test('Checks all methods for Engineer class', () => {
    const engineer = new Engineer('Alberto', 80, 'someEmail@gmail.com', 'Guapguap');

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe('Engineer');
})