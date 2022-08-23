import { RiArrowRightLine } from "react-icons/ri";

export const ButtonFooter = ({ title, onClick }) => {
  return (
    <div className="home-footer" onClick={onClick}>
      <p>{title}</p>
      <RiArrowRightLine className="icon" />
    </div>
  );
};
