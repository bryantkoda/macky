import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  answers: [],
  currentQuestionIndex: 0,
  isDoneAnswering: false,
  score: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerCurrentQuestion(state, action) {
      const { questions, answers, currentQuestionIndex } = state;
      const { answer } = action.payload;
      const updatedAnswers = [...answers, answer];
      state.answers = updatedAnswers;

      if (questions[currentQuestionIndex].correct_answer === answer) {
        state.score++;
      }

      if (state.currentQuestionIndex < 9) {
        state.currentQuestionIndex++;
      } else {
        state.isDoneAnswering = true;
      }
    },
    reset(state, action) {
      state.questions = action.payload.questions;
      state.answers = [];
      state.currentQuestionIndex = 0;
      state.isDoneAnswering = false;
      state.score = 0;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
