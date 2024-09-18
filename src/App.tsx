import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert>
        <span>Alert</span> Testing
      </Alert>
    </>
  );
}

export default App;
