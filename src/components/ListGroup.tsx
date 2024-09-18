import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  const getMessage = (name: string) => {
    return <h4>Hello {name}</h4>;
  };

  // event handeler
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {getMessage("YRAJ")}
      {items.length === 0 ? <p>No item Found</p> : null}
      <ul className={"list-group"}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
              // console.log(cityName);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
