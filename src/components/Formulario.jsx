import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [informacionAdicional, setInformacionAdicional] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos ingresados, como enviarlos a un servidor
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo:', correo);
    console.log('Información adicional:', informacionAdicional);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Correo:
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Duda:
        <input
          type="box"
          checked={informacionAdicional}
          onChange={(e) => setInformacionAdicional(e.target.checked)}
          style={styles.input}
        />
      </label>
      <br />
      <button type="submit" style={styles.button}>
        Enviar
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#0E7490',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkbox: {
    marginLeft: '5px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#04B5C0',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Formulario;
