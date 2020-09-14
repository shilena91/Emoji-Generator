import { database } from "../Network/firebase";
import { renderEmoji } from "../renderUIElements/renderEmoji";
import Emoji from "../DataModel/Emoji.class";

function handleSaveClick(elements, emojies) {
  document.getElementById("save").addEventListener("click", () => {
    const filledCircles = elements.filter((e) => e.filled === true);

    if (filledCircles.length > 0) {
      let name = prompt("Please choose a name for your emoji:");

      if (name == null || name == "") {
        return;
      }
      const newEmojiObject = new Emoji(filledCircles, name);

      database.ref("emojies").push(newEmojiObject);
      database
        .ref("emojies")
        .limitToLast(1)
        .on("child_added", (snapshot) => {
          emojies.push({
            id: snapshot.key,
            ...snapshot.val(),
          });
          renderEmoji(filledCircles, name, snapshot.key);
          database.ref("emojies").off("child_added");
        });
    }
  });
}

export { handleSaveClick, renderEmoji };
