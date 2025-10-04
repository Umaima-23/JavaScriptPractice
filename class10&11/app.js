// var d=new Date()
// console.log(d);
// d.setMonth(15)
// console.log(d);
//index number ky hisaab sy june is the 5th month ,day bhi change hoga,date same 4jun
//15 dalo to js khud adjust karky 11(december)+4--5--index april karega

//actual variable main chanes kar sakta hai 

//======MOMENT.JS===============
// console.log(moment()._d);//current date 


// console.log(moment("20111031", "YYYYMMDD").fromNow());

// console.log(moment().format());


// *check diff between time to time*
/*var nowDate = new Date()
var birthday = new Date("May 23'2006")
console.log(birthday);
var time=nowDate.getTime()
var bt = birthday.getTime()
var diff=time-bt
console.log(diff);

console.log(Math.round(diff/(1000*60*60*24)));//days since i was born 

var nowDate = new Date()
var birthday = new Date("May 23'2006")
var years =nowDate.getFullYear()-birthday.getFullYear()
var months=nowDate.getMonth()-birthday.getMonth()
var days=nowDate.getDate()-birthday.getDate()
if(days<0){
months-=1
var prevMonth=new Date(nowDate.getFullYear(),nowDate.getMonth(),0).getDate();
days+=prevMonth
}
if(months<0){
    years-=1 //years=years-1
    months += 12
}
console.log(`${years}years,${months},months,${days},days`);

// countdown
  var birthdayMonth = 5; // May = 5th month
  var birthdayDate = 23; // 23rd May

  function updateCountdown() {
    var now = new Date();

    // set next birthday
    var year = now.getFullYear();
    var nextBirthday = new Date(year, birthdayMonth - 1, birthdayDate);

    // agar birthday already pass ho gaya is saal, next year
    if (nextBirthday < now) {
      nextBirthday.setFullYear(year + 1);
    }

    var distance = nextBirthday - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  updateCountdown(); // immediate call
  setInterval(updateCountdown, 1000); // update every second



  let count = 0;

let timer = setInterval(function() {
    count++;
    console.log("Counter:", count);
    if(count === 3){
        clearInterval(timer); // stop after 5
    }
}, 1000);*/




//class code 
var d = new Date();
d.setMonth(3)
console.log(d);

console.log(moment()._d);//current time

var formatdate=moment().format('l','hh')
console.log(formatdate);  //i.e 9/12/2025

function greeting(){  //function declaration
  console.log("hello");
  
}

//functiion invoke/call
greeting()//hello
greeting()  //hello  //jitni bar call utni bar result

function greeting(){  //function declaration
  var date=moment()._d
  console.log(date);
  
}

greeting()  //date complete 
greeting() 
greeting() 
greeting() 

//parameters
function calculate(num1,num2,email){
  var add=num1+num2
  console.log(add,email);
  
}
//argument
calculate(3,4,"umaima@gmail.com")

var email=document.getElementById('email')
var pass=document.getElementById('password')

function signIn(){
  if (email.value=='umaima@gmail.com'&&pass.value==12345) {
    alert('signin successfully')
  }else{
    alert("error in auth")
  }
}

var email = document.getElementById('email')
var password = document.getElementById('pass')
function signIn(){
var val =  email.value
if(val.includes('@')){
  console.log('valid');
  
}else{
   email.style.backgroundColor = 'red'
}
}


var str = 'hasdh'
function mssg(a,b){
//console.log(str);

    var text ='hello'
  return text
 
  
}

console.log(mssg())
console.log(mssg())
console.log(mssg())
console.log(mssg())