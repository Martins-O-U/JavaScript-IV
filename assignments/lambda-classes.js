// CODE here for your Lambda Classes

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Persons {
    constructor(name, age, location,){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}
const fred = new Persons("Fred", 30, "Bredrock")
console.log(fred.speak());


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Students extends Persons {
    constructor(name, age, location, favSubjects, previousBackground, className){
        super(name, age, location);
        this.favSubjects = favSubjects;
        this.previousBackground = previousBackground;
        this.className = className;
    }
    listsSubjects (){
        const name = this.name;
        this.favSubjects.forEach(subject => {
            console.log(${subject})
        });
        return this.favSubjects;
    }
    PRAssignment(student,subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}
const student = new Students ('Brown',28,'Kano', ['Html', 'CSS', 'JavaScript'])
// const student = new Students ({
//     name: 'Brown',
//     age: 28,
//     location: 'Kanu',
//     previousBackground: 'Mech Engineering',
//     className: 'WEBEU3',
//     favSubjects: ['Html', 'CSS', 'JavaScript'],

// });
console.log(student.PRAssignment("python"));
console.log(student.listsSubjects());
console.log(student.sprintChallenge("IOS"));

console.log(tunde.grade(student.name,"java"));


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Persons {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
const tunde = new Instructor('Tunde', 40, 'Calabar', 'Back-end', 'JavaScript', `Don't forget the homies`);

console.log(tunde.demo("avasdv"));
console.log(tunde.grade(student.name,"java"))



// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Persons {
    constructor(name, age, location){
        super(name, age, location);
        this.gradClassName = "CS1";
        this.favInstructor = "Sean";
    }
    standUp(){

    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
const swiz = new ProjectManagers ("Swiz", 35, "Kenya");
console.log(swiz.debugsCode(student.name, "JavaScript"));

