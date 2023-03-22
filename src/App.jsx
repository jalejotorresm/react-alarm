import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Clock from "./Components/Clock";
import AlarmContainer from "./Components/AlarmContainer";
import { setAlarmsFromStorage } from "./redux/actions/AlarmAction";

function App() {
  const activeAlarms = useSelector((state) => state.alarmReducer.activeAlarm);
  const dispatch = useDispatch();

  useEffect(() => {
    const myAlarms = localStorage.getItem("myAlarms");
    if (myAlarms) {
      dispatch(setAlarmsFromStorage(JSON.parse(myAlarms)));
    }
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: activeAlarms ? activeAlarms.bgColor : "#000" }}
    >
      <Clock />
      <AlarmContainer />
    </div>
  );
}

export default App;
