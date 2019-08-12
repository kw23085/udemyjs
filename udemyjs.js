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

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        } 
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');