
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


