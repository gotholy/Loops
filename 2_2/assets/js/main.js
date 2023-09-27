function generateLoop() {
  const letterCount = document.getElementById("letterCount").value;
  const output = document.getElementById("output");
  const oArr = [];
  for (let i = 0; i < letterCount; i++) {
    oArr.push("o");
  }
  oArr.push("p");
  oArr.unshift("L");
  const loop = oArr.join("");
  output.textContent = loop;
}
