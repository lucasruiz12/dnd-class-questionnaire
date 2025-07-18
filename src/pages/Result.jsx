import React from 'react';
import { useNavigate } from 'react-router';
import { Card, Typography, Button, Divider } from 'antd';

const { Title, Text } = Typography;

const classDescriptions = {
    Barbarian: `Un loco que va al frente con todo, sin dar respiro.  
Pura fuerza bruta, como un toro desbocado en la plaza. Cuando la bronca lo agarra, no hay dragón ni pared que lo pare: pega, grita y arrasa.  
Si sos de los que entran al quilombo sin pensarlo dos veces y tenés el aguante para dejar el campo en ruinas, sos un Barbarian de pura cepa. ¡Ojo, no te pases de rosca o terminás rompiendo más de la cuenta!`,

    Fighter: `El maestro del combate, con espada afilada y cabeza fría.  
No solo le das duro, sino que sabés dónde y cómo pegar. Sos el que planea cada golpe, elige la armadura justa y domina el terreno como un capo.  
En la batalla, todos te miran porque sos puro control y estrategia. Si te gusta afilar el fierro, moverte con precisión y ganar con estilo, sos un Fighter de ley.`,

    Paladin: `El héroe con corazón noble que banca a los suyos.  
Peleás por una causa, con fe y honor, aunque a veces te digan “pesado” por seguir las reglas. Tu fuerza viene de adentro, y tu luz guía al grupo cuando todo se va al carajo.  
Sos el que no se rinde nunca y protege a los demás con espada y convicción. Si peleás por lo justo y no te quiebras, sos un Paladin como los dioses mandan.`,

    Rogue: `El vivo que se mueve en las sombras y siempre cae parado.  
Entrás, salís y hacés de las tuyas sin que te pesquen. Con una daga en la mano y mil trucos bajo la manga, sos más rápido que un bondi en hora pico.  
Te reís del peligro y siempre tenés un plan B (o C). Si preferís el sigilo, la viveza y un buen chamuyo antes que el choque frontal, sos un Rogue de manual.`,

    Bard: `El rey del chamuyo, la guitarreada y la buena onda.  
Donde llegás, armás la fiesta: con una canción, un verso o un cuento, levantás a cualquiera. Tu carisma es un arma letal, capaz de convencer al más duro o distraer al enemigo con un chiste.  
Sos el alma del grupo, siempre con una historia para contar. Si nunca te callás y tenés un verso para todo, sos un Bard que la rompe.`,

    Cleric: `El que cura, protege y, si hace falta, reparte piñas divinas.  
Sos la columna del grupo: sanás heridas, levantás ánimos y, cuando pintan las papas, tirás un golpe bendito que deja temblando. Tu fe es tu fuerza, y sabés usarla tanto para salvar como para castigar.  
Si sos de los que cuidan a la banda y no temen meterse en el quilombo con un dios de respaldo, sos un Cleric de pura cepa.`,

    Wizard: `El nerd que domina la magia con cerebro y paciencia.  
Te quemaste las pestañas estudiando grimorios pesados como ladrillos para manejar poderes que asustan. Sos el que piensa mil pasos adelante, con hechizos precisos y un plan para todo.  
Tu cabeza es tu arma, y la magia es tu arte. Si sos de los que confían en el conocimiento y siempre tienen un as bajo la manga, sos un Wizard como los libros mandan.`,

    Sorcerer: `Puro fuego mágico, sin libreta ni estudio.  
La magia te sale de las venas, como si hubieras nacido con un reactor adentro. Sos impredecible, caótico y poderoso, aunque a veces se te va la mano y armás un quilombo.  
Vivís al límite, tirando hechizos con puro instinto. Si sos de los que improvisan y hacen temblar el suelo sin manual, sos un Sorcerer que no pasa desapercibido.`,

    Warlock: `Firmaste un pacto turbio y ahora manejás poder oscuro.  
Negociaste con algo raro (demonio, bicho cósmico, quién sabe) y te dio magia que asusta. Caminás en la cuerda floja entre luz y sombra, con un aura de misterio que pone nervioso a cualquiera.  
No te importa el qué dirán, porque sabés que el poder tiene su precio. Si no le temés a lo oscuro y te la bancás, sos un Warlock de pura cepa.`,
    Ranger: `El maestro del terreno, un gaucho que conoce cada rincón.  
Sos el que se mueve como pez en el agua en el monte, la ciudad o donde sea. Con arco, trampas o sigilo, cazás lo que sea y siempre estás un paso adelante.  
No hay bicho ni enemigo que te sorprenda, porque vos ya lo viste venir desde la otra punta del bosque. Si te gusta rastrear, explorar y sobrevivir como un vivo, sos un Ranger de pura cepa.`,

    Monk: `Pura disciplina, chi y piñas que pegan como trompada en un bar.  
Sos el que entrena cuerpo y mente para moverse como ninja y golpear como mazo. No necesitás armas pesadas, porque tu cuerpo es un arma y tu calma es letal.  
En el quilombo, sos el que esquiva todo y reparte con estilo. Si vivís para la armonía pero sabés dar un caño cuando hace falta, sos un Monk que la rompe.`,

    Druid: `El amigo de la naturaleza, un hippie con magia salvaje.  
Vivís conectado con el monte, los bichos y los ríos, como si fueras parte del paisaje. Cambiás de forma, llamás tormentas o curás con un toque de magia verde.  
Sos el que protege el equilibrio, pero no te hacés drama si hay que meter un zarpazo. Si sentís la tierra como tu casa y tenés un lado medio loco, sos un Druid de ley.`,
};

const classExamples = {
    Barbarian: [
        "Conan el Bárbaro (de los cómics y películas, un tanque sin freno)",
        "Ragnar Lothbrok (de Vikings, pura furia nórdica)"
    ],
    Fighter: [
        "Aragorn (El Señor de los Anillos, líder y espadachín estratégico)",
        "Kratos (God of War, un guerrero que mezcla fuerza con táctica)"
    ],
    Paladin: [
        "Sir Lancelot (de las leyendas artúricas, el caballero con honor)",
        "Joan of Arc (figura histórica, pura fe y coraje en la batalla)"
    ],
    Rogue: [
        "Garrett (de Thief, maestro del sigilo y el hurto)",
        "Ezio Auditore (de Assassin’s Creed, letal y astuto)"
    ],
    Bard: [
        "Jaskier (de The Witcher, el trovador que conquista con canciones)",
        "Pippin (El Señor de los Anillos, el hobbit con historias y carisma)"
    ],
    Cleric: [
        "Tyrande Whisperwind (de World of Warcraft, sanadora y guerrera divina)",
        "Father Karras (de Outlast 2, con fe intensa, aunque medio creepy)"
    ],
    Wizard: [
        "Gandalf (El Señor de los Anillos, sabio y mago estratégico)",
        "Hermione Granger (Harry Potter, la nerd que domina los hechizos)"
    ],
    Sorcerer: [
        "Dr. Strange (de Marvel, puro poder místico sin tanto estudio)",
        "Elsa (de Frozen, magia innata que sale de adentro)"
    ],
    Warlock: [
        "Geralt de Rivia (de The Witcher, con un toque oscuro y pactos raros)",
        "Megumin (de Konosuba, magia explosiva con un vibe medio turbio)"
    ],
    Ranger: [
        "Legolas (El Señor de los Anillos, arquero y rastreador impecable)",
        "Daryl Dixon (The Walking Dead, sobrevive y caza como nadie)"
    ],
    Monk: [
        "Aang (Avatar: The Last Airbender, maestro de la agilidad y el equilibrio)",
        "Bruce Lee (iconos de artes marciales, puro chi y velocidad)"
    ],
    Druid: [
        "Radagast (El Señor de los Anillos, el mago que vive con los bichos)",
        "Nausicaä (de Nausicaä del Valle del Viento, conectada con la naturaleza)"
    ]
};


const Result = () => {
    const navigate = useNavigate();

    const name = localStorage.getItem('dndUserName') || 'Aventurero';
    const dndClass = localStorage.getItem('dndClass') || 'Sin definir';

    const handleRestart = () => {
        localStorage.removeItem('dndClass');
        localStorage.removeItem('dndUserName');
        navigate('/');
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white p-3"
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
                    maxWidth: 600,
                    width: '90%',
                    padding: '2rem',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    border: '2px solid #a57c00',
                    borderRadius: '16px',
                    fontFamily: 'Georgia, serif'
                }}
            >
                <Title level={2} style={{ color: '#f0e68c' }}>
                    ¡Felicidades, {name}!
                </Title>
                <Text style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem', color: 'white' }}>
                    Terminaste el test. <br />
                    Tu clase ideal es <b>{dndClass}</b>.
                </Text>
                <Text style={{ fontStyle: 'italic', color: '#ccc', marginBottom: '1.5rem', display: 'block' }}>
                    {classDescriptions[dndClass] || 'Este camino es tan único como vos.'}
                </Text>
                <Divider style={{ borderColor: '#a57c00', color: 'white' }}>Personajes Famosos</Divider>

                <ul style={{ textAlign: 'left', color: '#f0e68c', marginBottom: '1.5rem', listStyle: 'none' }}>
                    {(classExamples[dndClass] || []).map((example, i) => (
                        <li className='my-4' key={i}>{example}</li>
                    ))}
                </ul>
                <Button
                    type="primary"
                    size="large"
                    onClick={handleRestart}
                    style={{
                        backgroundColor: '#a57c00',
                        borderColor: '#a57c00',
                        fontWeight: 'bold',
                    }}
                >
                    Volver a empezar, bestia
                </Button>
            </Card>
        </div>
    );
};

export default Result;
