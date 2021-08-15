import React from 'react';

const Start = ( { history } ) => {

    return (
        <div>
            <h3> TO-DO LIST </h3>
            <button onClick={ () => {history.push("/main")}}> Get start!! </button>
        </div>
    );
}

export default Start;