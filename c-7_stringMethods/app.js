// var name = 'sana'
// var newName =name.slice(0,1 )
// console.log(newName .toUpperCase())//1st letter capital S
// var remaining=name.slice(1)
// console.log(remaining)//ana
// console.log(newName.toUpperCase() +remaining)//Sana

//________additional assigning operator
// var num =4
// num += 5
// console.log(num) //9

//___________-make s and k capital
// var name = 'samiya khan';
// var result;
// var temp;

// for(var i=0;i<name.length;i++){
//     if(i===0){
//         result=name[i].toUpperCase()
        // console.log(result)
//     }else if(name[i]===" "){
//         temp=name[i + 1].toUpperCase()
      
       
//     }
//     else{
//         if(temp){
//             result+=temp
//             temp=" "
//         }
//         else{
//             result+=name[i]
//         }
       
//     }
// }
// console.log(result)





var name = prompt()
var result;
var temp;


for (var i = 0; i < name.length; i++) {

    if (i === 0) {
        result = name[i].toUpperCase()

    }
    else if (name[i] === ' ') {
        temp = name[i + 1 ].toUpperCase()

    }
    else {
        if (temp) {
            result += " "+temp
            temp =''
      
        } else {
            result += name[i]
        }
    }
}
console.log(result);