import { useState } from "react";
import "./JournalForm.css";
import Button from "../Button/Button";

// onSubmit - функция, которая приходит из App.jsx и которой мы пользуемся при работе с данным компонентом
function JournalForm({ onSubmit }) {
  // const [inputData, setInputData] = useState("");

  // function handleChangeInput(event) {
  //   setInputData(event.target.value);
  // }

  const [formState, setFormState] = useState({
    title: true,
    date: true,
    text: true,
  });

  function addJournalNote(event) {
    event.preventDefault();
    let isValid = true;
    const formData = new FormData(event.target);
    // Получаем с FormData со всеми данными формы js object, с которым в дальнейшем работаем
    const formProps = Object.fromEntries(formData);
    // Меняем одно поле у объекта на объект Date, иначе приложение упадет на этапе формирования даты в JournalItem.jsx
    if (!formProps.title?.trim().length) {
      // Оборачиваем выражение анонимной функции в скобки, так как иначе ts не поймет, что мы работаем с объектом
      setFormState((state) => ({ ...state, title: false }));
      isValid = false;
    } else {
      setFormState((state) => ({ ...state, title: true }));
    }
    if (!formProps.text?.trim().length) {
      setFormState((state) => ({ ...state, text: false }));
      isValid = false;
    } else {
      setFormState((state) => ({ ...state, text: true }));
    }
    if (!formProps.date) {
      setFormState((state) => ({ ...state, date: false }));
      isValid = false;
    } else {
      setFormState((state) => ({ ...state, date: true }));
    }
    if (!isValid) {
      return;
    } else onSubmit(formProps); // После получения данных с формы вызываем функцию, которая пришла нам извне
  }

  return (
    <form className="journal-form" onSubmit={addJournalNote}>
      <input type="text" name="title" style={{border: formState.title ? undefined : "1px solid red"}}/>
      <input type="date" name="date" style={{border: formState.date ? undefined : "1px solid red"}}/>
      <input type="text" name="tag" id="" />
      <textarea name="text" id="text-area" style={{border: formState.text ? undefined : "1px solid red"}}></textarea>
      <Button text="Save" />
    </form>
  );
}

export default JournalForm;
