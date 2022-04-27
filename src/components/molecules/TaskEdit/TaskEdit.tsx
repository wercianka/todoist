import { useState } from "react";

import { useAppDispatch } from "store/hooks";
import { deactivateTaskEditMode, editTask } from "features/todo/todoSlice";
import disableScroll from "disable-scroll";

import * as S from "./styles";

interface TaskEditProps {
  content: string;
  id: string;
}

const TaskEdit = ({ content, id }: TaskEditProps) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(content);

  const handleEndEditing = () => {
    dispatch(
      editTask(id, {
        content: text,
      })
    );
    disableScroll.off();
  };

  const handleCancelEdit = () => {
    dispatch(deactivateTaskEditMode());
    disableScroll.off();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  disableScroll.on();

  return (
    <>
      <S.Backdrop onClick={handleEndEditing}></S.Backdrop>
      <S.EditContainer>
        <S.EditInput
          type="text"
          value={text}
          maxLength={200}
          onChange={handleTextChange}
          autoFocus
        />
        <button onClick={handleCancelEdit}>
          <S.GreyCrossIcon />
        </button>
      </S.EditContainer>
    </>
  );
};

export default TaskEdit;
