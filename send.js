var email = document.getElementById("email")
var userName = document.getElementById("name")
var pwd = document.getElementById("pwd")
var form = document.getElementById("form")
var database = firebase.database();
var resetBtn = document.getElementById("reset")
var limit = document.getElementById("word-limit")
var message = document.getElementById("message")
message.addEventListener("input",function(){
    var length = message.value.length
    limit.innerHTML = length +"/180"
if(length===180){
    message.disabled = true
      }
      resetBtn.addEventListener("click",function(){
        message.disabled = false;
        message.value.length = 0
        limit.innerHTML = length + "/180"
      })
})
form.addEventListener("submit",(refresh)=>{
    refresh.preventDefault();
    if(pwd.value.length<6){
        alert("password too weak")
    }
    else{
        sendData();
    }    
})
function sendData(){
try{
    database.ref(userName.value).set({
"email":email.value,
"password":pwd.value,
"message":message.value 
})
}
catch(e){
console.log(e.message)
}
message.value = ''
userName.value = '' 
email.value=''
pwd.value = ''   
message.disabled = false;
    message.value.length = 0
    limit.innerHTML = length + "/180"
    alert("Information sent")
    window.close();
}

