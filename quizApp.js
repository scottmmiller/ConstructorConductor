//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
var User = function (name, email, password, totalScore) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore;
};

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
var Question = function (title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
};

//Create a users Array which is going to hold all of our users.

  //code here
var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
var addUser = function (name, email, password, totalScore) {
  users.push(new User(name, email, password, totalScore));
};

addUser('Skoot', 'smmiller.work@gmail.com', 'iLoveJS');
addUser('Ash', 'weemillercrew@gmail.com', 'iLoveMe');
addUser('Hudson', 'skashmiller.fam@gmail.com', 'iLoveMom');

//Create a questions Array which is going to hold all of our questions

  //code here
var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var addQuest = function (title, answersArray, rightAnswer, difficulty) {
  questions.push(new Question(title, answersArray, rightAnswer, difficulty));
};

//Now push all of your instances of Question into the questions Array

  //code here
addQuest('T/F: Inheritance is achieved in JavaScript through Prototypes?', 0, 'T', "Easy");
addQuest('T/F: JavaScript is just a scripting version of Java', 0, 'F', "Medium");
addQuest("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 0, 'F', "Hard");



console.log('My users Array and my questions array are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
console.log('My users Array and my questions array are ...', users, questions);
