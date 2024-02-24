import "./ModalBackground.scss";
const ModalBackground: React.FC<any> = ({ SelectedManu }) => {
  return <>{SelectedManu && <div className="background" />}</>;
};

export default ModalBackground;
