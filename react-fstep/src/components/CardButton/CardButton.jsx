import "./CardButton.css";

// Данной функции на вход приходит аргумент - ее дочерний элемент, то есть вложенный в нее элемент
function CardButton({ children, className }) {
  const clsName = "card-button" + " " + (className ? className : "")
  
  return (
    <button className={clsName}>{children}</button>
  );
}

export default CardButton;

