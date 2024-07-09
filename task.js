let btn = document.getElementById('submit')
btn.addEventListener('click', function(){
    //alert("Wetin you want make we do for you?")
    let task = document.getElementById('task')
    if(task.value == ''){
        alert("Ogha write for field jhoor")
    }
    else{
        //alert("Good")
        let li = document.createElement('li')
        li.className = "item"
        let userText = document.createTextNode(task.value)
        li.appendChild(userText)
        let ul = document.getElementById('ul')
        ul.appendChild(li)
        console.log(li)
    }
})