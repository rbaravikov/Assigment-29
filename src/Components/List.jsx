const List = ({ Tasks, remove }) => {
    return (
      <ul id="todo" >
          {Tasks.map((array, index) => (
              <li className="list-item" key={ index }>{array.task}<button onClick={() => remove(index)} className="remove"><i className="fa-solid fa-trash" /></button></li>
          ))}
      </ul>
    )
  }
  
  export default List