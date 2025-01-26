//carousel.jsx
import React, { useState } from "react";
import Slide from "../slides/Slide";
import "./Carousel.css";

const slides = [
  {
    title: "What is Conditional Rendering?",
    englishContent: `
      Conditional rendering in React means rendering components or elements based on a condition. 
      It allows you to show or hide different parts of a user interface based on certain conditions.
    `,
    subtitle: "¿Qué es la renderización condicional?",
    spanishContent: `
      La renderización condicional en React significa renderizar componentes o elementos según una condición. 
      Permite mostrar u ocultar diferentes partes de una interfaz de usuario en función de ciertas condiciones.
    `,
  },
  {
    title: "Why Use Conditional Rendering?",
    englishContent: `
       Dynamic user interfaces: Create richer, more personalized user experiences by adapting the interface to user actions or the data being displayed.
       Performance optimization: Avoid rendering unnecessary components, improving your application's speed and efficiency.
       Error handling: You can show error messages or loaders conditionally, providing a better user experience.
    `,
    subtitle: "¿Por qué usar la renderización condicional?",
    spanishContent: `
       Interfaces de usuario dinámicas: Crea experiencias de usuario más ricas y personalizadas adaptando la interfaz a las acciones del usuario o a los datos que se están mostrando.
       Optimización del rendimiento: Evita renderizar componentes innecesarios, mejorando la velocidad y eficiencia de tu aplicación.
      Manejo de errores: Puedes mostrar mensajes de error o cargadores de manera condicional, brindando una mejor experiencia al usuario.
    `,
  },
  {
    title: "Methods for Conditional Rendering",
    englishContent:
      "Includes If/Else, Ternary Operators, Logical Operators (&&, ||), and Switch Statements.",
    subtitle: "Métodos para Renderización Condicional",
    spanishContent:
      "Incluye If/Else, Operadores Ternarios, Operadores Lógicos (&&, ||) y Sentencias Switch.",
  },
  {
    title: "If/Else Statement",
    englishContent:
      "If-else statements are a straightforward way to handle conditional logic.",
    subtitle: "Uso de If/Else",
    spanishContent:
      "Las sentencias if-else son una forma directa de manejar la lógica condicional.",
    codeExample: `
function Example(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}`,
  },
  {
    title: "Ternary Operator",
    englishContent:
      "The ternary operator allows for more compact conditional statements.",
    subtitle: "Operador Ternario",
    spanishContent:
      "El operador ternario permite escribir condicionales de forma más compacta.",
    codeExample: `
function Example(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}`,
  },
  {
    title: "Logical AND (&&)",
    englishContent:
      "The && operator can be used to show content only if a condition is true.",
    subtitle: "Operador Lógico (&&)",
    spanishContent:
      "El operador && se puede usar para mostrar contenido solo si una condición es verdadera.",
    codeExample: `
function Example(props) {
  return (
    <div>
      {props.isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}`,
  },
  {
    title: "Sentencias Switch",
    englishContent:
      "Switch statements are useful when handling multiple conditions.",
    subtitle: "Sentencias Switch",
    spanishContent:
      "Las sentencias switch son útiles cuando se manejan múltiples condiciones.",
    codeExample: `
function Example(props) {
let message;

switch (props.userType) {
  case 'admin':
    message = <h1>Welcome, Admin!</h1>;
    break;
  case 'user':
    message = <h1>Welcome, User!</h1>;
    break;
  default:
    message = <h1>Welcome, Guest!</h1>;
    break;
}
return message;
}`,
  },
  {
    title: "Render Props",
    englishContent:
      "Render props are functions passed as props that control how content is rendered.",
    subtitle: "Render Props",
    spanishContent:
      "Las render props son funciones pasadas como props que controlan cómo se renderiza el contenido.",
    codeExample: `
function ConditionalRender(props) {
  return props.render(props.isLoggedIn);
}

function Example(props) {
  return (
    <ConditionalRender
      isLoggedIn={props.isLoggedIn}
      render={(isLoggedIn) => (
        isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>
      )}
    />
  );
}`,
  },
  {
    title: "Use the React Hooks",
    englishContent: "Hooks simplify state management and conditional logic.",
    subtitle: "Uso de React Hooks",
    spanishContent:
      "Los hooks simplifican el manejo del estado y lógica condicional.",
    codeExample: `
import React, { useState } from 'react';

function Example() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}`,
  },
  {
    title: "Best Practices",
    englishContent: `
      "Keep conditionals simple",
      "Use constants for boolean values",
      "Test conditional logic thoroughly"
    `,
    subtitle: "Mejores Prácticas",
    spanishContent: `
      "Mantén las condicionales simples",
      "Usa constantes para valores booleanos",
      "Prueba la lógica condicional exhaustivamente", 
    `,
  },
  {
    title: "Thank you!",
    englishContent:
      "For more details, visit the official React documentation on Conditional Rendering.",
    subtitle: "¡Gracias!",
    spanishContent:
      "Para más detalles, visita la documentación oficial de React sobre Renderización Condicional.",
    link: "https://es.react.dev/learn/conditional-rendering",
    src: "./assets/poke.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div className="carousel-container">
        <Slide {...slides[currentIndex]} />
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button">
          Previous
        </button>
        <button onClick={nextSlide} className="carousel-button">
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
