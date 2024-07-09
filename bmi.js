let btn = document.getElementById('calculate')
 btn.addEventListener('click',function(e){
    console.log("Hello")
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let bmi = document.getElementById('bmi')
    if(weight === '' || height === ''){
        let div = document.createElement('div')
        div.className = "alert alert-danger text-center mt-2"
        let errorMessage = document.createTextNode("please fill empty space")
        div.appendChild(errorMessage)
        let card = document.querySelector('.card')
        let formgroup = document.querySelector('.form-group')
        card.insertBefore(div, formgroup)
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },2000)
    }
    else{
        bmi = (weight/height)
        bmi = bmi.toFixed(2)
        document.getElementById('bmi').value = bmi
        document.querySelector('.bmi').style.display = 'block'
        // let under = "you are underweight"
        // let healthy = "you are healthy"
        // let over = "you are overweight"
        // let obese = "you are obese"
        if(bmi <= 18.4){
            let under = document.createElement('under')
            under.className = "alert alert-danger text-center mt-2"
            let errorMessage = document.createTextNode("you are underweight")
            under.appendChild(errorMessage)
            let card = document.querySelector('.card')
            let result = document.querySelector('.result')
            card.insertBefore(under, result)
            setTimeout(function(){
                document.querySelector('.alert').remove()
            },2000)
        }
        else if(bmi === 18.5 || bmi <= 24.9){
            let healthy = document.createElement('under')
            healthy.className = "alert alert-success text-center mt-2"
            let goodMessage = document.createTextNode("you are healthy")
            healthy.appendChild(goodMessage)
            let card = document.querySelector('.card')
            let result = document.querySelector('.result')
            card.insertBefore(healthy, result)
            setTimeout(function(){
                document.querySelector('.alert').remove()
            },2000)
        }
        else if(bmi === 25 || bmi <= 39.9){
            let over = document.createElement('over')
            over.className = "alert alert-danger text-center mt-2"
            let goodMessage = document.createTextNode("you too deh chop, you are overweight")
            over.appendChild(goodMessage)
            let card = document.querySelector('.card')
            let result = document.querySelector('.result')
            card.insertBefore(over, result)
            setTimeout(function(){
                document.querySelector('.alert').remove()
            },2000)
        }
        else{
            let will = document.createElement('over')
            will.className = "alert alert-danger text-center mt-2"
            let goodMessage = document.createTextNode("you go soon die, go write your will")
            will.appendChild(goodMessage)
            let card = document.querySelector('.card')
            let result = document.querySelector('.result')
            card.insertBefore(will, result)
            setTimeout(function(){
                document.querySelector('.alert').remove()
            },2000)
        }
    }
    e.preventDefault()
 })