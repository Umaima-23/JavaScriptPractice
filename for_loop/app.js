// Print Backward counting
// for (var i = 10; i >= 1 , i--;){
//     console.log(i)
// }
// bacckward table
// userInp = prompt ("enter a number")
// for (var i = 11; i >=1;  i-- ){
//     console.log(userInp + " x " + i + " = " + userInp*i)
// }
//  Flag for loop
// for (var i=0; i<4;i++){

//     if(i===2){

//         break;

//     }
//      console.log(i);
//      console.log("hi")
// }
// chatgpt for loop
// for (var i = 1; i<=10 ; i++){
//     console.log(i)
// }
// 2 
// var userInp = +prompt("enter a number")
// for (i=userInp; i<=userInp ; i++){
//     console.log(i)
// }
// 3
// for(var i = 0 ; i<=20 ; i+=2){
//     console.log(i)
// }
// 4
// var userInp = +prompt("enter a number")
//     for (var i=1 ;i<=userInp ; i++){
//         console.log(userInp + " x " + i + " = " + userInp * i)
//      }
// 5
// var userInp = +prompt("Enter a number")
// for (var i =1 ;i <=100;i++){
//     if(i % userInp ===0){
//         console.log("First multiple:"  +i);
//         break
//     }
// }
// 6
// var i = +prompt("enter a num")
// for(var i =1; i<=15; i++){
//     if(i%2 == 0){
//         console.log(i+" is even")
//      }else{
//         console.log(i+"is odd")
//     }
// }
// 7 
// for (var i=10; i>=1;i--){
//     console.log(i)
// }
// 8
// for (var i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue
//     }
//     if (i === 8) {
//      break
//     }
//     console.log(i)
// }
// 9
// var fruits =["apple","banana","mango","orange"]
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }
// 10
// var userInp= prompt("Enter a fruitname")
// var fruits =["apple","banana","mango","orange"]
// var match = false
// for( var i=0;i<fruits.length;i++){
//      if (userInp==fruits[i]){
//         match = true
//         console.log("fruit found")
//         break
//      }
// }
// if (match === false){
//     console.log("fruit not found")
// }

// var userInp = +prompt("enter a number")
// for(var i=1; i<=100;i++){
//     if(i%userInp==0){
//         console.log("first mutiple"+i)
//         break
//     }
// }

// break
// for (var i = 0; i < 4; i++) {
//     console.log(i);

//     if (i == 2) {
//         break;
        
        
//     }
//     console.log("hi");

// }


// for (var i = 0; i < 4; i++) { 
//    if(i > 2 ){
//       console.log(i);
//     break;
// }
// }

// for (var i = 0; i < 4; i++) {
//    if(" hi "){
//       console.log(i);
//     break;
// }
// console.log(i);
// }


// nested loop
// var userCity = prompt()
// var arr = ['khi', "lhr", "isl", "pesh", "que"]
// for (var i = 0; i < arr.length; i++) {
//     if (userCity === arr[i]) {
//         alert("your city is the cleanest city");
//     } else {
//         alert("safai krwao");
//     }
// }
// concept of flag: start from false if matches then true(after the whole block new if false) then change value after the opertion performed 
// var userCity =prompt()
// var arr = ['khi', "lhr", "isl", "pesh", "que"]
// var flag = false
// for (var i=0 ; i<arr.length ;i++){
//     if(userCity === arr[i]){
//         flag=true
//         alert("your city found")
//     }
   
// }
//  if(flag ==false){
//         alert("your city is not in the list")
//     }


// nested for looop
// var nums = [[1, 3, 2], [6, 3, 1,5]]


// for (var i = 0; i < nums.length; i++) {

//     for (var j = 0; j < nums[i].length; j++) {

//  console.log(nums[i][j]); 
             
//     }

// }
// for (var i = 0; i < 4; i++) {

//     for (var j = 0; j < 3; j++) {


//         console.log(i, j);

//     }


//         break;

// }

// var nums = [[1, 3, 2], [6, 3, 1,5]]


// for (var i = 0; i < nums.length; i++) {
                     
//     for (var j = 0; j < nums[i].length; j++) {

//  console.log(nums[i][j] * 2); 
             
// }

// }

// var nums = [[1, 2], [3, 4, 5]];

// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums[i].length; j++) {
//         if (nums[i][j] % 2 === 0) {
//             console.log(nums[i][j]);
//         }
//     }
// }

// nested for loop tabular data 
//1-
// print table 1-100
// for(var i = 1;i<=100 ;i=i+10 ){
//     for(var j=i; j<i+10;j++){
//      document.write(j+" ")
//     }
//     document.write("<br>")
// } 
// angle print 1 2 3 4 5
// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         document.write(i)
//     }
//     document.write("<br>")
// }
// two angle /half diamond
// for (var i=1;i<=10;i++){
//     for(var j=1;j<=i;j++){
//         document.write(j+" ")
//     }
//     document.write("<br>")
// }
// for(var c=1;c<=10;c++){
//     for (var b=10;b>=c;b--){
//       document.write(b +" ")
//     }  
//     document.write("<br>")
// }
