import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Block() {

  let list = useRef();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count + 1) % 3);
    let element = list.current;
    element.childNodes[count].textContent = 'delivered';
  }

  return (
    <div className='wrapper'>
      <ul ref={list}>
        <li>inprogress</li>
        <li>inprogress</li>
        <li>inprogress</li>
      </ul>
      <button onClick={handleClick}>Special button</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Block />
  </React.StrictMode>
);


