import { IList } from "./Interface";
import { IconButton, ListItemSuffix } from "@material-tailwind/react";
interface Props {
  expense: IList;
}

const FinaceNote = ({ expense }: Props) => {
  return (
    <div className="p-5 text-center w-[100%]">
      <div className="flex flex-row w-[100%]">
        <div className="flex-[0.5] text-2xl">
          {expense.listName === ""
            ? (expense.listName = "No Name")
            : expense.listName}
        </div>
        <div className="flex-[0.5] text-2xl">${expense.price}</div>
      </div>
    </div>
  );
};

export default FinaceNote;
