let display =  document.getElementById("display-screen");
let buttons = document.querySelectorAll("button");
let isOperator = (val) => {
    let operator = ["+","-","/","*"];
    return operator.includes(val);
}
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        const value = button.textContent;

        if(value == "AC"){
            display.value = "";
        }
        else if(value == "="){
            try{
                display.value = eval(display.value);
            } catch(err){
                display.value = "error";
            }}
            else{
                display.value += value;
            
        }
    })
})