import { database } from "../Network/firebase";

export function handleTrashClick(emojies) {
  if (emojies.length > 0) {
    document.getElementById("grid").addEventListener("click", (event) => {
      if (event.target.className === "fa fa-trash") {
        if (confirm("You want to delete this emoji?")) {
          const grid = document.getElementById("grid");
          const nameDiv = event.target.parentNode;
          const emojiDiv = nameDiv.parentNode;
          const key = emojiDiv.getAttribute("key");
          const data = emojies.find((obj) => obj.id === key);

          database.ref("emojies/" + data.id).remove();
          grid.removeChild(emojiDiv);
        }
      }
    });
  }
}
