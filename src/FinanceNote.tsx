import { IList } from "./Interface";
interface Props {
  list: IList;
}

const FinaceNote = ({ list }: Props) => {
  return (
    <div>
      <div>
        <span>{list.listName}</span>
        <span>{list.price}</span>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default FinaceNote;
