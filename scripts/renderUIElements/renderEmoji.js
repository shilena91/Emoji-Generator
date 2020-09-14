function renderEmoji(circles, name, key) {
  const newEmoji = document.createElement("div");
  const newCanvas = document.createElement("canvas");
  const newName = document.createElement("div");
  const trashButton = document.createElement("button");

  newEmoji.setAttribute("class", "emoji");
  newEmoji.setAttribute("key", key);

  newCanvas.setAttribute("width", "280px");
  newCanvas.setAttribute("height", "280px");
  drawFilledCircles(circles, newCanvas);

  newName.setAttribute("class", "name");
  newName.innerText = name;

  trashButton.setAttribute("class", "fa fa-trash");

  newName.appendChild(trashButton);
  newEmoji.appendChild(newCanvas);
  newEmoji.appendChild(newName);
  document.getElementById("grid").prepend(newEmoji);
}

function drawFilledCircles(filledCircles, newCanvas) {
  const newContext = newCanvas.getContext("2d");

  filledCircles.forEach((e) => {
    newContext.beginPath();
    newContext.arc(
      e.x,
      e.y,
      e.radius,
      e.startAngle,
      e.endAngle,
      e.antiClockwise
    );
    newContext.fillStyle = "orange";
    newContext.fill();
  });
}

export { renderEmoji };
