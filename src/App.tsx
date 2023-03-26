import { useState } from 'react';

const App = () => {
  const [name, _] = useState('lol');
  return (
    <h1 className='text-3xl font-bold text-red-900 underline'>
      Hello world! {name}
    </h1>
  );
};

export default App;
