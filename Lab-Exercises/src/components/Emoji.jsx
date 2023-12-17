import React,{useContext} from "react";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { EmojiContext } from "../contexts/EmojiContext";
export default function Emoji() {

  const {emoji, setEmoji} = React.useContext(EmojiContext);
  const moodHandler = () => {
    let newMood = "😊"
    if (emoji === "😊") newMood = "😕"
    else if (emoji === "😕") newMood = "😊"
    setEmoji(newMood)
  }
  return (
    <div className="MoodChanger">
      Current Mood: {emoji}
      <button onClick={moodHandler}>button press</button>

    </div>
  );
}

