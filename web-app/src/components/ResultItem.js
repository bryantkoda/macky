import { MdClose, MdCheck } from "react-icons/md";

export const ResultItem = ({ question, answer, number }) => {
  return (
    <li>
      <div className="result-item-l">
        <p className="result-item-num">{number}</p>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: question.question,
            }}
          />
          <p className="result-item-answer">
            {`The correct answer is `}
            <span
              className={question.correct_answer ? "color-true" : "color-false"}
            >
              {question.correct_answer.toString()}
            </span>
            . You answer{" "}
            <span className={answer ? "color-true" : "color-false"}>
              {answer.toString()}
            </span>
          </p>
        </div>
      </div>
      {answer === question.correct_answer ? (
        <MdCheck className="icon color-true" />
      ) : (
        <MdClose className="icon color-false" />
      )}
    </li>
  );
};
