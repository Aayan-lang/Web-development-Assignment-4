**Aayan Srivastwa**
**Btech CSE Cybersecurity sem-1**
**Lab Assignment-4**


const quizQuestions = [
  { question: "Who is the capital of India?", answer: "Subhman Gill" },
  { question: "Who won IPL 2025?", answer: "Royal challengers bengaluru " },
  { question: "Who rides Red bull in F1 racing?", answer: "Max verstappen" },
  { question: "Which planet we live in?", answer: "Earth" },
  { question: "What is the capital of India?", answer: "new delhi"  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // initialize score
  const total = quizQuestions.length;

  // friendly intro
  alert("Welcome to the JavaScript Console Quiz! You will be asked " + total + " questions.");

  for (let i = 0; i < total; i++) {
    // show question and get answer
    const userInput = prompt("Q" + (i + 1) + ": " + quizQuestions[i].question + "\n(Please type your answer and press OK)");

    // Normalize input safely (handle Cancel)
    if (userInput === null) {
      // user clicked Cancel — give option to quit or continue
      const quit = confirm("Do you want to quit the quiz? (OK = Quit, Cancel = Continue)");
      if (quit) {
        alert("Quiz ended early. Your score: " + score + " / " + total);
        return; // exit the function early
      } else {
        // if they chose to continue, treat as empty string and continue loop
        normalized = "";
      }
    }

    // Normalize (lowercase + trim) and compare
    const normalized = (userInput || "").toLowerCase().trim();
    const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

    if (normalized === correctAnswer) {
      score++;
      alert("Correct! ✅\nYour score: " + score + " / " + total);
    } else {
      // show correct answer for learning
      alert("Incorrect. ❌\nCorrect answer: " + quizQuestions[i].answer + "\nYour score: " + score + " / " + total);
    }
  }

  // final result
  alert("Quiz finished! Final score: " + score + " / " + total);

  // Optional extra: show a short message based on performance
  const percent = Math.round((score / total) * 100);
  if (percent === 100) {
    alert("Excellent! You got all answers correct 🎉");
  } else if (percent >= 60) {
    alert("Good job! Keep practicing. 👍");
  } else {
    alert("Keep learning — you'll improve with practice. 💪");
  }
}

// Run quiz automatically when code is pasted
runQuiz();



