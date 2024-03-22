// 1: Install Node.js, TypeScript and VS Code on your computer.
// Completed
//2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName: string= "ERIC";
// console.log(`Hellow ${personName}, would you like to learn some python today?`);
//3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName: string ="Ali "
// // lower case
// console.log("lowercase:", personName.toLowerCase());
// // upper case
// console.log("uppercase:", personName.toLocaleUpperCase()); 
// // title case
// console.log("titlecase:", personName.replace(/\bw/g,c =>c.toUpperCase()));
//4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let qoute: string= "A person who never made a mistake never tried anything new.";
// let auther: string= "Albert Einstein"
// console.log(`${auther} once said,"${qoute}"`);
//5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let quote: string= "A person who never made a mistake never tried anything new.";
// let famous_person: string = "Albert Einstein ";
// let message: string= `${famous_person} once said,${quote}`;
// console.log(message);
//6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let personName: string =`\n\t Babar Azam\t\n`;
// console.log(personName);
// let stipped: string = personName.trim();
// console.log(stipped);
//7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//8: You should create four lines that look like this: console.log(5 + 3),Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5 + 3);
// console.log(11 -3);
// console.log(4 *2);
// console.log(16 / 2);
//9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message. 
// let favouriteNumber: number = 4;
// console.log(`My favourite number is ${favouriteNumber}`);
//10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. 
//exercise 10
//my name is Rukhsana
//Date:18/2/2024
//this program run will simple code just like hello world
//   console.log(`hello world simple program`);
//11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let members: string[] =[`ali`,`moiz`,`maaz`,`saba`,`aliza`];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }
//12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let members: string[] =[`Ali`,`Moiz`,`Maaz`,`Saba`,`Aliza`];
// let message: string=`do you want a new car? `;
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }
//13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation : string []=[`Bus`,`Car`,`Bike`,`Suzuki`];
// for (let i=0; i<transportation.length; i++){
//     console.log(`I would like to own a ` + transportation[i]);
// }
//14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guest_list : string [] = [`Ali`,` Rayyan`,` Shiza`,` Nazia`];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected sir/madam ` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\nthank you\n`)
// }
// export{guest_list}
//15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// let guest_list : string [] = [` Ali`,` Rayyan`,` Shiza`,` Nazia`];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected sir/madam` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\n\nthank you`)
// }
// let not_present : string = `Nazia`;
// let new_guest : string = ` Arham`;
// guest_list [3] = new_guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected sir/madam` + guest_list [i] + `,\n we invaited you on dinner tomorrow.\n\nthank you`)
// }
// console.log(`Miss.${not_present} will not coming for dinner tomorrow.`);
//16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guest_list = [" ali", " rayyan", " shiza", " nazia"];
var not_present = "nazia";
var new_guest = " tarham";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam " + guest_list[i] + ",\nwe invaited you on dinner tomorrow.\nthank you\n");
}
guest_list.unshift(" shaheen", " sarfaraz", " rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam " + guest_list[i] + ",\nwe invaited you on dinner tomorrow. we found big table so we decide to invait 3 more guest\n");
}
