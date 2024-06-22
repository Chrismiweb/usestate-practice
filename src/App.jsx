import logo from './logo.svg';
import './App.css';
import Counter from './component/counter/Counter';
import Text from './component/TextUpdatte/Text';
import Toggle from './component/textToggle/Toggle';
import Textarea from './component/textareaCounter/Textarea';
import { useState } from 'react';
import TodoList from './component/todollist/TodoList';
import Btn from './component/btn/Btn';
import Debug from './component/debug/debug';

function App() {
  
  return (
    <div>
        {/* <Counter/> */}
        {/* <Text/> */}
        {/* <Toggle/> */}
        {/* <Textarea/> */}
        {/* <TodoList/> */}
        {/* <Btn/> */}
        <Debug/>
    </div>
  );
}

export default App;
