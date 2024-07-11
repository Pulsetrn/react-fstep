import { useState } from "react";
import styles from "./JournalForm.module.css";
import Button from "../Button/Button";
// import cn from "classnames";

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
    // flag for controlling that state is actually valid/ not valid
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
    <form className={styles["journal-form"]} onSubmit={addJournalNote}>
      <div>
        <input
          type="text"
          name="title"
          className={`${styles["input-title"]} ${
            formState.title ? "" : styles["invalid"]
          }`}
        />
      </div>
      <div className={styles["date-row"]}>
        <label for="date" className={styles["date-label"]}>
          <img src="/calendar.svg" alt="Error while downloading" />
          <span>Date</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={`${styles["input"]} ${
            formState.date ? "" : styles["invalid"]
          }`}
        />
      </div>
      <div className={styles["date-row"]}>
        <label for="tag" className={styles["date-label"]}>
          <img src="/folder.svg" alt="Error while downloading" />
          <span>Tags</span>
        </label>
        <input type="text" name="tag" id="tag" className={styles["input"]} />
      </div>
      <textarea
        name="text"
        id="text-area"
        className={`${styles["input"]} ${
          formState.text ? "" : styles["invalid"]
        }`}
      ></textarea>
      <Button text="Save" />
    </form>
  );
}

export default JournalForm;
