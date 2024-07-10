import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";

function JournalList({ data }) {
  if (data.length === 0) {
    return (
      <p className="journal-list">
        There're no notes, please create a new note to show it here
      </p>
    );
  }

  function sortItems(item1, item2) {
    if (item1.date < item2.date) {
      return 1;
    } else return -1;
  }

  return (
    <div className="journal-item">
      {data.sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JournalItem
            title={el.title}
            text={el.text}
            date={new Date(el.date)}
          ></JournalItem>
        </CardButton>
      ))}
    </div>
  );
}

export default JournalList;

