import React from "react";
import { Button } from "@material-tailwind/react";
import { Input, Typography } from "@material-tailwind/react";
import Account1 from "./Account1";
import FinaceNote from "./FinanceNote";
import { useState, ChangeEvent } from "react";
import { IList } from "./Interface";
import Sidenav from "./Sidenav";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
} from "@material-tailwind/react";

function Homepage() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [expenseList, setExpenseList] = useState<IList[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setPrice(Number(event.target.value));
    }
  };

  const addExpense = (): void => {
    const newList = { listName: title, price: price };
    setExpenseList([...expenseList, newList]);
    setTitle("");
    setPrice(0);
  };

  const trashExpense = (expenseToDelete: string): void => {
    setExpenseList(
      expenseList.filter((title) => {
        return title.listName != expenseToDelete;
      })
    );
  };

  function TrashIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex-[0.2]">
          <div className="mr-10">
            <Sidenav />
          </div>
        </div>
        <div className="flex-[0.8]">
          <section className="px-10 py-5 container mx-auto">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-medium text-3xl"
            >
              Expense/Income Information
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              Update your information below.
            </Typography>
            <div className="w-[70%] flex flex-row mt-4 mb-1">
              <div className="flex flex-col items-start gap-4 md:flex-row">
                <div className="w-full md:w-1/2 mr-10">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 font-medium text-1xl"
                  >
                    Title
                  </Typography>
                  <div className="relative">
                    <Input
                      size="lg"
                      placeholder="Shopping, Pay Day, ..."
                      labelProps={{
                        className: "hidden",
                      }}
                      className="w-full placeholder:opacity-100 h-16 text-xl rounded-none"
                      style={{ border: "2px solid #d1d5db", borderRadius: "0" }} // Explicitly setting the border color, width, and removing border radius
                      containerProps={{
                        className: "h-full",
                      }}
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start gap-4 md:flex-row">
                <div className="w-[80%]">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 font-medium text-1xl"
                  >
                    Amount
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="$10, -$150..."
                    labelProps={{
                      className: "hidden",
                    }}
                    className="w-[150px] placeholder:opacity-100 h-16 text-xl rounded-none"
                    style={{ border: "2px solid #d1d5db", borderRadius: "0" }} // Explicitly setting the border color, width, and removing border radius
                    containerProps={{
                      className: "h-full",
                    }}
                    type="number"
                    name="price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button variant="gradient" color="green" onClick={addExpense}>
                Add
              </Button>
            </div>
          </section>

          <div>
            {expenseList.map((expense: IList, key: number) => (
              <div className="p-2" key={key}>
                <Card className="w-96 p-1">
                  <List>
                    <ListItem
                      ripple={false}
                      className="py-1 pr-1 pl-4 border flex justify-center"
                    >
                      <FinaceNote expense={expense} />
                      <ListItemSuffix>
                        <IconButton
                          variant="text"
                          color="blue-gray"
                          onClick={() => {
                            trashExpense(expense.listName);
                          }}
                        >
                          <TrashIcon />
                        </IconButton>
                      </ListItemSuffix>
                    </ListItem>
                  </List>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
