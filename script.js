var questions = document.getElementsByClassName("question");

for(let i=0; i<questions.length;i++){
    questions[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.display =="block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }
    })
}