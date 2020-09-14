import Circle from "../DataModel/Circle.class.js";

function renderCanvas() {
  const canvas = document.getElementById("canvas");
  const elements = drawEmptyCanvas(canvas);

  return {
    canvas: canvas,
    elements: elements,
  };
}

function drawEmptyCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  let elements = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const x = 17.5 + j * 35;
      const y = 17.5 + i * 35;

      ctx.strokeStyle = "#121212";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2, true);
      ctx.stroke();

      elements.push(new Circle(x, y));
    }
  }
  return elements;
}

export { renderCanvas, drawEmptyCanvas };
