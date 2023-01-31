const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const count = document.querySelector('.count')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')
const error = document.querySelector('.error')


const checkBill = () => {
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent='Uzupełnij wszystkie dane!'
        costInfo.style.display='none'
    }
    else{
        error.textContent=''
        countBill()
    }
}

const countBill = () => {
   const newPrice = parseFloat(price.value)
   const newPeople = parseFloat(people.value)
   const newTip = parseFloat(tip.value)

   const sum = (newPrice +(newPrice*newTip))/newPeople
   costInfo.style.display='block'
   cost.textContent = sum.toFixed(2)
}


count.addEventListener('click', checkBill)