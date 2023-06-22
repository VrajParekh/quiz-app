import { useEffect, useMemo, useState } from "react";
import "./css/app.css";
import Question from "./components/Question";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "What is the capital city of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which country has the largest population in the world?",
      answers: [
        { text: "India", correct: false },
        { text: "United States", correct: false },
        { text: "China", correct: true },
        { text: "Indonesia", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who wrote the book 'To Kill a Mockingbird'?",
      answers: [
        { text: "Mark Twain", correct: false },
        { text: "Harper Lee", correct: true },
        { text: "George Orwell", correct: false },
        { text: "J.K. Rowling", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
        { text: "Mars", correct: true },
      ],
    },
    {
      id: 5,
      question: "What is the largest organ in the human body?",
      answers: [
        { text: "Skin", correct: true },
        { text: "Heart", correct: false },
        { text: "Liver", correct: false },
        { text: "Brain", correct: false },
      ],
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      id: 7,
      question: "Which war lasted from 1939 to 1945?",
      answers: [
        { text: "World War I", correct: false },
        { text: "World War II", correct: true },
        { text: "Cold War", correct: false },
        { text: "Vietnam War", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the currency of Japan?",
      answers: [
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
        { text: "Pound", correct: false },
        { text: "Yen", correct: true },
      ],
    },
    {
      id: 9,
      question: "Who invented the telephone?",
      answers: [
        { text: "Thomas Edison", correct: false },
        { text: "Alexander Graham Bell", correct: true },
        { text: "Albert Einstein", correct: false },
        { text: "Nikola Tesla", correct: false },
      ],
    },
    {
      id: 10,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        { text: "China", correct: false },
        { text: "South Korea", correct: false },
        { text: "Japan", correct: true },
        { text: "Thailand", correct: false },
      ],
    },
    {
      id: 11,
      question: "Which scientist developed the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Marie Curie", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the largest continent in the world?",
      answers: [
        { text: "Asia", correct: true },
        { text: "Africa", correct: false },
        { text: "North America", correct: false },
        { text: "Europe", correct: false },
      ],
    },
    {
      id: 13,
      question: "Who is the author of the novel 'Pride and Prejudice'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: false },
        { text: "Emily Bronte", correct: false },
        { text: "Jane Austen", correct: true },
      ],
    },
    {
      id: 14,
      question: "Which mountain is the tallest in the world?",
      answers: [
        { text: "Mount Everest", correct: true },
        { text: "K2", correct: false },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false },
      ],
    },
    {
      id: 15,
      question: "Which ocean is the largest in the world?",
      answers: [
        { text: "Pacific Ocean", correct: true },
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 15, amount: "₹ 7 Crore" },
      { id: 14, amount: "₹ 3 Crore" },
      { id: 13, amount: "₹ 1 Crore" },
      { id: 12, amount: "₹ 50,00,000" },
      { id: 11, amount: "₹ 25,00,000" },
      { id: 10, amount: "₹ 12,50,000" },
      { id: 9, amount: "₹ 6,50,000" },
      { id: 8, amount: "₹ 3,20,000" },
      { id: 7, amount: "₹ 1,60,000" },
      { id: 6, amount: "₹ 80,000" },
      { id: 5, amount: "₹ 40,000" },
      { id: 4, amount: "₹ 20,000" },
      { id: 3, amount: "₹ 10,000" },
      { id: 2, amount: "₹ 5,000" },
      { id: 1, amount: "₹ 1,000" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((i) => i.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop || questionNumber > 15 ? (
          <h1 className="gameOverText">You Earned : {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Question
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((i) => (
            <li
              className={
                questionNumber === i.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
              key={i.id}
            >
              <span className="moneyListNumber">{i.id}</span>
              <span className="moneyListAmt">{i.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
