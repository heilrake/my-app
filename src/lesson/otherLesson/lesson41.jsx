const Lesson41=()=> {
   let state = { show: true, name: 'Иван' };
  
  return (
    <div className='block' >
      <p>{state.show ? ` Привет ${state.name} ` : `Пока ${state.name}`}</p>
    </div>
  );
}
export default Lesson41;
