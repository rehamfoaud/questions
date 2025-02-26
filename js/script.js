function submitAnswer(){

    let answer = document.querySelector('input[name="answer"]:checked')

if(answer){
        if( answer.value === "true"){
             window.open("wrong.html", "_blank"); 
        }
        else{
            window.open("correct.html","_blank")
        }
    }
    else{
        alert("please select your answer")
    }
}

let darkMode = document.querySelector('#dark')
let body = document.querySelector('body')
//let Nav = document.querySelectorAll('.nav-link')
let dark = false

 darkMode.addEventListener('click', function(){
    if(dark){
         body.style.backgroundColor = "#ddd"
    }
    else{
         body.style.backgroundColor = "#1d2a35"
        body.style.color="#ddd"

    }
    dark = !dark;
})


