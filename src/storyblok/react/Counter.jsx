import React, { useState } from 'react';

const Counter=() => {
  const [count, setCount] = useState(0 ); 
  const[display,setdisplay]=useState(false)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
<>
    {count<1?<button onClick={increment} class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>:
    <div class="flex items-center space-x-2">
		<button onClick={decrement} class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
		<span class="text-lg font-semibold">{count}</span> 
		<button onClick={increment} class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
		</div>}

</>
  );
};

export default Counter;
