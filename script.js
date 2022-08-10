const switcher = document.querySelector("#switch");
const body = document.querySelector("#body"); 
const header_text = document.querySelector("#header"); 
const bottom_text = document.querySelector("#big"); 
const box = document.querySelectorAll(".box"); 
const box_text = document.querySelectorAll(".top-txt"); 
const grid = document.querySelectorAll(".grid"); 
const grid_text = document.querySelectorAll(".btm-txt"); 
const texts = document.querySelectorAll(".text"); 


switcher.addEventListener("input",onInput);
    
function onInput(){
    if (switcher.checked) {
        body.style.backgroundColor = "hsl(230, 17%, 14%)";
        box.forEach(bx => {
            bx.style.backgroundColor = "hsl(228, 28%, 20%)";
        });
        grid.forEach(gd => {
            gd.style.backgroundColor = "hsl(228, 28%, 20%)";
        });
        header_text.style.color = "hsl(0, 0%, 100%)";
        bottom_text.style.color = "hsl(0, 0%, 100%)";
        box_text.forEach(text => {
            text.style.color = "hsl(0, 0%, 100%)";
        });
        grid_text.forEach(text => {
            text.style.color = "hsl(0, 0%, 100%)";
        });
        texts.forEach(txt => {
            txt.style.color = "hsl(228, 34%, 66%)";
        });
    } else {
        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        box.forEach(bx => {
            bx.style.backgroundColor = "hsl(227, 47%, 96%)";
        });
        grid.forEach(gd => {
            gd.style.backgroundColor = "hsl(227, 47%, 96%)";
        });
        header_text.style.color = "hsl(230, 17%, 14%)";
        bottom_text.style.color = "hsl(228, 12%, 44%)";
        box_text.forEach(text => {
            text.style.color = "hsl(230, 17%, 14%)";
        });
        grid_text.forEach(text => {
            text.style.color = "hsl(230, 17%, 14%)";
        });
        texts.forEach(txt => {
            txt.style.color = "hsl(228, 12%, 44%)";
        });
    }
}    
  

