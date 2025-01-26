# React + Vite


### Slide 1: Introduction to Conditional Rendering

- Definition: Rendering content based on certain conditions
- Importance in UI development
- Examples in web and mobile apps

### Slide 2: Types of Conditional Rendering

- Client-side rendering
- Server-side rendering  
- Hybrid approaches

### Slide 3: React Conditional Rendering

- Using ternary operator
- Logical AND/OR operators
- Inline conditionals

```jsx
{condition ? <Component1 /> : <Component2 />}
```

### Slide 4: Conditional Class Names

- Adding classes conditionally
- Using template literals

```jsx
<div className={`class1 ${condition ? 'class2' : ''}`}>Content</div>
```

### Slide 5: Conditional Styling

- Applying styles conditionally
- Using inline styles or styled-components

```jsx
<div style={{color: condition ? 'red' : 'blue'}}>Text</div>
```

### Slide 6: Conditional Rendering in Lists

- Filtering items
- Mapping conditionally

```jsx
{items.filter(item => condition).map(item => (
  <li>{item.name}</li>
))}
```

### Slide 7: Conditional Rendering in Forms

- Showing/hiding form fields
- Enabling/disabling inputs

```jsx
<form>
  {showField && <input type="text" disabled={!enableInput} />}
</form>
```

### Slide 8: Conditional Rendering in APIs

- Fetching data conditionally
- Handling API errors

```jsx
useEffect(() => {
  if (shouldFetchData) {
    fetchData()
  }
}, [])
```

### Slide 9: Performance Considerations

- Avoiding unnecessary re-renders
- Memoization techniques

### Slide 10: Best Practices

- Keeping conditionals simple
- Using constants for boolean values
- Testing conditional logic

### Slide 11: Conclusion

- Recap of key concepts
- Examples in English and Spanish
- Next steps in learning conditional rendering

This outline covers the main aspects of conditional rendering with code examples in React. You can expand on each slide as needed and add more specific examples tailored to your project's requirements. The presentation includes both English and Spanish examples to meet your request.

 **renderización condicional en React**. 

---

### **Estructura Ordenada de las Slides:**

1. **Título:**
   - **EN**: *Conditional Rendering in React*
   - **ES**: *Renderización Condicional en React*
   - (Breve descripción introductoria del tema)

---

2. **Introducción:**
   - **EN**: *What is Conditional Rendering?*
   - **ES**: *¿Qué es la Renderización Condicional?*
   - Explicación del concepto básico.
   - Ejemplo: Mostrar una página de inicio de sesión o panel de usuario basado en autenticación.

---

3. **Por qué usar Renderización Condicional:**
   - **EN**: *Why Use Conditional Rendering?*
   - **ES**: *¿Por qué usar Renderización Condicional?*
   - Importancia de tomar decisiones dinámicas en la interfaz de usuario.

---

4. **Métodos principales en React (resumen):**
   - **EN**: *Methods for Conditional Rendering*
   - **ES**: *Métodos para Renderización Condicional*
   - Introducción a:
     - If/Else
     - Operadores ternarios
     - Operadores lógicos `&&` y `||`
     - `Switch` statements

---

5. **If/Else Statement:**
   - **EN**: *Using If/Else for Conditional Rendering*
   - **ES**: *Uso de If/Else para Renderización Condicional*
   - Ejemplo de código:

     ```jsx
     function Example(props) {
       if (props.isLoggedIn) {
         return <h1>Welcome back!</h1>;
       } else {
         return <h1>Please log in.</h1>;
       }
     }
     ```

---

6. **Operador Ternario:**
   - **EN**: *Ternary Operator for Compact Syntax*
   - **ES**: *Operador Ternario para Sintaxis Compacta*
   - Ejemplo de código:

     ```jsx
     function Example(props) {
       return (
         <div>
           {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
         </div>
       );
     }
     ```

---

7. **Operadores Lógicos (`&&`):**
   - **EN**: *Logical AND (`&&`) for Conditional Rendering*
   - **ES**: *Uso del Operador Lógico `&&` para Renderización Condicional*
   - Ejemplo:

     ```jsx
     function Example(props) {
       return (
         <div>
           {props.isLoggedIn && <h1>Welcome back!</h1>}
         </div>
       );
     }
     ```

---

8. **Sentencias Switch:**
   - **EN**: *Using Switch Statements*
   - **ES**: *Uso de Sentencias Switch*
   - Ejemplo de código con roles de usuario.

---

9. **Render Props:**
   - **EN**: *Using Render Props*
   - **ES**: *Uso de Render Props*
   - Ejemplo práctico para condicionales dinámicas:

     ```jsx
     function ConditionalRender(props) {
       return props.render(props.isLoggedIn);
     }
     ```

---

10. **Componentes de Orden Superior (HOC):**
    - **EN**: *Using Higher-Order Components (HOC)*
    - **ES**: *Uso de Componentes de Orden Superior (HOC)*
    - Ejemplo encapsulando lógica condicional.

---

11. **Uso de Hooks:**
    - **EN**: *Using Hooks for Conditional Rendering*
    - **ES**: *Uso de Hooks para Renderización Condicional*
    - Ejemplo práctico con `useState`.

---

12. **Renderización Condicional en Listas:**
    - **EN**: *Conditional Rendering in Lists*
    - **ES**: *Renderización Condicional en Listas*
    - Ejemplo con filtrado y mapeo:

      ```jsx
      {items.filter(item => condition).map(item => (<li>{item.name}</li>))}
      ```

---

13. **Estilos Condicionales:**
    - **EN**: *Conditional Styling*
    - **ES**: *Estilos Condicionales*
    - Ejemplo de estilos inline y clases condicionales.

---

/*
  {
    title: "Types of Conditional Rendering",
    englishContent: "There are three main types:",
    subpoints: [
      "Client-side rendering",
      "Server-side rendering",
      "Hybrid approaches",
    ],
    subtitle: "Tipos de Renderización Condicional",
    SpanishContent: "Existen tres tipos principales:",
    subpoints: [
      "Renderización en el lado del cliente",
      "Renderización en el lado del servidor",
      "Enfoques híbridos",
    ],
  },
  {
    title: "React Conditional Rendering",
    englishContent: "React provides several methods for conditional rendering:",
    submethods: [
      "Using ternary operator",
      "Logical AND/OR operators",
      "Inline conditionals",
    ],
    subtitle: "Renderización Condicional en React",
    SpanishContent:
      "React proporciona varios métodos para la renderización condicional:",
    submethods: [
      "Usando operador ternario",
      "Operadores lógicos AND/OR",
      "Condicionales inline",
    ],
    example: "{condition ? <Component1 /> : <Component2 />}",
  },

  {
    title: "Conditional Class Names",
    englishContent: "Adding classes conditionally using template literals:",
   subtitle: "Clases Condicionales",
  spanishContent: "Añadir clases condicionalmente usando literales de plantilla:",
    example:
      '<div className={`class1 ${condition ? "class2" : ""}`}>Content</div>',
  },

  {
    title: "Conditional Styling",
    englishContent:
      "Applying styles conditionally using inline styles or styled-components:",
    spanishContent:
      "Aplicar estilos condicionalmente usando estilos inline o styled-components:",
    example: '<div style={{color: condition ? "rojo" : "azul"}}>Texto</div>',
  },
  {
    title: "Conditional Rendering in Lists",
    englishContent: "Filtering items and mapping conditionally:",
    title: "Renderización Condicional en Listas",
    spanishContent: "Filtrar elementos y mapear condicionalmente:",
    example:
      "{items.filter(item => condition).map(item => (<li>{item.name}</li>))}",
  },
  {

    title: "Conditional Rendering in Forms",
    englishContent: "Showing/hiding form fields and enabling/disabling inputs:",
    subtitle: "Renderización Condicional en Formularios",
    spanishContent:
      "Mostrando/ocultando campos de formulario y habilitando/desabilitando entradas:",
    example:
      '<form>{showField && <input type="text" disabled={!enableInput} />}</form>',
  },
  {
    title: "Conditional Rendering in APIs",
    englisContent: "Fetching data conditionally using useEffect:",
    subtitle: "Renderización Condicional en API's",
    spanishContent: "Obtener datos condicionalmente usando useEffect:",
    example: "useEffect(() => {if (shouldFetchData) {fetchData()}});",
  },
  {
    title: "Performance Considerations",
    englishContent: "Avoid unnecessary re-renders and use memoization techniques.",
    tips: [
      "Use React.memo for functional components",
      "Use useMemo for calculations",
      "Use useCallback for function references",
    ],
    subtitle: "Consideraciones de Rendimiento",
    spanishContent:
      "Evitar re-renderizaciones innecesarias y usar técnicas de memoización.",
    tips: [
      "Usar React.memo para componentes funcionales",
      "Usar useMemo para cálculos",
      "Usar useCallback para referencias de funciones",
    ],
  },
  {
    title: "Best Practices",
    englishContent: "Follow these best practices:",
    subpoints: [
      "Keep conditionals simple",
      "Use constants for boolean values",
      "Test conditional logic thoroughly",
    ],
    subtitle: "Mejores Prácticas",
    spanishContent: "Sigue estas mejores prácticas:",
    subpoints: [
      "Mantén las condicionales simples",
      "Usa constantes para valores booleanos",
      "Prueba la lógica condicional exhaustivamente",
    ],
  },

*/






# React-conditional-rendering
