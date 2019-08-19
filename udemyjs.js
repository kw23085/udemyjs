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

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var kevin = {
    name: 'kevin',
    age: 30,
    job: 'engineer',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + 'I\'m ' + this.name + 'I\'m ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + 'I\'m ' + this.age + ' years old');
        }
    }
};

var leo = {
    name: 'leo',
    age: 27,
    job: 'designer'
};

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function inFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);