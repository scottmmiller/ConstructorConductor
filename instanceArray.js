/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/
var users = [];

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
  // users.push(this);
}

var addUser = function (name, email, pw) {
  users.push(new User(name, email, pw));
};

//Create an Array called 'users' that will store all our instances of User.

  //code here


//Now create and push into your users array 3 seperate instances of User using 
//the data from above in that exact order

  //code here

addUser('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
addUser('Cahlan', 'cahlan@devmouna.in', 'iLoveHashtags');
addUser('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

console.log('Tyler\'s information is ', users[0]);
//Console.log all of Tylers information

  //code here
// var usersInfo = function (arr, name) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].name === name) {

//     }
//   }
  
// usersInfo(users, 'Tyler', function())

console.log('Lenny\'s information is ', users[2]);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add 
//that to your users array.

  //code here
addUser('Skoot', 'smmiller.work@gmail.com', 'iLoveAsh');



console.log('All my users names are ' );
//Now loop through your users Array and console.log every users name. 

  //code here
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
};