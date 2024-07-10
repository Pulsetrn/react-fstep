import "./Button.css";
import { useState } from "react";

// onClick - функция, которая деструктуризируется в пришедших аргументах функции
// позволяет сделать компонент кнопки полностью контролируемым извне, то есть теперь кнопка полностью
// переиспользуема, за счет того, что на нее можно теперь вешать различные обработчики события клика
function Button({ text, onClick }) {
  // const [text, setText] = useState("Save");

  // // В связи с тем, что в strict режиме каждый компонент в react рендерится по два раза
  // // данный консоль лог будет выведен два раза
  // function handleClick() {
  //   // В результате нажания на кнопку (компонент) будет вызвана данная функция, где будет вызвана функция setText,.
  //   // В результате вызова функции setText будет произведен РЕРЕНДЕР данного компонента
  //   setText("Delete");
  //   console.log(text);
  // }

  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
