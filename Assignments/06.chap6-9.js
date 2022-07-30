let user_name = prompt("Enter your Name: ");
document.write("Hello, Assalam o Alaikum Mr."+user_name)



let a = prompt("Enter any number","10");

document.write("<br><br>Result:</br>The Value of a is : " + a);
document.write("<br>.......................................................")

document.write("<br><br><br>The value of per-increment ++a is : "+ ++a);
document.write("<br>Now the value is : "+ a);

document.write("<br><br><br>The value of post-increment a++ is : "+ a++);
document.write("<br>Now the value is : "+ a);

document.write("<br><br><br>The value of per-decrement --a is : "+ --a);
document.write("<br>Now the value is : "+ a);

document.write("<br><br><br>The value of post-decrement a-- is : "+ a--);
document.write("<br>Now the value is : "+ a);


let  b = 2, c=1;
let result = --b - --c + ++c + c--;
document.write("<br><br>Result : " +result);