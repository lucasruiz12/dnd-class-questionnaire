import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input, Button, Typography, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Title, Text } = Typography;

const Landing = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('dndUserName', name);
      navigate('/quiz');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
      style={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/85/36/4of9Nu.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Card
        className="text-center"
        style={{
          maxWidth: 500,
          width: '90%',
          padding: '2rem',
          backgroundColor: 'rgba(0,0,0,0.75)',
          border: '2px solid #a57c00',
          borderRadius: '16px',
        }}
      >
        <Title level={2} style={{ color: '#f0e68c', fontFamily: 'Georgia, serif' }}>
          Bienvenido, valiente aventurer@
        </Title>
        <Text style={{ color: '#ddd' }}>
          Antes de comenzar tu camino, dinos cómo te llaman...
        </Text>
        <Input
          placeholder="Tu nombre de héroe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="my-3"
          size="large"
        />
        <Button
          type="primary"
          size="large"
          onClick={handleStart}
          disabled={!name.trim()}
          style={{
            backgroundColor: '#a57c00',
            borderColor: '#a57c00',
            fontWeight: 'bold',
          }}
        >
          Comencemos la aventura
        </Button>
      </Card>
    </div>
  );
};

export default Landing;
