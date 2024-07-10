import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JournalAddItem from "./components/JournalAddItem/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

function App() {
  const INIT_DATA = [
    // {
    //   id: 1,
    //   title: "Preparing to update courses",
    //   text: "Going to mountais is really amazing and high memorized event in every human life",
    //   date: new Date(),
    // },
    // {
    //   id: 2,
    //   title: "THE IDEA",
    //   text: "my thought process brought me through a lot of hard exercises but I'm here right now",
    //   date: new Date(),
    // },
  ];

  const [data, setData] = useState(INIT_DATA);

  function handleSubmit(newPost) {
    setData((curItems) => {
      return [
        ...curItems,
        {
          ...newPost,
          id: curItems.length > 0 ? Math.max(...curItems.map((element) => element.id)) + 1 : 1,
        },
      ];
    });
  }

  // Функция в react возвращает JSX expression, которое в свою очередь содержит HTML теги + react компоненты
  return (
    <div className="app">
      {/* <Button></Button> */}
      {/* Когда мы вкладываем компонент в компонент (композиция), у родительского элемента при его формировании */}
      {/* появляется аргумент (в функции) - ссылка на дочерний, переданный внутрь элемент */}
      <LeftPanel>
        <Header/>
        <JournalAddItem />
        <JournalList data={data}></JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={handleSubmit}></JournalForm>
      </Body>
    </div>
  );
}

export default App;
