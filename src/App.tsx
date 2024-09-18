import ListGroup from "./components/ListGroup";

function App() {
  let items1: string[] = [
    "Chicago",
    "Aurora",
    "Naperville",
    "Dekalb",
    "Sycamore",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items1}
        heading=" Cities"
        onSelectedItem={handleSelectItem}
      />
    </>
  );
}

export default App;
