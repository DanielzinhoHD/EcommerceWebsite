const input = document.getElementById("input-box");
const btnInput = document.getElementById("input-button");

btnInput.onclick = function(){
    const inputValue = input.value;
    localStorage.setItem("user-email", inputValue);
};

