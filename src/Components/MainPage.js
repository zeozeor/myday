import { useEffect, useState } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const MainPage = ({user,onLogout}) => {
  const TODOS_KEY = "todos";
  const [todos,setTodos] = useState([]);
  // 처음 localstorage에 저장된 todos값이 있으면 읽어와서 설정
  useEffect(()=>{
    const saved = localStorage.getItem(TODOS_KEY);
    if( saved ){
      setTodos(JSON.parse(saved)); //문자열을 객체로
    }
  },[]);
  //todos가 변경되면 localstorage에 저장
  useEffect(()=>{
    const saved = JSON.stringify(todos); //객체를 문자열로
    localStorage.setItem(TODOS_KEY,saved);
  },[todos]);

  const addTodo = (text)=>{
    /**
     * 특정 삭제를 위해 변경되는 것
     * todo { id:현재시간 Date.now(), text}
     */
    const newTodo = {id:Date.now(), todo:text, done:false}; // text 에서 객체{}로 id 삽입 수정
    setTodos([...todos,newTodo]);
  }
  // TodoList의 삭제 정보를 가져와서 적용
  const deleteTodo = (id)=>{
    const update = todos.filter((item)=>{
      return item.id !== id;
    });
    setTodos(update);
  }
  const toggleTodo = (id)=>{
    const update = todos.map((item)=>{
      return item.id === id ? {...item, done:!item.done} : item;
    });
    setTodos(update);
  }
  return (
    <div>
      <div className="main-box">
        {/* { 홍길동님, 반가워요 } */}
        <h2>{user}</h2>
        <button onClick={onLogout}>←</button>
      </div>
      <Quote />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/>
    </div>
  );
};

export default MainPage;