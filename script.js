
let user = {
    username: "Vikka",
    race: "Undead",
    spec: "Affliction",
    level: 54, 
    guild: "Self Found",
    professions: ["Tailoring", "Enchanting", "First Aid"],
    minion: {
        type: "Succubus",
        name: "Lyriel"
    }
}

//opgave 1 

console.log(user.username)
console.log(user.race)
console.log(user.spec)
console.log(user.level)


console.log(user["username"])
console.log(user["race"])
console.log(user["spec"])
console.log(user["level"])

//opgave 2 

let iterator = Object.values(user);

for (let value of iterator) {
  console.log(value);
}


//opgave 3 

let students = [
    { name: "Sofie", age: 25, course: "Webudvikler"},
    { name: "Lukas", age: 22, course: "Mediegrafiker"},
    { name: "Emil", age: 28, course: "Teknisk Designer"},
];

let studentListDiv = document.querySelector(".emptyDiv");

students.forEach(function(student) { 
    let studentDiv = document.createElement("div");
    studentDiv.textContent = 
    // student.name + ', Alder: ' + student.age + ', Uddannelse: ' + student.course; 
    `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentListDiv.append(studentDiv);
});

