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

//___________-make s and k capital //samiya khan 
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
document.write(result +"<br>");

// practice
var userInp = prompt("Enter something");
var lastSpace = -1;

for (var i = 0; i < userInp.length; i++) {
    if (userInp[i] === " ") {
        lastSpace = i;
    }
}

var before = userInp.slice(0, lastSpace + 1);  // "ali raza "
var lastWord = userInp.slice(lastSpace + 1);   // "khan"

var updatedLastWord = lastWord[0].toUpperCase() + lastWord.slice(1);

var result = before + updatedLastWord;
document.write(result);
