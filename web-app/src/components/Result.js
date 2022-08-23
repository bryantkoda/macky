import { useSelector } from "react-redux";
import { ResultItem } from "./ResultItem";

export const Result = () => {
  const quizState = useSelector((state) => state.quiz);
  const { questions, answers, score } = quizState;

  return (
    <>
      <div className="result-score">
        <p>{`You scored ${score}/10`}</p>
      </div>
      <ul className="result-list">
        {questions.map((q, index) => {
          return (
            <ResultItem
              question={q}
              answer={answers[index]}
              number={index + 1}
              key={`q-${index}`}
            />
          );
        })}
      </ul>
    </>
  );
};
