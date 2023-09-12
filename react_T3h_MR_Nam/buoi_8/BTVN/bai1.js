// Bài 1:
// 1) What is the average income of all the people in the array?
// 2) Who are the people that are currently older than 30?
// 3) Get a list of the people's full name (firstName and lastName).
// 4) Get a list of people in the array ordered from youngest to oldest.
// 5) How many people are there in each department?

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

//câu 1


//cách 1:
// let average = 0;
// people.forEach((item)=> average += Number(item.salary) / people.length ) ;
//cách 2:
// const average = people.reduce((a, i) => a + parseInt(i.salary), 0) / (people.length + 0.0);

//câu 2


// let ullYear = new Date().getFullYear;
// console.log(ullYear);

//cách 1:
// const olderThanThirty = people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30)
// console.table(olderThanThirty);
//cách 2:
// const olderThan30 = [];
// for(let i = 0; i < people.length; i++) {
//     if((new Date().getFullYear() - new Date(people[i].DOB).getFullYear()) > 30 ) {
//         olderThan30.push(people[i])
//     }
// }
// console.table(olderThan30);

// câu 3:

// cách 1:
// const fullName = people.map(({firstName, lastName}) => `${firstName} ${lastName}`)

// cách 2:
// let fullName = [];
// for(var i = 0; i<people.length; i++){
//     fullName.push(`${people[i].firstName} ${people[i].lastName}`)
// }
// console.table(fullName);


// cách 3

// const fullName = [];
// people.forEach(person => {
//     fullName.push(`${person.firstName} ${person.lastName}`)
// });
// console.table(fullName);

// câu 4:

// const array_ordered = people.sort((a, b) => new Date(a.DOB) - new Date(b.DOB))
// console.table(array_ordered);


// câu 5:

let departments = {};

people.forEach((e) => {
    // console.log(departments[e.department] == null);
    if(departments[e.department] == null)
        departments[e.department] = 0;
    departments[e.department] += 1;
})
console.log(departments);










