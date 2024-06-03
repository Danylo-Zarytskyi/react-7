import React from 'react';

const InputComp = ({ imageUrl, inputValue, onInputChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        {imageUrl && <img src={imageUrl} style={{width: '150px', height: '150px'}} />}
        <input type="text" value={inputValue} onChange={onInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputComp;
