import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  //Crear State de citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, setError] = useState(false);

  //Funcion que se ejecuta cuando el ususario escribe un input
  const handleState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario envía el formulario
  const submit = (e) => {
    e.preventDefault();

    ///Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Eiminar el mensaje previo
    setError(false);

    //Asignar un id
    cita.id = uuid();

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alert alert-secondary">
          Todos los ampos son obligatorios
        </p>
      ) : null}

      <form onSubmit={submit}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          type="text"
          id="mascota"
          name="mascota"
          className="form-control mb-3"
          placeholder="Nombre mascota"
          onChange={handleState}
          value={mascota}
        />

        <label htmlFor="propietario">Nombre Dueño</label>
        <input
          type="text"
          id="propietario"
          name="propietario"
          className="form-control mb-3"
          placeholder="Nombre dueño de la mascota"
          onChange={handleState}
          value={propietario}
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="form-control mb-3"
          onChange={handleState}
          value={fecha}
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          className="form-control mb-3"
          onChange={handleState}
          value={hora}
        />

        <label htmlFor="sintomas">Sintomas</label>
        <textarea
          className="form-control mb-5"
          id="sintomas"
          name="sintomas"
          onChange={handleState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="btn btn-block btn-info">
          AGREGAR CITA
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
