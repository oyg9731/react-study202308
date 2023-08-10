import React from 'react';
import './App.css';

function App() {
  // const $h2 = React.createElement('h2', null, '반가워요~~~')
  const $h2 = <h2>반가워요</h2>;
  return (
    <>
      <div className="App">
        <h1>빵빵뿌슝</h1>
        {$h2}
      </div>
      <div className="noname">
        <p>
          <input type='text' /><br/>
          오늘은 태풍이 와서 비가 많이 내렸다.<br/>
          그래서 공부가 싫다.
        </p>
      </div>
    </>
  );
}

export default App;
