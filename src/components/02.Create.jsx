import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchCreatePosts } from "../redux/modules/postSlice";
import { postTodo } from "../redux/modules/postSlice";

const Create = () => {
  const dispatch = useDispatch();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      title: event.target.title.value,
      body: event.target.body.value,
      isDone: false,
    };

    dispatch(fetchCreatePosts(todo));
    dispatch(postTodo(todo));

    event.target.title.value = "";
    event.target.body.value = "";
  };
  return (
    <InputBox>
      <form onSubmit={onSubmitHandler}>
        <span>
          <label>제목</label>
          <input id="title" type="text" required />
          <label>내용</label>
          <input id="body" type="text" required />
        </span>
        <input type="submit" value="추가하기" />
      </form>
    </InputBox>
  );
};

export default Create;

const InputBox = styled.div`
  border: 1px solid green;
  background-color: teal;
  width: 1000px;
  height: 60px;
  margin-top: 10px;
`;
