/*
PARA CREAR UN COMPONENTE DE FUNCION SE NECESITA:
1)Declarar una funcion, y la buena practica dice que se tiene que llamar igual al archivo donde esta
2)Tiene que tener un return que devuelve "html"
3) No olvidar especificar que funcion  (si es que existe varias) hay que exportar

*/
import React from "react";
import { Fragment } from "react";

function ComponenteTituloH1() {
  return (
    <>
      <h1>Hola como estas? </h1>
      <h2>Subtitulo</h2>
    </>
  )
}

export default ComponenteTituloH1