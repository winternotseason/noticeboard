import "./ModalBackground.scss";
const ModalBackground: React.FC<any> = ({ onSelectedManu }) => {
  return <>{onSelectedManu && <div className="background" />}</>;
};

export default ModalBackground;
