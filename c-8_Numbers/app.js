//revision string name uppercase using loop
var name = "pakistan zindabad"
var result;
var temp;


for(var i=0;i < name.length;i++){
    if(i===0){
        result = name[i].toUpperCase()
        //console.log(result)//P
    }else if(name[i]===" "){//temp is used for " " and the next after strings
        // result+= name[i+1].toUpperCase()//PakistanZzindabad  //Z print kia lkn space ki jgha 
        temp=name[i+1].toUpperCase()//Pakistanzindabad
        // console.log(result)
    }
    
    else{
        if(temp){
            result+=" "+temp//to add space
            temp=""//don't add space otherwise the result will be PakistanZ
            //console.log(result)
        }else{
            result+=name[i]
        }
        
        //  console.log(result)
    }
    // console.log(result)
// app.js:13 Pa
// app.js:13 Pak
// app.js:13 Paki
// app.js:13 Pakis
// app.js:13 Pakist
// app.js:13 Pakista
// app.js:13 Pakistan
// app.js:13 Pakistan 
// app.js:13 Pakistan z
// app.js:13 Pakistan zi
// app.js:13 Pakistan zin
// app.js:13 Pakistan zind
// app.js:13 Pakistan zinda
// app.js:13 Pakistan zindab
// app.js:13 Pakistan zindaba
// app.js:13 Pakistan zindabad
}
//   console.log(result)  //PakistanZindabad



//================Class 8=============================
// Topic-1-indexOf  to check the index number from start
var message = "Hey guys ! welcome to the world of AI world"
var result=message.indexOf("world")
console.log(result)//26


// Topic-2-lastIndexOf  to check the index number from end (world 2 times but shows the index no.of last one)
var message = "Hey guys ! welcome to the world of AI world"
var result=message.lastIndexOf("world")
console.log(result)//38


//if there is no word matching output is -1 in both indexOf / lastIndexOf
var message = "Hey guys ! welcome to the world of AI world"
var result=message.lastIndexOf("universe")
console.log(result)//-1


var message = "Hey guys ! welcome to the world of AI world"
var result=message.indexOf("universe")
console.log(result)//-1

//works on array aswell
var color =["pink","blue","orange"]
console.log(color.indexOf("orange"))//2


//Topic-3-Now to find the actual element on that index number  charAt
var message = "Hey guys ! welcome to the world of AI world"
var result=message.charAt(9)
console.log(result) //!


//Topic-4-replace 1 time  takes 2 parameters ,
var kchbhi ="one two tree four five tree seven nine ten"
var result=kchbhi.replace("tree","three")
console.log(result)

//Topic-5-replace all   takes 2 parameters ,
var kchbhi ="one two tree tree tree fiv fiv seven nine ten"
var result=kchbhi.replaceAll("tree","three","fiv","five")
console.log(result)//one two three three three fiv fiv seven nine ten


// =====================  NUMBERS ======================
// Math.round---round offs the number if<.5 returns actual num if >.5 returns bigger
var num=Math.round(2.99999)//3
console.log(num)//3

var num=Math.round(2.34)
console.log(num)//2


//we can control using ceil / floor --ceil always bigger as 5.1=6 but 5.0=5
var num=Math.ceil(5.1)
console.log(num)//6
//floor always lower 6.9=6
var num=Math.floor(6.9)
console.log(num)//6
var num=Math.floor(8.99)
console.log(num)//8