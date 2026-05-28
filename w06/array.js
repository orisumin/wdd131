// 1. Javascript arrays
let names = ["Peter", "James","John"];
console.log(names);
console.log(names[1]);
let grades = [100, 99, 98, 97];
console.log(grades[3]);
console.log(typeof(grades[1]));

// 2. Javascript objects
//own custom datatype(object)
//let studentName = 'Lauren';
//let studenClasses = ["wdd131", "cse210"];
//let studentGrades = [80,70];

//object
let student = {
    name: "Lauren",
    classes: ["wdd131", "cse210"],
    grades: [80, 70]
    }
//accessing the object properties
    console.log(student.name);

// 3. Array methods
names.forEach((name) => {
//runs this function once for every element in the arrry
//one at a time
console.log(name);
})

let newNames = names.map((name) => {
    return name + 'Bae';
}
);
//returns new array filtered by boolean
let filterName = names.filter((name) =>{
    //return true or false
    return name[0] === "M";
}
)


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

console.log(words[0]);

const newWords = words.map((element)=>{
    return element +'s';
});
console.log(newWords);

const newFruits = words.filter((element)=>{
    return element.includes("p");
});
console.log(newFruits);
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          
students.forEach((student)=>{
    console.log(student.first + student.last)
});

const lastaNames = students.filter(element => element.last.includes('a'));
console.log(lastaNames);

const randomNames = students.map(student => ({fullName:`${student.first} ${student.last}`}));
console.log(randomNames);