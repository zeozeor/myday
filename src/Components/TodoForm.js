import { useState } from "react";

const TodoForm = ({onAdd}) => {
  const [task,setTask] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    const trimmed = task.trim();
    if( trimmed ){
      //할일 텍스트를 mainpage(부모)에 전달
      onAdd(task);
      setTask('');
    }
  }
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input 
      type="text"
      value={task}
      onChange={(e)=>{setTask(e.target.value)}}
      placeholder="할일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;