class Final {
  constructor(finalscore, total) {
    this.maindivDom = document.querySelector(".final");
    this.finalScoreDom = document.querySelector(".scores");
    this.restartBtn = document.getElementById("restart");
    this.maindivDom.style.display = "block";
    this.finalScoreDom.innerHTML = `${finalscore} correct from ${total}`;
    this.restartBtn.addEventListener("click", () => location.reload());
  }
}
export default Final;
