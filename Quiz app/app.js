const questions=[
    {
        question:"What is JavaScript?",
        answer:[
            {text:"JavaScript is a scripting language to make the website interactive",correct:true},
            {text:"JavaScript is an assembly language to make the website interactive",correct:false},
            {text:"JavaScript is a compiled language to make the website interactive",correct:false},
            {text:"None of the mentioned",correct:false},
        ]
    },
    {
        question:"Which of the following is not javascript data types?",
        answer:[
            {text:"Null type",correct:false},
            {text:"Undefined type",correct:false},
            {text:"Number type",correct:false},
            {text:"All of the mentioned",correct:true},
        ] 
    },
    {
        question:"Why JavaScript Engine is needed?",
        answer:[
            {text:"Both Compiling & Interpreting the JavaScript",correct:false},
            {text:"Parsing the javascript",correct:false},
            {text:"Interpreting the JavaScript",correct:true},
            {text:"Compiling the JavaScript",correct:false},
        ] 
    },
    {
        question:"Why event handlers is needed in JS?",
        answer:[
            {text:"Allows JavaScript code to alter the behaviour of windows",correct:true},
            {text:"Adds innerHTML page to the code",correct:false},
            {text:"Change the server location",correct:false},
            {text:"Performs handling of exceptions and occurrences",correct:false},
        ] 

    },
    {
        question:" Which of the following is the property that is triggered in response to JS errors?",
        answer:[
            {text:"onclick",correct:false},
            {text:"onerror",correct:true},
            {text:"onmessage",correct:false},
            {text:"onexception",correct:false},
        ] 


    }
];
 
const questionElement=document.getElementById('questions');
const answerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
    
}

function showQuestion(){

    resetStatus();
    let currenquestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+". "+currenquestion.question;

    currenquestion.answer.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetStatus(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

function  showScore(){

      resetStatus();
      questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML="play Again";
      nextButton.style.display="block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
        
    }else{
        showScore();
    }
};


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex<questions.length) {
        handleNextButton();
        
    }else{
        startQuiz();
    }
})
startQuiz();