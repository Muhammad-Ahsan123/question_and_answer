let ques = [
    { question: "What is the capital of Pakistan ?", answer: "Islamabad" },
    { question: "Where are you live in ?", answer: "Karachi" },
    { question: "What is your country name ?", answer: "Pakistan" },
    { question: "How much country in the world ?", answer: "195" },
    { question: "What is the color of our flag ?", answer: "white and green" },
  ]
  let score = 0;
  for (let i = 0; i < ques.length; i++) {
    let user_ans = prompt(ques[i].question)
    let correct_ans = ques[i].answer
    
    if (user_ans === null) {
        console.log("Quiz canceled.");
        break;
      }
    else if (user_ans === "") {
      console.log(`Please give the answer of question no ${i + 1}`);
    }
    else if (user_ans === correct_ans) {
      score++;
    }
  }
  console.log(`correct answer is ${score} out of ${ques.length}`)