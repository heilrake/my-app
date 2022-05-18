import { useState } from "react";

const Lesson45=()=> {
const name =['Коля','Вася',"Петя"]
const list = name.map((item,index)=>{
  return <li key ={index}>{item} - {index+1}</li>
})

  return (
    <div className='block' >
      <ul>{list}</ul>
     
     
    </div>
  );
}
export default Lesson45;
