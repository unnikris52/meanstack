function validate(){
    let Name=document.getElementById("name")
    if(Name.value==""){
        alert("Name field can't be empty......")
        Name.focus()
        return false

    }
    let mobile=document.getElementById("mobile")
    if(mobile.value==""){
        alert("Mobile number field can't be empty......")
        mobile.focus()
        return false

    }
    if(isNaN(mobile.value) ){
        alert("ivalid mobile nummber")
        mobile.focus()
        return false
    }
    // alert(mobile.value.length)
    if(mobile.value.length!=10 ){
        alert("length should be 10")
        mobile.focus()
        return false
    }
    let email=document.getElementById("email")
    if(email.value==""){
        alert("email field can't be empty")
        email.focus()
        return false

    }
    let regex=/^[a-z]+@(gmail.com|yahoo.in)$/
    if(regex.test(email.value)==false){
        alert("invalid email address")
        
    }
  





}