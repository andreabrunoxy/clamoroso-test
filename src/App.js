import React, { useState, useEffect } from 'react';
import { questions } from './data/data';
import logo from './assets/images/logo.png';
import click from './assets/sounds/click.mp3';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  function handleAnswerButtonClick(points) {
    new Audio(click).play();
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
    new Audio(click).play();
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  //RENDERING JSX DELL'APP//
  return (
    <>
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1>TEST</h1>
            <h2>Sei pessimista o ottimista?</h2>
            <p>Rispondi a tutte le domande e alla fine scoprirai il risultato.</p>
            <p>Buon divertimento!</p>
            <button className="button-modal" onClick={() => setModalIsOpen(false)}>
              Inizia il test!
            </button>
            <div className="image">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      )}
      <h1>TEST</h1>
      <h2>Sei pessimista o ottimista?</h2>

      <div className="app-container">
        <div className="app">
          {showScore && (
            <>
              <div className="score-section">
                Il tuo punteggio è: <br /> {score} su {questions.length * 5}. <br />
                <br />
                {score > 16 ? 'Congratulazioni! Sei un ottimista!' : ''}
                {score >= 6 && score <= 16 ? 'Beh dai! Sei una persona realista!' : ''}
                {score < 6 ? 'Lasciamo stare...meglio non sapere!' : ''}
              </div>
              <button className="button-reset" onClick={() => handleReset()}>
                Ricomincia
              </button>
            </>
          )}
          {!showScore && (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Domanda {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    className="button-answer"
                    onClick={() => handleAnswerButtonClick(answerOption.points)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <footer>Made with ❤️ by Andrea Bruno</footer>
    </>
  );
}
