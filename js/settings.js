// https://opentdb.com/api.php?amount=10&category=10&difficulty=easy
import Quiz from "./quiz.js";

class Settings {
  constructor() {
    this.startBtn = document.getElementById("submit-btn");
    this.categoryDom = document.getElementById("category");
    this.difficultyDom = document.querySelectorAll('input[name="diff"]');
    this.questionsNumDom = document.querySelector("#amount");
    this.settingsDom = document.querySelector(".settings");
    this.quizDom = document.querySelector(".quiz");
    this.quiz = {};
    this.startBtn.addEventListener("click", async () => {
      let data = await this.fetchData(this.creatingUrl());
      this.quiz = new Quiz(data);

      this.displayQuizDom();
    });
  }

  getQuestionsNumber() {
    let ques = this.questionsNumDom;
    return ques.value > 0 && ques.value < 20 ? ques.value : 1;
  }

  getDifficulty() {
    const radioBtnArry = Array.from(this.difficultyDom);
    return radioBtnArry.filter((btn) => btn.checked)[0].id;
  }

  async fetchData(url) {
    let data = await fetch(url).then((respns) =>
      respns.json().then((respns) => respns.results)
    );
    return data;
  }

  creatingUrl() {
    let category = this.categoryDom.value;
    let diff = this.getDifficulty();
    let amount = this.getQuestionsNumber();
    if (category && diff && amount) {
      return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${diff}`;
    }
  }
  displayQuizDom() {
    this.settingsDom.style.display = "none";
    this.quizDom.style.display = "block";
  }
}

export default Settings;
