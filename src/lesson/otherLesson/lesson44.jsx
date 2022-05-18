import { useState } from "react";

const Lesson44=()=> {
const name =['Коля','Вася',"Петя"]
const list = name.map((item,index)=>{
  return <li key ={index}>{item}</li>
})

  return (
    <div className='block' >
      <ul>{list}</ul>
     
     
    </div>
  );
}
export default Lesson44;
