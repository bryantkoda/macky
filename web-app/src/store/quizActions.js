import { quizActions } from "./quizSlice";

export const resetQuiz = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");
      const { results: data } = await response.json();
      return data;
    };

    try {
      const quizData = await fetchData();
      dispatch(
        quizActions.reset({
          questions: quizData,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
};
