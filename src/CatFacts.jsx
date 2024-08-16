import React, { useEffect, useState } from 'react';

const CatFacts = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  // Função para buscar um novo fato
  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Failed to fetch cat fact:", error);
    } finally {
      setLoading(false);
    }
  };

  // Busca um fato ao montar o componente
  useEffect(() => {
    fetchCatFact();
  }, []);

  // Estilos em linha
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '600px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const outerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '15px',
  };

  const factStyle = {
    fontSize: '1.25rem',
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: '#333',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  // Lógica para alterar o estilo do botão quando o cursor está sobre ele
  const [buttonStyleState, setButtonStyleState] = useState(buttonStyle);

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Fato aleatório de Gatos</h1>
        {loading ? (
          <div style={loadingStyle}>Carregando...</div>
        ) : (
          <p style={factStyle}>{fact}</p>
        )}
        <button
          style={buttonStyleState}
          onClick={fetchCatFact}
          onMouseEnter={() => setButtonStyleState(buttonHoverStyle)}
          onMouseLeave={() => setButtonStyleState(buttonStyle)}
        >
          Novo Fato
        </button>
      </div>
    </div>
  );
};

export default CatFacts;
