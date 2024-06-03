import './App.css';
import InputComp from './comps/InputComp';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  

    const images = {
      cat: 'https://logowik.com/content/uploads/images/cat8600.jpg',
      dog: 'https://cdn-icons-png.flaticon.com/512/616/616886.png',
      bird: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJBAEnVLZvqVKDtL-oTW8rqzHOVngFmy9Qg&s'
    };

    
    setImageUrl(images[inputValue.toLowerCase()] || '');
  };

  return (
    <div className="App">
      <header className="App-header">
        <InputComp
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          imageUrl={imageUrl}
        />
      </header>
    </div>
  );
}

export default App;
