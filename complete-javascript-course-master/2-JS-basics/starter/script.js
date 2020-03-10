/*var firstName = 'Paul';
console.log(firstName);
var lastName = 'Gallegos';
var age = 21;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);coercion

*/



/************************************
*Variable mutation and type coercion
*/

/*
var firstName = 'paul';
var age = 21;
//type coercion convert automatically to string, this do it for javascript.
console.log(firstName + ' ' + age);

 var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + isMarried);

//varibale mutation

age = 'twenty eight';
job = 'driver';

alert(age + ' ' + job);


var lastName = prompt('whats is his last name?');
console.log(firstName + ' ' + lastName);
*/


/***********************************
*Basic operators
*/
/*
var year,yearPaul,yearFriend,agePaul,ageFriend;
agePaul = 21;
ageFriend = 25;
year = 2020;
yearPaul = year-agePaul;
yearFriend = year-ageFriend;

console.log(yearPaul + ' ' + yearFriend)

//logical operators

var friendOlder = ageFriend > agePaul;
console.log(friendOlder);

//type operator
console.log(typeof friendOlder);
*/


/********************************************
*Operator precedens
*/
/*
var now = 2020;
var yearPaul = 1998;
var fullAge = 22;

//multiple Operators
var isfullAge = now - yearPaul >= fullAge;
console.log(isfullAge);

//Grouping
var agePaul = now-yearPaul;
var ageFriend = 30;
var average = (ageFriend + agePaul) / 2;
console.log(average);

//Multiple assignnents

var x,y;
x = y = (3+5) * 4 -6; //26
console.log(x, y);

//More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);

x++;
console.log(x);


*/


/*************************************
*CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index) which is calculated
using the formula: BMI = mass / height *2 = mass.

1.- Store Mark's and John's mass and height in variables
2.- Calculate Both their BMI's
3.- Create a boolean variable containing information about whether Mark has Higher BMI than Jhon.
4.- Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than Jhon's? true).

*/



/*
var massJhon,massMark,heightJhon,heightMark;
var bmiJhon,bmiMark;


massJhon = prompt("Mass of Jhon");
massMark = prompt("Mass of Mark");
heightJhon = prompt("Height of Jhon");
heightMark = prompt("Height of Mark");


bmiJhon = massJhon / (heightJhon*2);
bmiMark = massMark / (heightMark*2);

var isMark = bmiMark > bmiJhon;

console.log("Is Mark's BMI higher than Jhon's? " + isMark);
*/

/******************************************
*If / else statements
*/
/*
var firstName = 'Paul';
var civilStatus = 'married';

if(civilStatus === 'married'){
    console.log(firstName + ' Is Married');
}else{
    console.log(firstName + ' Is Single');
}


var massJhon,massMark,heightJhon,heightMark;
var bmiJhon,bmiMark;


massJhon = prompt("Mass of Jhon");
massMark = prompt("Mass of Mark");
heightJhon = prompt("Height of Jhon");
heightMark = prompt("Height of Mark");


bmiJhon = massJhon / (heightJhon*2);
bmiMark = massMark / (heightMark*2);

if(bmiMark>bmiJhon){
    console.log("MARK/ BMI is higher than Jhon");
}else{
    console.log("JHON/ BMI is higher than Mark");
}

*/

/*************************************************
*Boolean logic
*/

/*
var fisrtName = 'Jhon';
var age = 16;

if(age < 13){
    console.log(fisrtName + ' It´s a Boy');
}else if(age >= 13 && age < 21){
         console.log(fisrtName + ' It´s a Teenager');
}else{
    console.log(fisrtName + ' It´s a Man');
}
*/

/***********************
* The  Ternary Operator and Switch Statement
*/
/*
var firstName = 'Jhon';
var age = 17;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

//Switch Operator

var job = 'designer';
switch (job){
        
    case 'teacher':
        console.log(firstName + 'Teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + 'Drives an uber in USA');
        break;
    case 'designer':
        console.log(firstName + 'desing beautiful websites');
        break;
}

var age = 16;
switch(true){
case age < 13 :
    console.log(firstName + ' It´s a Boy');
break;
case age >= 13 && age < 21:
    console.log(firstName + ' It´s a Teenager');
break;
case age >= 21 :
    console.log(firstName + ' It´s a Man');
break;

}

*/

/*

Jhon and mike both play basketball, in different team. IN the lastest 3 games, john's team scored 89,
120 and 103 points, while mike's team scored 116, 94,and 123 points.

1. Calculate the average score for each team
2. decide which teams in avegare (highest  average score), and print the winner to the console.
3. then change the score to show different winners. Don´t forget to take into account there might be a draw
(the same avegare score)

4. EXTRA: Mary alaso plays basketball, and her team scored 97, 134 and 185 points. Like before log the
average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve
this one, just match the solution, it´s no prblems.

5. like before, change the scores to generate differets winners, keeping in mind the might be draws.

*/
/*
averageJhonTeam = (80 + 80 + 83)/3;
averageMikeTeam = (80 + 80 + 81)/3;
averageMaryTeam = (80 + 80 + 82)/3;

if ((averageJhonTeam == averageMikeTeam) && (averageJhonTeam==averageMaryTeam) && (averageMaryTeam==averageMikeTeam)){
    console.log("Its a Draw, average Mike's Team : " + averageMikeTeam + ", average Jhon's Team : "+averageJhonTeam+ ", average Mary's Team : "+averageMaryTeam);
}else if((averageJhonTeam > averageMikeTeam) && (averageJhonTeam>averageMikeTeam)){
    console.log("The hightest average is Jhon's Team with : "+ averageJhonTeam);
}else if(averageMikeTeam > averageMaryTeam){
    console.log("The hightest average is Mike's Team with : "+averageMikeTeam);
}else{
    console.log("The hightest average is Mary's Team with : "+averageMaryTeam);
}
*/



/*********************************************** 
 * Functions
 * 
*/
/*
function calculateAge(birthYear){
    return 2020 - birthYear;
}

console.log(calculateAge(1998));
console.log(calculateAge(1997));
console.log(calculateAge(1996));
console.log(calculateAge(1995));

function yearsUntilRetairement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;
     console.log(firstName + " retires in " + retirement+ " years");
}


yearsUntilRetairement(1998, "Paul");

*/

/******************************
 * Arrays
 * 
 */




 /***************************************
  *     CODING CHALLENGE 2
  */

 /*
    Jhon and his family wont on a holiday adn went to 3
    different restaurants. The bills were $124, $48 and 
    $268

    To tip the walter a fair amount, Jhon created a
    simple trip calculator (as a function). He likes to
    trip 20% of the bill is between $50 and $200, and 10%
    if the bill is more than $200.

    In the end, Jhon would like to have 2 arrays:
    1) containing all three tips (one for each bill)
    2) containing all three final paid amounts (bill,
        tip).

 */

/*
 var JhonsFamily= [124,48,268];
 var JhonsFamilyTip = [JhonsFamily[0]*1.20,JhonsFamily[1]*1.20,JhonsFamily[2]*1.10];

 console.log(JhonsFamily)
 console.log(JhonsFamilyTip)

 */

/*******************
 * Objects and propierties
 */
/*
 var jhon = {
     firstName:'jhon',
     lastName: 'Smith',
     birthYear: 1998,
     family: ['jhon','Mark','Bob','Emily'],
     job:'teacher',
     isMarried: false

 };

 console.log(jhon.birthYear + jhon['firstName']);

 var x = jhon.birthYear

 console.log(x)

jhon.job = 'designer'
jhon.isMarried = false

console.log(jhon)

var jane = new Object();
jane.firstName = 'jane';
jane.birthYear = 1998;
console.log(jane);
*/

/****
 * Objects and Methods
 */
/*
var jhon = {
    firstName:'jhon',
    lastName: 'Smith',
    birthYear: 1998,
    family: ['jhon','Mark','Bob','Emily'],
    job:'teacher',
    isMarried: false,
    calcAge: function(){ //we do fuction in objects
        this.age = 2020-this.birthYear; //create age with de function calcage
    }
};
jhon.calcAge() //need call the fuction to add age.
console.log(jhon);

*/


/****
 * CODING CHALLENGE 4
 */

 /*
Let´s remember the first coding challenge where Mark
and jhon compared their BMIs, Let´s now implement
the same functionaly with objects and methods.

1. For each of them, create an object with 
propierties for their full name, mass and height.
2. Then, add a method to each object to calculate the BMI.
Save de BMI to the object and also return it from method.
3. In the end, log to the consolewho has the
highest BMI, Togetherwith the full name and the respective
BMI, Don´t forget they might have the same BMI.

Remember: BMI = mass / Height*2

 */

var paul = {
    fullname: 'Paul Alejandro Gallegos Reyes',
    mass: 100,
    height: 1.50,
    calBMI: function(){
        return this.mass/(this.height*2);
    }
};

var alicia = {
    fullname: 'Alicia Aime Delgado Ibarra',
    mass: 100,
    height: 1.50,
    calBMI: function(){
        return this.mass/(this.height*2);
    }
};



paul.BMI = paul.calBMI();
alicia.BMI = alicia.calBMI();

function highestBMI(){
    if(paul.BMI > alicia.BMI){
        console.log("The Highest BMI is "+paul.fullname + " With BMI = "+ paul.BMI);

    }else if(alicia.BMI > paul.BMI){
        console.log("The Highest BMI is "+alicia.fullname + " With BMI = "+ alicia.BMI)
    }else{
        console.log("The Highest BMI is a draw between "+paul.fullname + " and "+alicia.fullname+ " With BMI = "+ paul.BMI+ " and "+alicia.BMI); 
    }
}

highestBMI();