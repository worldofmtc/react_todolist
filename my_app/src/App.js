import React,{useState}  from "react";

function App() {

  const [list,setlist] =useState([]);
  const [input,setInput]=useState("");

  const addTodo= (todo) =>{
    const newTodo={
      id:Math.random(),
      todo:todo
    }
    // todo ya liste ekleme kısmı
    
    setlist([...list,newTodo]);

    //input textboxın içini temizleme

    setInput("");


  };

  const deleteTodo =(id) =>{
    //notun id sine göre filitreleme
    const newList = list.filter((todo)=>todo.id !== id); 

    setlist(newList);
  }
  return(
    <div align="center" > 
      <h1 className="baslik" >ToDo list</h1>
      <br></br>

      <input type="text" value={input} onChange={(e) =>setInput(e.target.value)}/>
      <br></br>
      <br></br>

      <button onClick={()=> addTodo(input)} >add</button>

      <ul>
        {list.map((todo)=>(
          <li key={todo.id}>
            {todo.todo}
            <button onClick={()=> deleteTodo(todo.id )}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App