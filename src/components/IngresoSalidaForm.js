import React, { useState } from "react";

const IngresoSalidaForm = () => {
  const [cedula, setCedula] = useState("");
  const [tipo, setTipo] = useState("ingreso");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Cédula: ${cedula}, Tipo: ${tipo}`);
    // Aquí iría la conexión al backend con fetch o axios
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Ingreso / Salida</h2>

      <div>
        <label>Cédula:</label>
        <input
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="ingreso">Ingreso</option>
          <option value="salida">Salida</option>
        </select>
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default IngresoSalidaForm;
