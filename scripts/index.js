import { handleSaveClick, renderEmoji } from "./eventListener/handleSaveClick";
import { handleClickCanvas } from "./eventListener/handleClickCanvas";
import { renderCanvas } from "./renderUIElements/renderCanvas";
import { getDataFromFirebase } from "./Network/firebase";
import { handleResetClick } from "./eventListener/handleResetClick";
import { handleTrashClick } from "./eventListener/handleTrashClick";
import "../sass/base.scss";

function App() {
  const objectCanvas = renderCanvas();
  const canvas = objectCanvas.canvas;

  canvas.addEventListener(
    "click",
    (event) => {
      handleClickCanvas(objectCanvas, event);
    },
    false
  );

  getDataFromFirebase().then((emojies) => {
    emojies.forEach((emoji) => {
      renderEmoji(emoji.circles, emoji.name, emoji.id);
    });
    handleSaveClick(objectCanvas.elements, emojies);
    handleTrashClick(emojies);
  });
  handleResetClick(objectCanvas);
}

App();
