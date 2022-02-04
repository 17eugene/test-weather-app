import { IoIosClose } from "react-icons/io";

function CloseBtn({ className, deleteCard }) {
  return (
    <>
      <button onClick={deleteCard} className={className} type="button">
        <IoIosClose size="30" />
      </button>
    </>
  );
}

export default CloseBtn;
