import React from 'react';
import propTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const { mascota, propitario, fecha, hora, sintomas } = cita;

    return(
        <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propitario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>

        <button className="btn btn-block btn-info"
            onClick={ () => eliminarCita(cita.id) }>
            Eliminar &times;
        </button>
    </div>
    );
};

Cita.propTypes = {
    cita: propTypes.object.isRequired,
    eliminarCita: propTypes.func.isRequired
}
export default Cita;