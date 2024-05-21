import React from "react";
import { Button } from "@material-tailwind/react";
import FinaceNote from "./FinanceNote";
import { useState, ChangeEvent } from "react";
import { IList } from "./Interface";

function Homepage() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [list, setList] = useState<IList[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTitle(e.target.value);
    } else {
      setPrice(Number(e.target.value));
    }
  };

  const addList = (): void => {
    const newList = { titleName: title, price: price };
    setList([...list, newList]);
    setTitle("");
    setPrice(0);
  };
  return (
    <div>
      <button>Click Here</button>
      <div>
        <input type="text" placeholder="Title" value={title} />
        <input type="number" placeholder="Price" value={price} />
      </div>
      <button onClick={addList}> Add Money </button>
      <div>
        {addList.map((list: IList, key: number) => {
          return <FinaceNote key={key} list={list} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;
