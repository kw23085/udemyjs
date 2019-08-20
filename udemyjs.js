// function interviewQuestion(job) {
//     return function(name) {
//       if(job === designer) {
//         console.log(name + ', can you please explain what UX design is?');
//       } else if(job === teacher) {
//         console.log('What subject do you teach, ' + name + '?');
//       } else {
//         console.log('Hello ' + name + ', what do you do?');
//       }
//     }
// }

// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         } 
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


// var kevin = {
//     name: 'kevin',
//     age: 30,
//     job: 'engineer',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal') {
//             console.log('Good ' + timeOfDay + 'I\'m ' + this.name + 'I\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + 'I\'m ' + this.age + ' years old');
//         }
//     }
// };

// var leo = {
//     name: 'leo',
//     age: 27,
//     job: 'designer'
// };

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function inFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);




// code challenge

function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i])
    }
}

Question.prototype.checkAnswer = function (answer) {
    if(answer === this.correct) {
        console.log('Correct Answer!')
    } else {
        console.log('Wrong Answer. Try again!')
    }
}

var q1 = new Question ("Is Javascript the coolest programming language in the world?",
 ['yes', 'no'],
  0);


var q2 = new Question ("What is the name of this course\'s teacher?",
['John', 'Micheal', 'Jonas'],
2);

var q3 = new Question ("What does best describe coding?",
['Boring', 'Hard', 'Fun', 'Tediuos'],
2);


var questions = [q1, q2, q3];

function score() {
    var sc = 0;
    if(success) {
        sc++;
    }
    return sc;
}

function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer));

        nextQuestion();
    }
}

nextQuestion();





// function Questions (question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Questions.prototype.displayQuestions = function() {
//     console.log(this.question);
//     for(var i = 0; i < this.answers.length; i++) {
//         console.log(i + ": " + this.answers[i]);
//     }
// }

// Questions.prototype.checkAnswer = function(ans, callback) {
// var sc;

//     if(ans === this.correctAnswer) {
//         console.log('wow you good good')
//         sc =callback(true);
//     } else {
//         console.log('ggwp')
//         sc = callback(false);
//     }
//     this.displayScore(sc);
// }

// Questions.prototype.displayScore = function(score) {
//     console.log('Your current score is: ' + score);
//     console.log('--------------------------------')
// }

// var q1 = new Questions('1 is the right answer', [1, 2, 3], 1);
// var q2 = new Questions('2 is the right answer', [1, 2, 3], 2);
// var q3 = new Questions('3 is the right answer', [1, 2, 3], 3);

// var questions = [q1, q2, q3];

// function score() {
//     var sc = 0;
//     return function(correct) {
//         if(correct) {
//             sc++;
//         }
//         return sc;
//     }
// }

// var keepScore = score();


// function nextQuestion() {

//     var n = Math.floor(Math.random() * questions.length);
//     questions[n].displayQuestions();
//     var answer = prompt('Please enter the correct answer');


//     if(answer !== 'exit') {
//         questions[n].checkAnswer(parseInt(answer), keepScore);

//         nextQuestion();
//     }
// }

// nextQuestion();