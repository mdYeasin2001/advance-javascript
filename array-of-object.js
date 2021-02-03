const students = [
    {id: 21, name: 'Harry Potter'},
    {id: 31, name: 'Max Potter'},
    {id: 41, name: 'Min Potter'}
]
for(let i = 0; i < students.length; i++){
    const student = students[i].name;
    console.log(student);
}

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30);
const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);