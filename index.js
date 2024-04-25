let btnEl = document.getElementById("btn");
let birthdayEl = document.getElementById("birthday");
let resultEl = document.getElementById("result");

function calcAge() {
    let birthdayValue = birthdayEl.value;
    if (birthdayValue === '') {
        alert(`You Fotget To Insert Your Birthday`)
    }else {
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `your age is ${age}  ${age >1?"yaers": "year"}`;
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if ( month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      age--;
    }
    return age;
   
}
btnEl.addEventListener("click", calcAge);
