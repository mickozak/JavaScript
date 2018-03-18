//A simple quiz containing general questions and counting the result.

let score = 0;
   
let questionQuiz = [['In which year began the first world war?',1939],['How many degrees has a right angle?',90],['How many planets are in the solar system?',8]];

function askQuestion (questionQuiz){
   
    let answer = prompt(questionQuiz[0],'');
    
    if (answer==questionQuiz[1]){
        alert('Well done!');
        score++;
    } else {
        alert('The wrong answer. ' + 'The correct answer is: ' + questionQuiz[1] + ' .');
    }
}

for (let i=0; i<questionQuiz.length; i++) {
    askQuestion(questionQuiz[i]);
} 

let message = 'Your score: ' + score;
document.write(message);
