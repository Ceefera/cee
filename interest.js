let btn = document.getElementById('submit')
btn.addEventListener('click', function(e){
    console.log("Hello")
    let principal = document.getElementById('principal').value
    let rate = document.getElementById('rate').value
    let years = document.getElementById('years').value
    let simpleinterest = document.getElementById('simpleinterest')
    if(principal === '' || rate === '' || years ===''){
        let div = document.createElement('div')
        div.className = "alert alert-danger text-center mt-2"
        let errorMessage = document.createTextNode("Please Fill an Empty Space")
        div.appendChild(errorMessage)
        let card = document.querySelector('.card')
        let formgroup = document.querySelector('.form-group')
        card.insertBefore(div, formgroup)
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },1000)
    }
    else{
        simpleinterest = (principal * rate * years)/100
        simpleinterest = simpleinterest.toFixed(2)
        document.getElementById('simpleinterest').value = simpleinterest
        document.querySelector('.result').style.display = 'block'

    }
    e.preventDefault()
})