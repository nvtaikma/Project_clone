


// 1. Write the command to add the language "Go" to the end of the languages array.
// 2. Change the difficulty to the value of 7.
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
// 4. Write the command to add a new key called isFun and a value of true to the programming object.
// 5. Using a loop, iterate through the languages array and console.log all of the languages.
// 6. Using a loop, console.log all of the keys in the programming object.
// 7. Using a loop, console.log all of the values in the programming object.
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1
// programming.languages.push("go");
// console.log(programming);
// 2
// programming.difficulty = 7;
// console.log(programming);
// 3
delete programming.jokes;
// console.log(programming);
// 4
programming.isFun = true;
// console.log(programming);
// 5
for ( key in programming.languages){
    // console.log(programming.languages[key])
  }
// 6
for (key in programming){
    // console.log(key)
  }
//7
for (key in programming){
    // console.log(programming[key])
  }


  //destructoring 
function bar(){
    return {
        x:4,
        y:5,
        z:6,
    };
}
const { x: first, y: second, z: third,} = bar();
// console.log(first, second,third,);

console.log(programming);

const programmingNew = {
    ...programming,
    
}
programmingNew.isFun = true;
programmingNew.difficulty = 7;

console.log(programming);





