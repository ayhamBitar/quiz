class Question {
  constructor(obj) {
    this.obj = obj;
    this.questionDom = document.getElementById("quiz-question");
    this.questionDom.innerHTML = this.obj.question;
    this.choicesDom = document.querySelector(".choices");

    this.answers = [this.obj.correct_answer, ...this.obj.incorrect_answers];
    this.makingRandomAnswersList(this.answers);
    this.correctAnswer = this.obj.correct_answer;

    this.addChoicesDom();
  }
  addChoicesDom() {
    Array.from(this.choicesDom.childNodes).map((ele) => ele.remove());
    for (let i = 0; i < this.answers.length; i++) {
      let radio = `<div class='choice'> <input type="radio" name="radio" class='radio' set="${
        this.answers[i]
      }" id='ans${[i]}'>  <label for='ans${[i]}'>${
        this.answers[i]
      }</label> </div>`;
      this.choicesDom.insertAdjacentHTML("beforeend", radio);
    }

    this.choicesDom.firstChild
      .querySelector('input[name="radio"]')
      .setAttribute("checked", "checked");
    console.log(this.choicesDom.firstChild);
  }
  makingRandomAnswersList = (answers) => {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
  };
}

export default Question;
