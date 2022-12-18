import Final from "./final.js";
import Question from "./question.js";

class Quiz {
  constructor(questions) {
    this.mainQuizDiv = document.querySelector(".quiz");
    this.questions = questions;
    this.submitBtn = document.getElementById("submit");
    this.numberFromAmountDom = document.getElementById("number-from");

    this.amount = 0;
    this.numberFromAmountDom.textContent = `1 from ${this.questions.length}`;
    this.scores = 0;

    this.question = this.createQuestion(this.amount);

    this.submitBtn.addEventListener("click", () => {
      this.checcCorrectAnswer();
      this.nextQuestion();
    });
  }
  createQuestion(i) {
    return new Question(this.questions[i]);
  }
  nextQuestion() {
    this.amount++;
    if (this.amount < this.questions.length) {
      this.question = this.createQuestion(this.amount);

      this.numberFromAmountDom.textContent = `${this.amount + 1} from ${
        this.questions.length
      }`;
    } else {
      this.mainQuizDiv.remove();
      new Final(this.scores, this.amount);
    }
  }
  checcCorrectAnswer() {
    let inputDoms = document.querySelector("input[name='radio']:checked");
    if (
      inputDoms.nextElementSibling.textContent == this.question.correctAnswer
    ) {
      this.scores++;
      this.displayCorrect("Correct");
    } else {
      this.displayCorrect(
        `Wrong: The correct answer is: ${this.question.correctAnswer}`
      );
    }
  }
  displayCorrect(result) {
    let correctDom = document.querySelector(".correct");
    correctDom.innerHTML = result;
    correctDom.style.opacity = "0.8";
    setTimeout(() => {
      correctDom.style.opacity = "0";
    }, 2000);
  }
}
export default Quiz;
