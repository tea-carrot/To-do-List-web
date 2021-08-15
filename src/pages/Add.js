import React from 'react';

const Form = ({history, value, onChange, onCreate, onKeyPress}) => {
    return (
      <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <button onClick={ () => {history.push("/main")}}>
          추가
        </button>
      </div>
    );
  };

  export default Form;