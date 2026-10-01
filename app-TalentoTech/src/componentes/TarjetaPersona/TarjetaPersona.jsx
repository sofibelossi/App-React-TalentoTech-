import Persona from '../Persona/Persona';


function TarjetaPersona() {
  const personas = [
    {nombre: 'Sofia Belossi', tarea: 'Jefa', emoji: '👨‍💻​'},
    {nombre: 'Génesis Góngora', tarea: 'Diseñadora', emoji: '🎨'},
    {nombre: 'Julieta Pavón', tarea: 'Vendedora', emoji: '👨‍💻​'},
  ];
  return (
    <div className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
      {personas.map((persona, index) => (
        <Persona
        key={index}
        {...persona} //version con spread operator que funciona igual
        />
      ))}
    </div>
  );
    
}

export default TarjetaPersona;