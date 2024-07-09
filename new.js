let btn = document.querySelector('.buttonSave');
btn.addEventListener("click", transactions)

function transactions(e){
    // alert("O ti click")
    let type = document.getElementById('type').value
    let name = document.getElementById('name').value
    let amount = document.getElementById('amount').value
        amount = parseFloat(amount).toFixed(2)
        // console.log(type,name,amount)
        if(type!== "chooseOne" && name == '' && amount == ''){
            alert("Please Fill the Empty Spaces")
        }
        e.preventDefault();
}
