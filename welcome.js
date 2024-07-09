let btn = document.getElementById('btn')
btn.addEventListener("click", function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    if(username == "admin" && password == "admin"){
        window.location.href = "welcome2.html"
    }
    else{
        console.log("Invalid Credentials!")
    }
})