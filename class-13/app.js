// var idGet = document.getElementById('one')
// console.log(idGet);


// var paraGet = document.getElementsByClassName('para')
// console.log(paraGet);    //[]


// var paraGet = document.getElementsByTagName('input')
// console.log(paraGet);  


// var paraGet = document.querySelector('input')
// console.log(paraGet);  


// var paraGet = document.querySelectorAll('.para')
// console.log(paraGet);   []


// var email = document.querySelector('#email')
// var box = document.querySelector('#text')

// function val(){
//   if(email.value.length == 0){
//     email.style.backgroundColor = 'red'
//     email.focus()
//     box.style.display="block"
//     box.innerHTML = "please add email "
    
//   }else if(email.value.indexOf('@') === -1){
//      email.style.backgroundColor = 'red'
//     email.focus()
//     box.style.display="block"
//     box.innerHTML = "please enter valid email "

//   }else{
//         box.style.display="block"
//     box.innerHTML = "submitted "
//          email.style.backgroundColor = 'white'
//   }
//   email.value = ''
  
// }



// var pass = document.querySelector('#pass')
// var box = document.querySelector('#checkBox')
// var email = document.querySelector('#email')
// var username = document.querySelector('#username')

// function val(){
// if(box.checked){
//   pass.type = 'text'

// }else{
//   pass.type = 'password'   
// }

    
// }

// function logIn(){

   
//   window.location.href = 'welcome.html'
  
// }
 


// function modes(){
//     var clasDiv = document.getElementById('main')
  
//
//     clasDiv.className += ' dark'
//    

  
  
 
// }


// function modes(){
//     var clasDiv = document.getElementById('main')
//    var  ixcon = document.getElementById('ixcon')
  
//   console.log(clasDiv.classList);//[2 classes]
// console.log(clasDiv.className.includes('light'))
// if(clasDiv.className.includes('light')){
//     clasDiv.className += ' dark'
//     clasDiv.classList.remove('light')
//     ixcon.className = 'fa-regular fa-moon'
//       ixcon.classList.remove('fa-solid')
// }else{
//     clasDiv.classList.remove('dark')
//       clasDiv.className += ' light'
//         ixcon.className = 'fa-solid fa-moon'
//       ixcon.classList.remove('fa-regular')
// }
  
 
 
// }
//   var ul = document.getElementById('main')
//     var task = document.getElementById('task')
//  function val (){
//   ul.innerHTML +='<li>' + task.value +'</li>'
//   task.value = ''
//  }

var email= document.querySelector('.email')
var message= document.querySelector('#message')
function val(){
if (email.value.length==0){
    message.innerHTML='please enter valid email'
    email.style.backgroundColor='red'
    email.focus()
}else if(!email.value.includes('@')){
    message.innerHTML='invalid format'
    email.style.backgroundColor='orange'
    email.style.color="white"
}else if(!email.value.endsWith('.com')&&!email.value.endsWith('.org')){
    email.style.backgroundColor='pink'
     message.innerHTML='email must end with .com /.org'
}else{
    message.innerHTML="gooddd"
    email.style.backgroundColor="green"
    email.style.color="white"
}setTimeout(function(){
    email.value=''
    message.innerHTML=''
    email.style.backgroundColor=''
},3000)
}
var pass=document.getElementById('pass')
var icon=document.getElementById('icon')
function togglepass(){
    if(pass.type==='password'){
        pass.type='text'
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }    
else{
    pass.type='password'
    icon.classList.remove('fa-eye')
    icon.classList.add('fa-eye-slash')
}
}
var strengthMessage=document.querySelector('#strengthMess')
pass.addEventListener('input',function(){
    var val=pass.value
    var strength=0

    if(val.length>=8)strength++ 
    if(/[A-Z]/.test(val)) strength++
    if(/[0-9]/.test(val)) strength++
    if(/[\W]/.test(val))strength++

    if(strength===0){
        strengthMessage.textContent=''
    }else if(strength<=1){
        strengthMessage.textContent='Weak'
        strengthMessage.style.color='red'
    }else if(strength<=3){
        strengthMessage.textContent='Medium'
        strengthMessage.style.color='orange'
    }else{
        strengthMessage.textContent='Strong'
        strengthMessage.style.color='green'
    }

})