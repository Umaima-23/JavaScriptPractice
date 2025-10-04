//light weight version of if else - easy syntax - to match 1 case with multiple cases
switch ('70deg') {
    case '30deg':
        console.log('grmi hai');
        break;
    case '70deg':
        console.log('din main tary');
        break;
        case '50deg':
        console.log('chup ho jao');
        break;
    default:
        console.log('kch nhi mila');
        
        break;
}

//chap-41 while loops diff-- var bahir bany ga loop sy 
//  *while (true) ho to infinite loop chal jayga
var i=0
while (i<=3) {
    console.log(i);
    i++
}

var count=1
while (true) {
    console.log(count);
    if(count==2){
    break;
}
count++
}
//library sweet alerts
function msg() {
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
}


//mouse events
var image=document.getElementById('img')
function changeImg(e){
    e.target.src="./images/bulb-on.jpg"   
}

function resetImg(e){
    e.target.src="./images/bulb-off.jpg"
    
}
function btn() {
 if(bulb.src.includes("bulb-off.jpg")){
    bulb.src="./images/bulb-on.jpg"
 }else{
    bulb.src="./images/bulb-off.jpg"
 }
}