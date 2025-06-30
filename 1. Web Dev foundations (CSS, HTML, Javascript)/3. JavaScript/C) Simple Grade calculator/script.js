function calculateAverage(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}
//New "calculateAverage" function is scalable. 

// function calculateAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

function assignGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// get user input (old non-scalable)
// const score1 = parseFloat(prompt("Enter first score"));
// const score2 = parseFloat(prompt("Enter second score"));
// const score3 = parseFloat(prompt("Enter third score"));

const scores = [];
const numScores = parseInt(prompt(`How many scores do you want to enter?: `)) // Asking this question since code is not scalable to integers more or less than 3 grades
for (let i = 0; i < numScores; i++) {
    const score = prompt(`Enter Score ${i + 1}:`);
    scores.push(parseInt(score));
}

// const average = calculateAverage(score1, score2, score3);
const average = calculateAverage(scores);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);

