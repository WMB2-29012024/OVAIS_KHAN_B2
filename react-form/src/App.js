import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent';
import CardComponent from './components/CardComponent'

function App() {
  const [Form, setForm] = useState ("")
  return (
    <div>
      <FormComponent/>
       <CardComponent/>
    </div>
  );
}

export default App;
