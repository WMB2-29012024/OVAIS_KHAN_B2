import TextComponent from './components/TextComponent';
import InputComponent from './components/InputComponent';
import { useState } from 'react';

function App() {
  const [InputText, setInputText] = useState ("Hello World")
  return (
    <div className="App">
      <InputComponent setInputText={setInputText}/>
      <TextComponent InputText={InputText}/>
    </div>
  );
}

export default App;
