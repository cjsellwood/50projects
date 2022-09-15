"use strict";
const questions = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborghini's",
        ],
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched",
        options: ["1996", "1995", "1994", "None of the above"],
        answer: "1995",
    },
];
let currentQuestion = 0;
let correct = 0;
const submitQuestion = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let selected = null;
    for (let entry of data) {
        selected = entry[1];
    }
    if (!selected) {
        return;
    }
    if (selected === questions[currentQuestion].answer) {
        correct++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion(questions[currentQuestion]);
    }
    else {
        renderScore();
    }
};
const renderQuestion = (question) => {
    const questionContainer = document.getElementById("question-container");
    questionContainer.replaceChildren();
    const questionForm = document.createElement("form");
    questionForm.classList.add("question");
    const title = document.createElement("h1");
    title.textContent = question.question;
    questionForm.append(title);
    questionForm.append(createOptions(question.options));
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    questionForm.append(submitBtn);
    questionContainer.append(questionForm);
    questionForm.addEventListener("submit", submitQuestion);
};
const renderScore = () => {
    const questionContainer = document.getElementById("question-container");
    questionContainer.replaceChildren();
    const answerDisplay = document.createElement("div");
    answerDisplay.classList.add("answer-display");
    const title = document.createElement("h1");
    title.textContent = `You answered ${correct}/${questions.length} questions correctly`;
    answerDisplay.append(title);
    const reloadButton = document.createElement("button");
    reloadButton.textContent = "Reload";
    reloadButton.addEventListener("click", () => {
        location.reload();
    });
    answerDisplay.append(reloadButton);
    questionContainer.append(answerDisplay);
};
const createOptions = (options) => {
    const optionsEl = document.createElement("div");
    options.forEach((option) => {
        const optionContainer = document.createElement("div");
        const input = document.createElement("input");
        input.name = "question";
        input.type = "radio";
        input.id = option;
        input.value = option;
        optionContainer.append(input);
        const label = document.createElement("label");
        label.textContent = option;
        label.setAttribute("for", option);
        optionContainer.append(label);
        optionsEl.append(optionContainer);
    });
    return optionsEl;
};
renderQuestion(questions[currentQuestion]);
