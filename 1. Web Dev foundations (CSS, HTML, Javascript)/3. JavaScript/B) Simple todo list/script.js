const tasks = []; // init where todos will go

while (true) {
    // asking for user input
    let task = prompt("Enter a task (or type 'done' to finish):");

    // check if user input is done or Done or DONE
    if (task.toLowerCase() === 'done') {
        break; // if done, breaking out of while loop
    }

    tasks.push(task);
}



// // Displaying respective to-do list task.
// console.log("Your Todo List:");
// tasks.forEach((task, index) => {
//   console.log(`${index + 1}. ${task}`);
// });



// Displaying tasks using another type of for loop:

// console.log("Your Todo List:");
// for(let i = 0; i < tasks.length; i++) {
//     console.log(`${i+1}. ${tasks[i]}`)
// }


// Displaying using "for... of":

// console.log("Your Todo List:")
// let count = 1
// for (const item of tasks){
//     console.log(`${count}. ${item}`);
//     count++;
// }



// Displaying using "for... in". NOTE: This is typically used to access objects. Less common to use this type for arrays.

for (const key in tasks) {

    console.log(`${parseInt(key) + 1}: ${tasks[key]}`)

}



// Note all manners of displaying for each loop type all work and have been tested