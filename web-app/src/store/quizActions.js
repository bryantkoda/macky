import { quizActions } from "./quizSlice";

export const resetQuiz = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/questions");
      const data = await response.json();
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
