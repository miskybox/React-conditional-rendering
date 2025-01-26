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
    englishContent: `
   If/Else Statements**: For straightforward condition checks.
   Ternary Operators**: For compact and inline conditions.
   Logical Operators**: Use && or || for simpler logic.
   Switch Statements**: Ideal for multiple conditions.
`,
    subtitle: "Métodos para Renderización Condicional",
    spanishContent: `
    If/Else**: Para comprobaciones de condiciones directas.
    Operadores ternarios**: Para condiciones compactas y en línea.
    Operadores lógicos**: Usa && o || para lógica simple.
    Sentencias Switch**: Ideales para múltiples condiciones.
    `,
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
    title: "Best Practices",
    englishContent: `
    Keep conditionals simple:** Avoid overly complex conditions for better readability and maintainability.
    Use constants for boolean values:** Improves clarity and makes the code easier to debug.
    Test conditional logic thoroughly:** Ensure all scenarios are covered to prevent unexpected behavior.
    `,
    subtitle: "Mejores Prácticas",
    spanishContent: `
   Mantén las condicionales simples:** Evita condiciones excesivamente complejas para mejorar la legibilidad y mantenibilidad.
   Usa constantes para valores booleanos:** Mejora la claridad y facilita la depuración del código.
   Prueba la lógica condicional exhaustivamente:** Asegúrate de cubrir todos los escenarios para evitar comportamientos inesperados.
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
    src: "./assets/pokeDog1.png",
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
