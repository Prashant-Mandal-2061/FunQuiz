

const questions=[
    {
        question : "The nickname given to Samir by Daruka sir is...",
        answers : [
            {text:"Chamchaa", correct: false },
            {text:"Belchaa", correct: false },
            {text:"Neta", correct: true },
            {text:"Chotawaa", correct: false }
        ]
    },


    {
        question : "The nickname 'Xur Xuri sir' was given to which sir?",
        answers : [
            {text:"Binod Shah Sir", correct: true },
            {text:"Shyam Sundar Sir", correct: false },
            {text:"Binod Chauhan Sir", correct: false },
            {text:"Binod Shriwastav Sir", correct: false }
        ]
    }, 

    {
        question : "Who is known as 'Kaluwa Don'?",
        answers : [
            {text:"Sandip Yadav", correct: false },
            {text:"Samir Alam", correct: false },
            {text:"Prashant Mandal", correct: false },
            {text:"Anurag Sharma", correct: true }
        ]
    },


    {
        question : "Which teacher uses the dialogue 'Bahut Badka Tara'?",
        answers : [
            {text:"Binod Chauhan Sir", correct: false },
            {text:"Shyam Sundar Sir", correct: true },
            {text:"Binod Shah Sir", correct: false },
            {text:"Binod Shriwastav Sir", correct: false }
        ]
    },

    {
        question : "The most frank teacher is...?",
        answers : [
            {text:"Shyam Sundar Sir", correct: false },
            {text:"Munna Sir", correct: false },
            {text:"Babul Sir", correct: true },
            {text:"Gyanendra Sir", correct: false }
        ]
    },

    {
        question : "The date on which we got our farewell is...",
        answers : [
            {text:"2nd Baisakh 2081", correct: false },
            {text:"3rd Baisakh 2081", correct: true },
            {text:"4th Baisakh 2081", correct: false },
            {text:"5th Baisakh 2081", correct: false }
        ]
    },


    {
        question : "Which teacher uses the dialogue 'Photo is our motto'?",
        answers : [
            {text:"Dilip Sir", correct: false },
            {text:"Gyanedra Sir", correct: false },
            {text:"Babul Sir", correct: false },
            {text:"Munna Sir", correct: true }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score=0;


function startQuiz(){
    
    currentQuestionIndex = 0;

    score = 0;
    
    nextButton.innerHTML = "NExT";
    
    showQuestion();
    
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
   
    currentQuestion.answers.forEach(answer =>{
        
        const button = document.createElement("button");
        
        button.innerHTML = answer.text;
       

        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
    
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();




