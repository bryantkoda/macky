export const QuizHeader = ({ title, counter }) => {
  return (
    <div className="quiz-header">
      <img src={require("../images/logo.png")} alt="company-logo" />
      <h3>{title}</h3>
      <p>{counter}</p>
    </div>
  );
};
