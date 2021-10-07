import React from 'react'

const Titulo = ({nombre}) => {
    return (
        <div className="col-lg-12 p-2 justify-content-center">
            <h2 className="titulo">{nombre}</h2>
        </div>
    );
}

export default Titulo;