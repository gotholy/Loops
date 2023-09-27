function generateLoop() {
  const letterCount = document.getElementById("letterCount").value;
  const output = document.getElementById("output");
  const oArr = [];

  if (letterCount % 2 === 0) {
    for (let i = 0; i < letterCount; i++) {
      oArr.push("o");
    }
  } else {
    for (let i = 0; i < letterCount; i++) {
      if (i % 2 === 0) {
        oArr.push("o");
      } else {
        oArr.push("0");
      }
    }
  }
  oArr.push("p");
  oArr.unshift("L");
  const loop = oArr.join("");
  output.textContent = loop;
}
