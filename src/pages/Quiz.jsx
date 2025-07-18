import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, Typography, Button } from 'antd';
import questionTree from '../data/questionTree';
import './Quiz.css';

const { Title } = Typography;

const Quiz = () => {
  const [currentId, setCurrentId] = useState("1");
  const navigate = useNavigate();

  const currentNode = questionTree.find(node => node.id === currentId);

  if (!currentNode) return <div>Pregunta no encontrada</div>;

  const handleOptionClick = (option) => {
    if (option.nextId) {
      setCurrentId(option.nextId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentNode.result) {
      // Si estamos en nodo final con clase definida, vamos al resultado
      localStorage.setItem('dndClass', currentNode.result);
      navigate('/result');
    }
  };

  // Si es nodo final (tiene class) mostramos solo un botón para ir al resultado
  if (currentNode.result) {
    return (
      <div className="quiz-container d-flex justify-content-center align-items-center bg-dark text-white p-3">
        <Card
          className="quiz-card"
          style={{
            maxWidth: 600,
            width: '100%',
            padding: '2rem',
            backgroundColor: 'rgba(0,0,0,0.8)',
            border: '2px solid #a57c00',
            borderRadius: '16px',
            fontFamily: 'Georgia, serif',
          }}
        >
          <Title level={3} style={{ color: '#f0e68c' }}>
            {currentNode.question}
          </Title>

          <Button
            size="large"
            onClick={() => {
              localStorage.setItem('dndClass', currentNode.result);
              navigate('/result');
            }}
            style={{
              backgroundColor: '#a57c00',
              borderColor: '#a57c00',
              color: '#fff',
              fontWeight: 'bold',
              marginTop: '2rem',
            }}
            block
          >
            Ver Resultado
          </Button>
        </Card>
      </div>
    );
  }

  // Nodo intermedio con opciones para elegir
  return (
    <div className="quiz-container d-flex justify-content-center align-items-center bg-dark text-white p-3">
      <Card
        className="quiz-card"
        style={{
          maxWidth: 600,
          width: '100%',
          padding: '2rem',
          backgroundColor: 'rgba(0,0,0,0.8)',
          border: '2px solid #a57c00',
          borderRadius: '16px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <Title level={3} style={{ color: '#f0e68c' }}>
          {currentNode.question}
        </Title>

        <div className="d-grid gap-3 mt-4">
          {currentNode.options.map((option, index) => (
            <Button
              key={index}
              size="large"
              onClick={() => handleOptionClick(option)}
              style={{
                backgroundColor: '#a57c00',
                borderColor: '#a57c00',
                color: '#fff',
                fontWeight: 'bold',
                whiteSpace: 'normal',
                padding: '2.5rem'
              }}
              block
            >
              {option.text}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Quiz;
