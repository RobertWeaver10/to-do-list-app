import "./Date.css";

function Date(props) {
  let month = props.month;
  let year = props.year;
  let day = Number(props.day) + 1;

  return (
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__year">{year}</div>
      <div className="date__day">{day}</div>
    </div>
  );
}

export default Date;
