
//task# 1: Install Node.js, TypeScript and VS Code on your computer.
console.log("Hello Zayn");

//task# 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string= "ERIC";
console.log(`Hellow ${personName}, would you like to learn some python today?`);

//task# 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string ="Ali "
// lower case
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase()); 
// title case
console.log("titlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));

//task# 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let qoute: string= "A person who never made a mistake never tried anything new.";
let auther: string= "Albert Einstein"
console.log(`${auther} once said,"${qoute}"`);

//task# 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote: string= "A person who never made a mistake never tried anything new.";
let famous_person: string = "Albert Einstein ";
let message: string= `${famous_person} once said,${quote}`;
console.log(message);

//task# 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName: string =`\n\t Babar Azam\t\n`;
console.log(personName);
let stipped: string = personName.trim();
console.log(stipped);

//task# 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//task# 8: You should create four lines that look like this: console.log(5 + 3),Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(11 -3);
console.log(4 *2);
console.log(16 / 2);

//task# 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message. 
let favouriteNumber: number = 4;
console.log(`My favourite number is ${favouriteNumber}`); 

//task# 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. 
 //exercise 10
//my name is Rukhsana
//Date:28/2/2024
//this program run will simple code just like hello world
  console.log(`hello world simple program`);

//task# 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let members: string[] =[`ali`,`moiz`,`maaz`,`saba`,`aliza`];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

//task# 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let members: string[] =[`Ali`,`Moiz`,`Maaz`,`Saba`,`Aliza`];
let message: string=`do you want a new car? `;
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
}


//task# 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation : string []=[`Bus`,`Car`,`Bike`,`Suzuki`];
for (let i=0; i<transportation.length; i++){
    console.log(`I would like to own a ` + transportation[i]);
}


//task# 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_list : string [] = [`Ali`,` Rayyan`,` Shiza`,` Nazia`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam ` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\nthank you\n`)
}
export{guest_list}


//task# 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_list : string [] = [` Ali`,` Rayyan`,` Shiza`,` Nazia`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\nthank you\n`)
}
let not_present : string = `Nazia`;
let new_guest : string = ` Arham`;
guest_list [3] = new_guest ;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\nthank you\n`)
}
console.log(`Miss.${not_present} will not coming for dinner tomorrow.`);


//task# 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list : string [] = [` ali`,` rayyan`,` shiza`,` nazia`];
let not_present : string = `nazia`;
let new_guest : string = ` tarham`;
guest_list [3] = new_guest ;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam ` + guest_list[i] + `,\nwe invaited you on dinner tomorrow.\nthank you\n`)
}
guest_list.unshift(` shaheen`,` sarfaraz`,` rizwan`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam ` + guest_list[i] + `,\nwe invaited you on dinner tomorrow. we found big table so we decide to invait 3 more guest\n`)
}


//task# 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list : string [] = [` ali`,` rayyan`,` shiza`,` nazia`];
let not_present : string = `nazia`;
let new_guest : string = ` arham`;
guest_list [3] = new_guest ;

guest_list.unshift(` shaheen`,` sarfaraz`,` rizwan`);
console.log(`\nunfortunately we can arrange big table , only two people allow.`)
while(guest_list.length>2){ 
    let remove_guest = guest_list.pop();
    console.log(` sorry sir/madam.${remove_guest} you are not invaited for dinner.\n`);
}

for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/madam ` + guest_list[i] + `,\nYes you are still invaited on tomorrow dinner.\nthank you\n`)
}
guest_list.splice(0,2)
console.log(guest_list)


//task# 18.Seeing the World: Think of at least five places in the world you’d like to visit.
//*Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.

let places : string [] = [` cape town`,` delhi`,` faislabad`,` bankok`,` ahmedabad`]
console.log(`orignal : ` + places);

//• Print your array in alphabetical order without modifying the actual list.
console.log(`copy ` + [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log(`orignal : ` + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy ` + [...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log(`copy ` + [...places].sort().reverse());
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(`orignal : ` + places.sort());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`orignal : ` + places.sort().reverse());


//task# 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
import{ guest_list } from "../14.Invitation/app"
console.log(`\n PRINTING NUMBER OF GUEST INVITED`)
console.log(`we had finally invited ${guest_list.length} from exercise 14`)

//task# 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages : string [] = [`english`,`urdu`,`arabic`,`french`,`hindi`]
console.log("list of languages:")
for(let top of languages){
    console.log(top)
}

//task# 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface item {
  name:string
  price:number
}
//creat two objects
const book: item ={
  name: `ESSENTIAL TYPESCRIPT`,
  price: 450
}
const apple: item ={
  name:`apple`,
  price: 200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)

//task# 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let array: (string | number)[] = [`babar`,`talha`,3,8,5,`sana`]
console.log(array[5])
console.log(array[3])
console.log(array[0])
console.log(array[4])

//task# 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car: string = `subaru`;

//Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == `subaru`); //True
 
//Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === `subaru`); //Ttue

//Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predict True.");
console.log(car != `subaru`); //False


//Test 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== `subaru`); //False

//Test 5: Less than comparison (false)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < `subaru`); //False (lexicographic comparison)

//Test 6: Greater than comparison (false)
console.log("Is car > 'subaru'? I predict False.");
console.log(car >  `subaru`); //False (lexicographic comparison)

//Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= `subaru`); //true

//Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= `subaru`); //True

//Test 9: checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car!); //True

//Test 10: checking Falsiness (False)
console.log("Is car? I predict True.");
console.log(!car); //False

//task# 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a 
let car: string = `subaru`;
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

//**string test**

//Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)

//Test 2: Strict equality (false)
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); //False (case-sensitive)

//Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True (case-insensitive)

//Test 4: inequality (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False (case-sensitive)


//**lowercase Function Test **
//Test 5: Lowercase conversion (True)
console.log("Is car.tolowerCase() =='subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)

//Test 6: Lowercase conversion (False)
console.log("Is car === car.tolowerCase()'? I predict False.");
console.log(car === car.toLowerCase()); //True (orignal value remains uppercase)


//Test Numarical**

// 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); //True

// 8: Inequality (False)
console.log("Is age !=30? I predict False.");
console.log(age != 30); //False


// 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); //False

//10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); //False

//**Logical Operators **

//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30);//True (both condition)


//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18);// False (both condition)

//**Array Test**

//13:In array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers);// True

//14:Not in array (False)
console.log("Is 5 in numbers? I predict True.");
console.log(5 in numbers);// False

//task# 25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Create a variable called alien_color
let alien_color: string = "green" ;

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}


//task# 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
if(alien_color == "green"){
    console.log("the player just earned 5 points shooting the alien.");
}

else{
    console.log("the player just earned 10 points.")
}
alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points shooting the alien.");
}

//task# 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color: string = "green" ;


// • If the alien is green, print a message that the player earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

// • If the alien is yellow, print a message that the player earned 10 points.
else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

// • If the alien is red, print a message that the player earned 15 points.
else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log(" Please select right color")
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 2
alien_color ="red" ;
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log(" Please select right color")
}
 // Version 3
 alien_color ="yellow" ;
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}

else{
    console.log(" Please select right color")
}


//task# 28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age : number = 1;

if (age < 2) {
    console.log (" you are a baby")
} else if (age>=4 && age<4){
    console.log("you are a toddler")
} else if (age >= 13 && age< 13){
    console.log("you are a kid")
} else if (age < 20){
    console.log("you are a teenager")
} else if (age < 65){
    console.log("you are a adult")
} else {
    console.log("you are older")
}

//task# 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits : string [] = ["kivi","orange","apples"]

if(favorite_fruits.includes("kivi")){
    console.log("I really like kivi")
}

if(favorite_fruits.includes("bananas")){
    console.log("you really like bananas")
}

if(favorite_fruits.includes("orange")){
    console.log("I really like orange")
}

if(favorite_fruits.includes("berry")){
    console.log("you really like berry")
}

if(favorite_fruits.includes("apples")){
    console.log("you really like apples")
}

//task# 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users : string [] = ["sana","ali","admin","tabish","aliza"]
  
for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
else{
    console.log(`Hello ${user},thank you for logging in again.`)
}
}

//task# 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users : string [] = ["eric","ali","admin","tabish","aliza"]

if (users.length === 0) {
    console.log ("We need to find some users!")
} else{ 
    for (let user of users) {
        if ( user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log(`Hello ${user},thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0){
    console.log("We need to find some users!")
}

//task# 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users : string [] = ["admin", "Ali","Eric","Hamza", "fatima"]
let new_users : string [] = ["admin","fatima","Haseeb","Aliza","Shiza"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLocaleLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    } else{ 
        console.log(`Yes ${new_user},is still in available list`)
    }
}

//task# 33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers : number [] =[1,2,3,4,5,6,7,8,9]

for (let number of numbers) {
if (number === 1){
    console.log(`${number}st`)
} else if (number === 2){
    console.log (`${number}nd`)
} else if (number === 3){
    console.log (`${number}rd`)
} else {
    console.log (`${number}th`)
}

}

//task# 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favourite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]
for (let pizza of favourite_pizza) {
    console.log(pizza)
}
console.log ("\n")
for (let pizza of favourite_pizza) {
    console.log(`I really love ${pizza} pizza!`)
}
console.log ("\nI really love pizza!")

//task# 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals : string [] = ["cat", "dog", "lion"]

for (let animal of animals) {
    console.log(animal)
}
console.log ("\n")

for (let animal of animals) {
    console.log (`A ${animal} has a tail`)
}
console.log("\nall of these are great pets! but i love cats more")

//task# 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size : string, text : string):void {
  console.log(`you order a ${size} shirt that says ${text}`)
}
makeShirt("large",`"I love typescript"`)
makeShirt(`medium`,`"I need a big shirt"`)

//task# 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size: string = "large", text: string = "I love typescript"): void {
  console.log(`you have order a ${size}, shirt that says ${text}`)
}

// makeShirt();
// makeShirt("medium")

//different message
makeShirt("small","I need a big shirt to wear")

//task# 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = "pakistan"): void {
  console.log(`${city} is in ${country}`)
}

describe_city(`karachi`) //default sentence
describe_city(`france`,`europe`)
describe_city(`lahore`,"panjab")

//task# 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city: string, country: string): string {
  return `${city},${country}`
}

let c1 = cityCountry(`lahore` , `pakistan`)
let c2 = cityCountry(`tokyo`,`japan`)
let c3 = cityCountry(`paris`,`france`)

console.log(c1)
console.log(c2)
console.log(c3)

//task# 40.Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
//  Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//   Make at least one new function call that includes the number of tracks on an album.
function makeAlbum (artist: string, title: string): { artist: string; title: string} {
  const dictionaries = {
    artist: artist.charAt(0).toUpperCase() +artist.slice(1),
    title: title.charAt(0).toUpperCase() +title.slice(1)
  }
  return dictionaries;
}

let album = makeAlbum("Ali","light")
console.log(album)

album = makeAlbum("hamza","seenbreez")
console.log(album)

album = makeAlbum("bilal","red wave")
console.log(album)

//task# 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]):void {
    for (const magician of magicians) {
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician: string[] = ["hassan","aliza","fiza"];
show_magicians(magician)

//task# 42.Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians: string[]):void {
  for (const magician of magicians) {
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}


function make_great(magicians: string[]):void {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the great"
  }
}

const magicians2: string[] = ["usman", "haseeb","wajahat"];
make_great(magicians2)
show_magicians(magicians2)


//task# 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + " the great");
  }
  return greatMagicians;
}

const magicians3: string[] = ["usman", "haseeb","wajahat"];
const greatMagicians2: string[] = make_great2(magicians3),
show_magicians(magicians3);
show_magicians(greatMagicians2);


//task# 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items: string[]): void{
    console.log("sandwich order")

    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`)
    }
}
console.log("enjoy your sandwich rukhsana kanwal")
sandwich("capsicum","tomato","chicken")
sandwich("beef","chees",)
sandwich("garlic chicken","mayo sauce")

//task# 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
type car = {
  manufacture: string 
  model:string
  [key: string]:any;
}
function createCar(manufacture: string, model:string,optional: Record<string,any>):car {
  return{
      manufacture,
      model,
      ...optional
  }
}

const mycar:car = createCar(" toyota","corolla", { color: "silver", year: "2024"})
console.log(mycar)

