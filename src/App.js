import React, { useState } from "react";
import logo from "./images/logo.png";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "Il bicchiere lo vedi...",
      answerOptions: [
        { answerText: "Mezzo pieno.", points: 5 },
        { answerText: "Mezzo vuoto.", points: 3 },
        { answerText: "Chi si è fregato il bicchiere?", points: 1 }
      ]
    },
    {
      questionText: "Come usciremo dalla pandemia?",
      answerOptions: [
        { answerText: "Migliori.", points: 5 },
        { answerText: "Peggiori.", points: 3 },
        { answerText: "Moriremo tutti!", points: 1 }
      ]
    },
    {
      questionText: "Ti fidi dei vaccini?",
      answerOptions: [
        { answerText: "Pienamente.", points: 5 },
        { answerText: "Beh, se non c'è alternativa...", points: 3 },
        { answerText: "Moriremo tutti!", points: 1 }
      ]
    },
    {
      questionText: "Ti fidi delle persone?",
      answerOptions: [
        { answerText: "Direi di si.", points: 5 },
        { answerText: "La fregatura è dietro l'angolo.", points: 3 },
        { answerText: "Devono morire tutti!", points: 1 }
      ]
    }
  ];

  function handleAnswerButtonClick(points) {
    if (points) {
      setScore(score + points);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  //RENDERING JSX DELL'APP//
  if (showScore && score > 16) {
    return (
      <>
        <h1>Clamoroso Test</h1>
        <h2>Sei ottimista o pessimista?</h2>
        <div className="app">
          <div className="score-section">
            Il tuo punteggio è di: <br /> {score} su {questions.length * 5}. <br />
            <br />
            Congratulazioni!
            <br /> Sei un ottimista!
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Ricomincia
          </button>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </>
    );
  } else if (showScore && score >= 6 && score <= 16) {
    return (
      <>
        <h1>Clamoroso Test</h1>
        <h2>Sei ottimista o pessimista?</h2>
        <div className="app">
          <div className="score-section">
            Il tuo punteggio è di: <br />
            {score} su {questions.length * 5}. <br />
            <br />
            Beh dai! <br /> Sei una persona realista...
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Ricomincia
          </button>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </>
    );
  } else if (showScore && score < 6) {
    return (
      <>
        <h1>Clamoroso Test</h1>
        <h2>Sei ottimista o pessimista?</h2>
        <div className="app">
          <div className="score-section">
            Il tuo punteggio è di: <br /> {score} su {questions.length * 5}. <br />
            <br />
            Meglio che tu non sappia il tuo profilo...
          </div>
          <button className="button-reset" onClick={() => handleReset()}>
            Ricomincia
          </button>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Clamoroso Test</h1>
        <h2>Sei ottimista o pessimista?</h2>
        <div className="app">
          <div className="question-section">
            <div className="question-count">
              <span>Domanda {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className="button-answer" onClick={() => handleAnswerButtonClick(answerOption.points)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </>
    );
  }
}
