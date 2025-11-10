// JavaScript Classwork 8.1

// Question Number 1
let yourname =prompt("input your name");
console.log(yourname);
document.write("Hello My Name is"+" "+ yourname );

// Question Number 2
var favcolor =prompt("My favorite color is");
console.log(favcolor);
document.body.style.backgroundColor = favcolor;

// Question Number 3
let score=10;
score=15;
document.getElementById("text").innerHTML=score;

// Question Number 4
let warning="Please fill all the fields!";
window.alert(warning);

// Question Number 5
let fav_fruit=prompt("User favourite fruit");
console.log(fav_fruit);

// Question Number 6
let message="Welcome to the JavaScript class!";
document.write("<br><br> Message");

// Question Number 7
let name=prompt("Enter user name");
let fav_color=prompt("Enter user favourite color");
document.getElementById("text").innerHTML="Hi" + " "+ name + ", your favorite color is"+" "+ fav_color +"!";
window.alert("Have a great day!");
console.log(name);
console.log(fav_color);

// Question Number 8
let first_name=prompt("Enter your first name");
let last_name=prompt("Enter your last name");
document.write("<br><br> Hello,"+" "+ first_name + " " + last_name + "! Welcome to JavaScript class.");


// Question Number 9
let birth_year=prompt("Enter Birth Year");
let current_year=2025;
let age=current_year-birth_year;
document.write("<br><br> You are"+" "+age+" "+ "years old!");


// Question Number 10
let length=prompt("Enter length");
let width=prompt("Enter width");
let area=length*width;
document.write("<br><br> Ravi's land area is"+" "+ area +" "+ "square units.");

// Question Number 11
let price=prompt("Enter item price");
let quantity=prompt("Enter quantity");
let total=price*quantity;
document.write("<br><br> Total price is"+" "+ total +" "+ "rupees.");

// Question Number 12
let ticket_price=prompt("Enter ticket price");
let sold_tickets=prompt("Enter number of tickets sold");
let amount=ticket_price*sold_tickets;
document.write("<br><br> Total revenue is"+" "+ amount +" "+ "rupees.");

// Question Number 13
let total_apple=prompt("Enter Total Apples");
let per_basket=prompt("Enter number of apples per basket");
let number=total_apple/per_basket;
document.write("<br><br> Total baskets needed are" +" "+ number+".");