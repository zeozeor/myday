
const TodoList = ({todos,onDelete,onToggle}) => {
  if( todos.length === 0 ){
    return <p>할일이 없습니다</p>;
  }
  // ul>li로 만들기
  return (
    <ul className="todolist">
      <p>할일 목록</p>
      {
        todos.map((item,idx)=>{
          //삭제버튼 추가 전 코드 : key={idx}>{item}
          return (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={()=>{onToggle(item.id)}}
            />
            <span
              style={{textDecoration: item.done ? 'line-through':'none'}}>
              {item.todo}
            </span>
            <button onClick={()=>{onDelete(item.id)}}>Ｘ</button>
            </li>
            );
        })
      }
    </ul>
  );
};

export default TodoList;