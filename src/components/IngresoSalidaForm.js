import React, { useState } from "react";
import axios from "axios";

const RegistroIngreso = () => {
  // Estado para almacenar los valores del formulario
  const [formulario, setFormulario] = useState({
    identificacion: "",
    nombres: "",
    tipoIngreso: "",
    apartamento: "",
    registradoPorIngreso: "",
    observaciones: "",
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST
      await axios.post(
        "http://localhost:8080/api/ingresos/registrar",
        formulario
      );
      alert("Ingreso registrado exitosamente");

      // Reinicia los valores del formulario
      setFormulario({
        identificacion: "",
        nombres: "",
        tipoIngreso: "",
        apartamento: "",
        registradoPorIngreso: "",
        observaciones: "",
      });
    } catch (error) {
      console.error("Error registrando el ingreso:", error);
      alert(
        "Hubo un problema al registrar el ingreso. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Registrar Ingreso</h2>
      <form onSubmit={handleSubmit}>
        {/* Identificación */}
        <input
          name="identificacion"
          placeholder="Identificación"
          value={formulario.identificacion}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Nombres */}
        <input
          name="nombres"
          placeholder="Nombres"
          value={formulario.nombres}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Tipo de Ingreso */}
        <input
          name="tipoIngreso"
          placeholder="Tipo de Ingreso (visitante, residente...)"
          value={formulario.tipoIngreso}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Apartamento */}
        <input
          name="apartamento"
          placeholder="Apartamento"
          value={formulario.apartamento}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Registrado por */}
        <input
          name="registradoPorIngreso"
          placeholder="Registrado por"
          value={formulario.registradoPorIngreso}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Observaciones */}
        <textarea
          name="observaciones"
          placeholder="Observaciones"
          value={formulario.observaciones}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        ></textarea>
        {/* Botón para registrar */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistroIngreso;
