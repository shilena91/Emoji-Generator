import { drawEmptyCanvas } from "../renderUIElements/renderCanvas.js";

export function handleResetClick(objectCanvas) {
  document.getElementById("reset").addEventListener("click", () => {
    const ctx = objectCanvas.canvas.getContext("2d");
    const elements = objectCanvas.elements;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEmptyCanvas(canvas);
    elements.forEach((e) => {
      e.filled = false;
    });
  });
}
