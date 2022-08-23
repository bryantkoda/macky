import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../store/quizActions";

import { CardContainer, QuizHeader, QuizFooter } from "../components";

const QuizPage = () => {
  const navigate = useNavigate();
  const quizState = useSelector((state) => state.quiz);
  const { questions, currentQuestionIndex, isDoneAnswering } = quizState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  useEffect(() => {
    if (isDoneAnswering) {
      navigate("/results");
    }
  }, [isDoneAnswering]);

  const header = (
    <QuizHeader
      title={`Category: ${questions?.[currentQuestionIndex]?.category}`}
      counter={`${currentQuestionIndex + 1} of 10`}
    />
  );

  return (
    <CardContainer footer={<QuizFooter />} header={header}>
      <div className="quiz-body">
        <p
          dangerouslySetInnerHTML={{
            __html: questions?.[currentQuestionIndex]?.question,
          }}
        />
      </div>
    </CardContainer>
  );
};

export default QuizPage;
