export function answerQuestion(question) {
    if (isEven(question.length)) {
        return "no";
    }
    return "yes";
}

export function isEven(number) {
    return number % 2 === 0;
}

export function onSubmit(event) {
    event.preventDefault();
    
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value;
    
    questionInput.value = "";

    const answer = answerQuestion(question);

    const answers = document.getElementById('answers-div')

    const newAnswer = document.createElement('p');
    newAnswer.innerHTML = `${question}: ${answer}`;

    answers.insertBefore(newAnswer, answers.firstChild);
}
