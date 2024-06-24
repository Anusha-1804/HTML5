//console.log("wecome to ");
//console.log('apna college');

//fullName = "Ttonystark";
//console.log("fullName");

//fullName = "Ttonystark";
//console.log(fullName);

//a=null;
//console.log(a);

//b=undefined;
//console.log(b);


/****boolean tye****/
//isfollow=true;
//console.log(isfollow);

//isfollow=false;
//console.log(false);

/****store any value and any variable****/
//fullname=25;
//console.log(fullname);

/******VARIABLES *******/
//fullName="tomjerry";
//_fullName="anusha";
//$fullName="anuaadhya";
//console.log($fullName);

/**ERROR Bcz reserved keyword */
//console="apnacollege";
//console.log(console);

/***so we can write in capital ***/
//Console="apnacollege";
//console.log(Console);


/****let keyword---variable****/
//let fullName="apna colleg";
//console.log(fullName);

/*redeclaration is not posiible---ERROR*/
//let age=30;
//let age=20;
//let age=10;
//console.log(age);

/*update is possible*/
//let age=30;
//age=20;
//age=40;
//console.log(age);

/*****var keyword----variables */
//var fullName="apnacollege";
//console.log(fullName);

/*redeclaration is possible*/
//var age=20;
//var age=10;
//var age=30;
//console.log(age);

/*update is possible*/
//var age=20;
//age=10;
//age=30;
//console.log(age);

/****var keyword----variables *****/
//const age=20;
//age=30;
//age=40;
//console.log(age);
//it shows error bcz it is constant value

/*examlple*/
//const PI=3.14;
//console.log(PI);

/*****difference decalaaa values must******/
//let a;
//console.log(a)
//     or
//let a;
//a=10;
//console.log(a)

//const a;
//console.log(a)
//    or
//const a=20;
//console.log(a)


/*******primitive datatypes*****/
/*let num=20;
let floatnum=13.44;
console.log(num);
let greeting="apanacollege";
console.log(greeting)
let isfollow=true;
console.log(isfollow);
let x;
console.log(x);
let emptyvalue =null;
console.log(emptyvalue);
let h=Symbol("hello");
console.log(h);
let z=BigInt("1234567889900");
console.log(z);*/


/*****REference datatypes******/
//object creation
/*let person={
    name:"anusha",
    rollno:1410,
    course:"bsc"
};
person["name"]="Apnacollege";
console.log(person);
typeof(person)*/

////if we want to change name so....
//person["name"]="Apnacollege";
////if specific column value want ...
//console.log(person.name); or console.log(student["age"]);


/***example object creation ****/
/*let product={
    title:"ballpen",
    rating:3.4,
    price:270
};
console.log(product);*/

/****example object creation****/
/*const profile={
    name:"anusha",
    isFollow:false,
    followers:123,
    followig:123
};
console.log(profile);*/


/*****Operators ******/
////Arithematic
/*let x=10;
let y=20;
let sum=x+y;
console.log("x=",x ,"&y=",y);
console.log(sum);
console.log("x+y=",x+y);*/

////assignment
/*let x=5;
console.log(x)
let y=10;
y+=25;
console.log("y= ",y)*/

/////comparision
/*let a=4;
let b=5;
let isequal= a==b;
console.log(isequal);
console.log("4>5",a>b);
console.log("4!==5",a!==b);
console.log("4<=5",a<=b);
console.log("4===5",a===b);*/

/////logical
/*let a=6;
let b=10;
let cond1=a>b;
let cond2=a==6;
console.log("cond1&&cond2= ",cond1&&cond2);
console.log("cond1||cond2= ",cond1||cond2);
console.log("!(6>10)=",!(a>b));*/

/////ternary
/*let age=18;
let messege=age>=18?"you can vote" : "you cannot vote";
console.log(messege);
let count=8;
let phnoDigits=count>=10?"correct number" :"wrong number";
console.log(phnoDigits);*/

////bitwise 
/*let a=10;
let b=12;
console.log("a&b=",a&b);
console.log("a|b=",a|b);
console.log("a^b=",a^b);
console.log("a>>>b=",a>>>b);
console.log("a<<b=",a<<b);*/


/********Conditional statements*********/
/////  if statement.....
/*let mode="dark";
let  color;
if(mode=="dark")
{
    color="black";
}
console.log(color)*/

/*let mode="dark";
let color;
if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";
}
console.log(color);*/

////    if-else statemnts.....
/*let mode ="light";
let color;
if(mode==="dark")
{
    color="black";
}
else{
    color="white";
}
console.log(color);*/


////     else-if statements.....
/*let mode="pink";
let color;
if(mode==="dark")
{
    console.log("black");
}
else if(mode=="light")
{
    console.log("white");
}
else{
    console.log("red");
}*/

/*let age=18;
if(age>18)
{
    console.log("you can vote");
}
else if(age<18)
{
    console.log("you can not vote");
}
else {
    console.log("you can also aligible to vote");
}*/

/////   switch statements....
/*const exp="grapes";
switch(exp)
{
    case 'oranges':
        console.log('orages are 50.09 rupes');
    case 'mangoes':
    case 'banana':
         console.log('mangoes & bananas are 40 rupees');
    break;
    default:
        console.log("sorry, we are out of ${exp}");
}*/

/******Prompt********/
/*let name=prompt("heloo");
console.log(name);*/

/******Alert******/
//alert("hello");
//alert("error");

/*******examples*********/
/*let num=prompt("enter a number:");
if(num%5===0)
{
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}*/

/*****example******/
/*let score=75;
let grade;
if(score>=90&&score<=90)
{
    console.log("grade A")
}
else if(score>=70&&score<=89)
{
    console.log("grade B")
}
else if(score>=60&&score<=69)
{
    console.log("grade C")
}
else if(score>=50&&score<=59)
{
    console.log("grade D")
}
else if(score>=0&&score<=49)
{
    console.log("grade F")
}
console.log("according to your score,your grade was= ",grade);*/


/********loops.......*********/
///////    for loop......
/*for(let i=1;i<=5;i++)
{
    console.log("apna college");
}*/

/*for(let count=1;count<=5;count++)
{
    console.log("apnacollege");
}
console.log("loop has ended");*/

/*let sum=0;
for(let i=0;i<=5;i++)
{
    sum=sum+1;
    console.log("sum:",sum);
}
console.log("loop has ended");*/

/*for(i=1;i<=5;i++)
{
    console.log("i=",i);
}*/

///////    while loop.....
/*let i=1;
while(i<=5)
{
    console.log("i=",i);
    i++;
}
console.log("loop has ended");*/

///////// do-while loop.....
/*let i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=5);*/

///////    for of loop......
/*let str="Anu";
for(let i of str)
{
   console.log("i=",i);
}*/

/*let str="apna college";
let size=0;
for(let i of str)
{
    console.log("i=",i);
    size++;
}
console.log("stringsize=",size);*/

////////    for in loop..............
/*let student={
    name:"ajay",
    age:17,
    cgpa:9.5
};
for(let i in student)
{
    console.log("i=",i, "value=",student(i));
}*/

/*for(let num=0;num<=100;num++)
{
    if(num%2===0)
    {
        console.log("num=",num);
    }
    else{

    }
}*/

/*let gamenum=25;
let usernum=prompt("guess the game number:");
while(usernum != gamenum)
{
    usernum=prompt("you enterd wrong number.guess again:");
}
console.log("congratulations,you entered correct number");*/