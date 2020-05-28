import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if( !citasIniciales ){
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    if( citasIniciales ){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales] );

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //Eliminar citas
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    setCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas'
  if( citas.length === 0 ){

  }

  return (
    <Fragment>
      <h1>Administrador de citas</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg">
            <Formulario crearCita={crearCita}></Formulario>
          </div>
          <div className="col-lg">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita 
                key={cita.id} 
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
