import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" />
        <label htmlFor="ciudad">Ciudad</label>
      </div>

      <div className="input-field col s12">
        <select className="browser-default" name="pais" id="pais">
          <option value="" defaultValue="Escoge un país">
            --Selecciona un país--
          </option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};

export default Formulario;
