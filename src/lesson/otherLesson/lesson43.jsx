import { useState } from "react";

const Lesson43=()=> {
  let state = { name: 'Иван', age: 25 };
  let [isShow, setShow]=useState(false)
  const toggle = () => setShow(!isShow);

  return (
    <div className='block' >
      <button onClick={() => toggle()}>{isShow?' Убрать': 'Показать'}</button>
      {isShow &&
        <p>{`Имя ${state.name} , возраст ${state.name}`}</p>
      }
     
     
    </div>
  );
}
export default Lesson43;
