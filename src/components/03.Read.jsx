import { useDispatch, useSelector } from "react-redux";
import { fetchGetPosts } from "../redux/modules/postSlice";
import { useEffect } from "react";
import styled from "styled-components";
import Update from "./04.Update";
import Delete from "./05.Delete";

const Read = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  const post = useSelector((state) => {
    return state.post.posts;
  });

  return (
    <div>
      <h1>working💕</h1>
      {post
        .filter((post) => !post.isDone)
        .map((post) => (
          <TodoCard key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <Delete id={post.id} />
            <Update id={post.id}>완료</Update>
          </TodoCard>
        ))}

      <h1>Done🎉</h1>
      {post
        .filter((post) => post.isDone)
        .map((post) => (
          <TodoCard key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <Delete id={post.id} />
            <Update id={post.id}>취소</Update>
          </TodoCard>
        ))}
    </div>
  );
};

export default Read;

const TodoCard = styled.div`
  width: 320px;
  height: 160px;
  border: 2px solid yellowgreen;
  border-radius: 20px;
  margin: 10px;
`;
