// var val1=3
// var val2 = "true"
// add=val1+val2
// console.log( add)  //3true


// var val1=3
// var val2 = true
// add=val1+val2
// console.log( add) //4

// for (var i = 2; i <= 8; i += 2) {
//     if (i % 4 == 0) {
//         console.log(i/2);
//     } else {
//         console.log(i);
//     }
// }

// console.log(7%5)

// var arr=[2,5,8,11,14];
// for (var i=0;i<=arr.length;i++){
//  if (arr[i] % 2 !== 0) {
//     console.log("Odd Found:", arr[i]);
//     break;
//   }
// }

// var out = [];
// for (var i = 3; i >= 1; i--) {
//   if (i % 2 == 0) {
//     out.unshift(i);
//   }
// }
// console.log(out);   //2
// console.log(3%4)
// arrray
var fruits=["apple","banana","mango"]
fruits[4]="grapes"
console.log(fruits)
var result=fruits.pop()
var result2=fruits.pop()
console.log(result)
console.log(result2)
console.log(fruits)
var arr=[]
arr[0]=result
arr[1]=result2
console.log(arr)
//push
fruits.push(5)
console.log(fruits)
fruits.push("strawberry","cherry")
console.log(fruits)
// shift unshift
fruits.shift()
console.log(fruits)
fruits.unshift("yellow",true)
console.log(fruits)
// splice
fruits.splice(2,0,"pink")
console.log(fruits)
// slice
var copy=fruits
copy="blue"
console.log(fruits)
console.log(copy)

var animal=['cat','dog','horse']
console.log(animal)
var copyAn=animal
copyAn[2]="monkey"
console.log(copyAn)
copyAn=animal.slice(0,-1)
console.log(copyAn)

// for nested looop
var names=['a','b','c','d',["3","4",[true,false]]]
console.log(names[4][2][1]) //false


var b = [2,4,6,8];
for(var i=0; i<b.length; i++){
  if(b[i] % 4 == 0){
    b.splice(i,1);
    break;
  }
}
console.log(b);


