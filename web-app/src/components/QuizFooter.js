import { useDispatch } from "react-redux";
import { quizActions } from "../store/quizSlice";
import { MdClose, MdCheck } from "react-icons/md";

export const QuizFooter = () => {
  const dispatch = useDispatch();

  const onClickAnswer = (answer) => {
    dispatch(quizActions.answerCurrentQuestion({ answer }));
  };

  return (
    <div className="quiz-footer">
      <div
        className="quiz-footer-btn bg-true"
        onClick={() => onClickAnswer(true)}
      >
        <MdCheck className="icon" />
        <p>True</p>
      </div>
      <div
        className="quiz-footer-btn bg-false"
        onClick={() => onClickAnswer(false)}
      >
        <MdClose className="icon" />
        <p>False</p>
      </div>
    </div>
  );
};
