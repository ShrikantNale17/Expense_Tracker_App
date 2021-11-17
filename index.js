let myExpense = []
const nameEl = document.getElementById("name")
const dateEl = document.getElementById("date")
const amountEl = document.getElementById("amount")
const addBtn = document.getElementById("add-btn")
const tbodyEl = document.getElementById("tbodyEl")
const expenseFromLocalStorage = JSON.parse(localStorage.getItem("expenses"))

if(expenseFromLocalStorage) {
    myExpense = expenseFromLocalStorage
    render(myExpense)
}

addBtn.addEventListener("click", function() {

    if(!validValues())
        return
    const obj = {
        name: nameEl.value,
        date: dateEl.value,
        amount: amountEl.value
    }
    myExpense.push(obj)
    nameEl.value = dateEl.value = amountEl.value = ""
    localStorage.setItem("expenses", JSON.stringify(myExpense))
    render(myExpense)
})

function render(expItems) {
    let exp = ""
    for (let i = 0; i < expItems.length; i++) {
        exp += `
            <tr>
                <td>${i+1}</td>
                <td>${expItems[i].name}</td>
                <td>${expItems[i].date}</td>
                <td>${expItems[i].amount}</td>
                <td><button onclick="deleteItem(${i})">X</button></td>
            </tr>
        `
    }
    tbodyEl.innerHTML = exp
}

function validValues() {
    if (nameEl.value == "") {
        alert("Please enter data in Name field!")
        return false
    } else if (dateEl.value == "") {
        alert("Please enter data in Date field!")
        return false
    } else if (amountEl.value == "") {
        alert("Please enter data in Amount field!")
        return false
    }
    return true
}

function deleteItem(itemNum) {
    myExpense.splice(itemNum, 1)
    localStorage.setItem("expenses", JSON.stringify(myExpense))
    render(myExpense)
}