import React from 'react';

const Main = ( { history } ) => {

    return (
        <div>
            <h3><strong> Recent </strong></h3>
            <h3> Task List </h3>
            <button onClick={ () => {history.push("/add")} }> Add </button>
            {/* <button onClick={ () => {history.goBack()} }> Add </button> */}

        </div>
    );
}

export default Main;