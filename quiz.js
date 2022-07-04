function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result = document.getElementById('result');
    var quiz = document.getElementById('quiz');
    if (q1 == "React.js") {
        c++
    }
    if (q2 == "Bachelor of Engineering") {
        c++
    }
    if (q3 == "Java") {
        c++
    }
    if (q4 == "2022") {
        c++
    }
    if (q5 == "Dance") {
        c++
    }
    quiz.style.display = "none";
    if (c <= 3) {
        result.textContent = `You got ${c} point. 
        Thank you for taking the assessment, but currently you are not pass the assessment. Better luck next time......`
    } else {
        result.textContent = `You got ${c} point. Thank you for taking the assessment. You are pass the assessment, we will get back to you soon for further process.`
    }
}