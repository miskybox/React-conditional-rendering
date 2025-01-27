# React : Introduction to Conditional Rendering

 **renderización condicional en React**. 



### Slide 1: Introduction to Conditional Rendering


1. **Título:**
   - **EN**: *Conditional Rendering in React*
   - **ES**: *Renderización Condicional en React*
   - (Breve descripción introductoria del tema)


2. **Por qué usar Renderización Condicional:**
   - **EN**: *Why Use Conditional Rendering?*
   - **ES**: *¿Por qué usar Renderización Condicional?*
   - Importancia de tomar decisiones dinámicas en la interfaz de usuario.

---

3. **Métodos principales en React (resumen):**
   - **EN**: *Methods for Conditional Rendering*
   - **ES**: *Métodos para Renderización Condicional*
   - Introducción a:
     - If/Else
     - Operadores ternarios
     - Operadores lógicos `&&` y `||`
     - `Switch` statements

---

4. **If/Else Statement:**
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

5. **Operador Ternario:**
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

6. **Operadores Lógicos (`&&`):**
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

7. **Sentencias Switch:**
   - **EN**: *Using Switch Statements*
   - **ES**: *Uso de Sentencias Switch*
   - Ejemplo de código con roles de usuario.

---

. **Render Props:**
   - **EN**: *Using Render Props*
   - **ES**: *Uso de Render Props*
   - Ejemplo práctico para condicionales dinámicas:

     ```jsx
     function ConditionalRender(props) {
       return props.render(props.isLoggedIn);
     }
     ```

---

. **Componentes de Orden Superior (HOC):**
    - **EN**: *Using Higher-Order Components (HOC)*
    - **ES**: *Uso de Componentes de Orden Superior (HOC)*
    - Ejemplo encapsulando lógica condicional.

---

. **Uso de Hooks:**
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

