// connect with html
const inputValue = document.querySelector(".inputItem input");
const btn = document.querySelector(".container button");
const finalOutput = document.querySelector(".ans")

// click convert button
btn.addEventListener("click",()=>{
    finalOutput.innerHTML = "";

    // give name for userinput
    let value = inputValue.value;

    // check it is not a Number or lessthan 0 and convertion also
    if (value < 0) {
       alert("Please enter a feet value greater than 0");
    }else if (isNaN(value)) {
        alert("Please enter a valid number!");
    }else{
        let ans = value*30.48;
        finalOutput.innerHTML = ans;
    }
})