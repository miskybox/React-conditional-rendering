# React : Introduction to Conditional Rendering

 **renderización condicional en React**. 



### Slide 1: Introduction to Conditional Rendering


1. **Título:**
   - **EN**: *Conditional Rendering in React*
   - **ES**: *Renderización Condicional en React*
 


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

