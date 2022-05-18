import { useState } from "react";

const Lesson42=()=> {
  let state = { name: 'Иван', age: 25 };
  let [isShow, setShow]=useState(false)

  return (
    <div className='block' >
      <button onClick={()=>setShow(true)}> button me</button>
      {isShow &&
        <p>{`Имя ${state.name} , возраст ${state.name}`}</p>
      }
     
     
    </div>
  );
}
export default Lesson42;
