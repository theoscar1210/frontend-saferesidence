import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistroIngreso = () => {
  // Estado para almacenar los campos del formulario
  const [formulario, setFormulario] = useState({
    identificacion: "",
    nombres: "",
    apellidos: "",
    tipoIngreso: "",
    apartamento: "",
    personasAsociadas: "",
    placaVehiculo: "",
    registradoPorIngreso: "", // Este campo se completa automáticamente
    observaciones: "",
  });

  // Obtener el usuario registrado (esto puede variar según cómo manejes la autenticación)
  useEffect(() => {
    // Suponiendo que tienes un método que obtiene el usuario autenticado
    const usuario = localStorage.getItem("usuarioLogueado"); // O desde tu contexto global, o una llamada API
    setFormulario((prevState) => ({
      ...prevState,
      registradoPorIngreso: usuario || "Desconocido", // Si no hay usuario, asigna "Desconocido"
    }));
  }, []);

  // Manejar cambios en los campos
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/ingresos/registrar",
        formulario
      );

      alert("Ingreso registrado exitosamente");

      // Limpiar formulario
      setFormulario({
        identificacion: "",
        nombres: "",
        apellidos: "",
        tipoIngreso: "",
        apartamento: "",
        personasAsociadas: "",
        placaVehiculo: "",
        registradoPorIngreso: "", // Resetear el campo registradoPorIngreso
        observaciones: "",
      });
    } catch (error) {
      console.error("Error registrando el ingreso:", error);
      alert("Hubo un problema al registrar el ingreso.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Registrar Ingreso</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identificacion"
          placeholder="Identificación"
          value={formulario.identificacion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={formulario.nombres}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={formulario.apellidos}
          onChange={handleChange}
          required
        />
        <select
          name="tipoIngreso"
          value={formulario.tipoIngreso}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione el tipo de ingreso</option>
          <option value="visitante">Visitante</option>
          <option value="propietario">Propietario</option>
        </select>
        <input
          type="text"
          name="apartamento"
          placeholder="Apartamento"
          value={formulario.apartamento}
          onChange={handleChange}
        />
        <input
          type="text"
          name="personasAsociadas"
          placeholder="Personas Asociadas"
          value={formulario.personasAsociadas}
          onChange={handleChange}
        />
        <input
          type="text"
          name="placaVehiculo"
          placeholder="Placa del Vehículo"
          value={formulario.placaVehiculo}
          onChange={handleChange}
        />

        {/* Campo oculto para "Registrado por" */}
        <input
          type="hidden"
          name="registradoPorIngreso"
          value={formulario.registradoPorIngreso}
        />

        <textarea
          name="observaciones"
          placeholder="Observaciones"
          value={formulario.observaciones}
          onChange={handleChange}
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroIngreso;
