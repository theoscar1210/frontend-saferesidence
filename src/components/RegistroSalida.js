import React, { useState } from "react";
import axios from "axios";

const RegistroSalida = () => {
  // Definimos el estado para el ID de ingreso y el usuario que registra la salida
  const [idIngreso, setIdIngreso] = useState("");
  const [usuarioSalida, setUsuarioSalida] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    // Verificación simple de que los campos no estén vacíos
    if (!idIngreso || !usuarioSalida) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Hacemos la petición POST al backend para registrar la salida
    axios
      .put(`http://localhost:8080/api/ingresos/salida/${idIngreso}`, {
        usuarioSalida,
      })
      .then((respuesta) => {
        setMensaje("Salida registrada exitosamente.");
        setError("");
      })
      .catch((error) => {
        setError("Hubo un error al registrar la salida.");
        setMensaje("");
      });
  };

  return (
    <div className="container">
      <h2>Registrar Salida</h2>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
          <label>ID de Ingreso</label>
          <input
            type="number"
            className="form-control"
            value={idIngreso}
            onChange={(e) => setIdIngreso(e.target.value)}
            placeholder="Ingrese el ID de ingreso"
          />
        </div>

        <div className="form-group">
          <label>Usuario que registra la salida</label>
          <input
            type="text"
            className="form-control"
            value={usuarioSalida}
            onChange={(e) => setUsuarioSalida(e.target.value)}
            placeholder="Ingrese su nombre"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar Salida
        </button>
      </form>

      {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default RegistroSalida;
