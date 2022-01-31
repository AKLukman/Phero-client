import React, { useState } from "react";
import "./Test.css";
import useAuth from "../../../../../../hooks/useAuth";

export default function App() {
  const questions = [
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hyper Text Preprocessor", isCorrect: false },
        { answerText: "Hyper Text Markup Language", isCorrect: true },
        { answerText: "Hyper Text Multiple Language", isCorrect: false },
        { answerText: "Hyper Tool Multi Language", isCorrect: false },
      ],
    },
    {
      questionText: "What does CSS stand for?",
      answerOptions: [
        { answerText: "Common Style Sheet", isCorrect: false },
        { answerText: "Colorful Style Sheet", isCorrect: false },
        { answerText: "Computer Style Sheet", isCorrect: false },
        { answerText: "Cascading Style Sheet", isCorrect: true },
      ],
    },
    {
      questionText: "What does PHP stand for?",
      answerOptions: [
        { answerText: "Hypertext Preprocessor", isCorrect: true },
        { answerText: "Hypertext Programming", isCorrect: false },
        { answerText: "Hypertext Preprogramming", isCorrect: false },
        { answerText: "Hometext Preprocessor", isCorrect: false },
      ],
    },

    {
      questionText: "What does SQL stand for?",
      answerOptions: [
        { answerText: "Stylish Question Language", isCorrect: false },
        { answerText: "Stylesheet Query Language", isCorrect: false },
        { answerText: "Statement Question Language", isCorrect: false },
        { answerText: "Structured Query Language", isCorrect: true },
      ],
    },

    {
      questionText: "What does XML stand for?",
      answerOptions: [
        { answerText: "eXtensible Markup Language", isCorrect: true },
        { answerText: "eXecutable Multiple Language", isCorrect: false },
        { answerText: "eXTra Multi-Program Language", isCorrect: false },
        { answerText: "eXamine Multiple Language", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const { user } = useAuth();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      // console.log(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      const scoreInfo = {
        score: score,
        email: user.email,
      };
      fetch("http://localhost:5000/scores", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(scoreInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log("Inserted score");
          }
        });
    }
  };
  return (
    <div>
      <h2
        style={{ marginBottom: "-130", textAlign: "center", fontWeight: "700" }}
      >
        Skill Test
      </h2>
      <div className="full-container">
        <div className="app1">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="button1"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
