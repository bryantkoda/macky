import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../store/quizActions";
import { CardContainer, QuizHeader, ButtonFooter, Result } from "../components";

const ResultPage = () => {
  const navigate = useNavigate();
  const quizState = useSelector((state) => state.quiz);
  const { isDoneAnswering } = quizState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDoneAnswering) {
      navigate("/");
    }
  }, [isDoneAnswering]);

  const header = <QuizHeader title="Final Results" />;

  const footer = (
    <ButtonFooter
      title="Play again"
      onClick={() => {
        dispatch(resetQuiz());
      }}
    />
  );

  return (
    <CardContainer footer={footer} header={header}>
      {isDoneAnswering ? <Result /> : null}
    </CardContainer>
  );
};

export default ResultPage;
