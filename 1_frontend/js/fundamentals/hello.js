function addition(a,b){
    alert(a + b )
}
addition(3,4);



//function


// function ask(question, ajay1, ajs) {
//     if (confirm(question)) ajay1()
//     else ajs();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);


// function sayHi() {   // (1) create
//     alert( "Hello" );
//   }
  
//   let func = sayHi;    // (2) copy
  
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi();



// function check(a){
//     if (a >= 18){
//         return true
//     }else{
//         return confirm("do you have your parent permission")
//     }
// }


// let age = prompt("enetr your age : ", 18);
//  if(check(age)){
//     alert("access granted")
//  }else{
//     alert("access denied")
//  }


// function sum(a,b){
//     return a+b;
// }
// let result = sum(+prompt("asjk"),+prompt("jsaksa"))
// alert(result)

// function sum(a, b) {
//     result = a + b;
//     alert( result );
//   }
//   sum(1, 2);



// function wor(a,b = "kumar"){
//     alert(a + b)
// }
// function mor(){
//     b=78;
    // b = promp("ajsksjk")
// }

// let a = prompt("ajy");
// let b = prompt("ajy");
// wor(a,b)





// find odd number or even
// function eo(a){
//     let n = 14;
//     result= a%2;4;
//     if (result == 0){
//         alert("even");
//     }else{
//         alert("odd");
//     }
// }
// let n = +prompt("type the number : ","")
// eo(n)


// function addition(a,b){
//     alert(a + b )
// }
// addition(3,4);



// switch

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');
// switch(a){
//     case '0':
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
//         break;
// }


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt("hello");
// if (browser == "edge"){
//     alert("aaaa");
// }else if(browser=="chrome"||browser=="firefox"||browser=="safari"||browser=="opera"){
//     alert("okay");
// }else{
//     alert("we hope");
// }


//loops

// for(let i=10;i < 13; i++){
//     alert(i);
// }


// let i = 3;

// do{
    // alert(i)
//     i++
// }while(i<=5){
//     alert(i)
// }
// alert("your done")

// while(i){
//     alert(i);
//     i--
// }

// let i =0;
// do{
//     alert(i)
//     i++
// }
// while(i < 5){
//     alert(i)
// }

// let i = prompt("asjkhvjka");
// while(i=10){
//     alert(i);
//     i--;
// }

// let age= prompt("type age", "")
// while(age < 18){
//     alert("make a card");
//     age++;
// }



// assignments


// let user = prompt("type your user id");
// if(user === "Admin"){
//     let password = prompt("enter the password")
//     if (password == "TheMaster"){
//         alert("WELCOME");
//     }else if (user === '' || user === null) {
//         alert( 'Canceled' );
//      }else{
//         alert("wrong password")
//     }
// }else if (user === '' || user === null) {
//     alert( 'Canceled' );
// }else{
//     alert("i dont know you");
// }



// let user = prompt("user id");
// if(user = "cancel"){
//     alert("canceled");
// }else if(user="other"){
//     alert("i dont know you");
// }else{
//     let password = prompt("enter the password");
//     if(password = "cancel"){
//         alert("canceled");
//     }else if(user="other"){
//         alert("wrong password");
//     }else{
//         alert("WELCOME")
//     }
// }



// let age = prompt("type your age");
// if (age > 14 && age < 90){alert("your not in the ist")};
//  else{alert("your in the list")};

// if (age > 14 && age < 90){
//     alert("your not in the ist")
// }else{
//     alert("your in the list")
// }
// if(!(age >= 14 && age <= 90))
// if(age < 14 || age > 90)

// let result1 = prompt("What's the “official” name of JavaScript?");
// (result1 == 9999) ? 
//     alert("you dont know") : alert("ecmaScript");

// let age = prompt("type your aage");
// (age<18)?maon="wait":(age=18)?"apply":(age>18)?"ready":"notPropper";
// alert(maon);

// let age = prompt("type your aage");
// let maon = (age<18)?"wait":(age=18)?"apply":(age>18)?"ready":"notPropper";
// alert(maon);



// let age = prompt("type your aage")
// let accessAllowed = (age >= 18) ? true : false ; 
// alert(accessAllowed)


// let accessAllowed;
// let age = prompt("whtas your age!");

// if (age>=18){
//     accessAllowed = true;
// }
// else{
//     accessAllowed = false;
// }
// alert(accessAllowed)

// alert("welcome")
// prompt("whats your age", 18)
// let gender = confirm("r u male")
// alert(gender)

// let a = ("ajay kumar s" , "123", "real");
// alert(a);


// alert("ajay kumar s" , "123", "real");



// let a = 10;
// let b = ++a;
// alert(a);
// alert(b);
// let c = a++;
// alert(a);
// alert(c);
// let d = --a;
// alert(a);
// alert(c);
// let e = a--;


// let a = 20, b= 10;
// alert(a + b);  
// 30
// alert(a - b);
// 10
// alert(a * b);
// 200
// alert(a / b);
// 2
// alert(a % b);
// 0
// alert(a ** b);
// 21600000000000



// alert("ajay kumar s");
// let name = prompt("what's your name: ");
// alert(`hello ${name}! `);
// let decision = confirm(`i love ${name} `);
// alert(decision)



// result = prompt(title, [default]);

// const nameyy;
// nameyy = 'ajay';
// nameyy = 'kumar';
// alert(nameyy)


// let admin,name;
// name = 'john'
// admin = name;
// alert(admin)

// let name = 'ajay'
// alert("hell0 ${name}");
// alert(`hell0 ${name} `)


// let user='ajay', usn = '1am18me003', college = 'AMC';
// alert(college + usn + ajay)


// let nameeae;
// nameeae = 'ajay';
// nameeae = 'kumar';
// alert(nameeae)

// let namee = 'ajay';
// let namee = 'kumar';
// alert(namee)