import "./App.css";
import Products from "./Components/Products";
import ItemDate from "./Components/ItemDate";

function App() {
  const response = [
    {
      ItemName: "Excel",
      ItemDay: "20",
      ItemYear: "2002",
    },
    {
      ItemName: "Excel2",
      ItemDay: "203",
      ItemYear: "20022",
    },
  ];
  function clickHandler(){
    console.log("click hare");
  }
  return (
    <div className="App">
      <card>
        <Products name={response[0].ItemName}>
          How to pass the children value
        </Products>
        <ItemDate
          day={response[0].ItemDay}
          year={response[1].ItemYear}
        ></ItemDate>
        <Products name={response[1].ItemName}></Products>
        <ItemDate
          day={response[1].ItemDay}
          year={response[1].ItemYear}
        ></ItemDate>
        <button onClick={clickHandler}>Click me</button>
      </card>
    </div>
  );
}

export default App;
