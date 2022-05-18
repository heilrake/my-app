import { useState } from "react";

const Lesson46=()=> {
  const hrefs= [
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
  ]
const list = hrefs.map((item,index)=>{
  return <li key={index}><a href={item.href}> {item.text}</a></li>
})

  return (
    <div className='block' >
      <ul></ul>
     
     
    </div>
  );
}
export default Lesson46;
