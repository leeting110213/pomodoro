import React from "react";
import JSConfetti from "js-confetti";

export default function Completetask({
  handlecancelcompletetask,
  handlcompletetask,
}) {
  const confetti = () => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      // emojis: ["🍅"],
      // emojiSize: 70,
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
        "#a39fd4",
        "#736ae6",
        "#dded9f",
        "#c6eb38",
      ],
      confettiRadius: 6,
      confettiNumber: 500,
    });

    const jsConfetti2 = new JSConfetti();
    jsConfetti2.addConfetti({
      emojis: ["🍅"],
      emojiSize: 70,
      confettiNumber: 15,
    });
  };
  return (
    <>
      <div className="position-fixed d-flex justify-content-center task_container completetask align-items-center">
        <div className="d-flex justify-content-around align-items-center w-100">
          <div>任務完成了嗎?</div>
          <div>
            <button
              className=" btn btn-outline-success me-2"
              onClick={() => handlecancelcompletetask()}
            >
              還沒QAQ
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                handlcompletetask();
                confetti();
              }}
            >
              完成了🎉
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
