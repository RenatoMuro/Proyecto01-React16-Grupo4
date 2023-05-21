import React from "react";
import ReactDOM from "react-dom";
import logo1 from "./img/img1.webp";
import logo2 from "./img/img2.webp";
import logo3 from "./img/img3.webp";
import logo4 from "./img/img4.webp";
import logo5 from "./img/img5.webp";
import logo6 from "./img/img6.webp";
import logo7 from "./img/img7.webp";
import logo8 from "./img/img8.webp";
import logo9 from "./img/img9.webp";
import logo10 from "./img/img10.webp";
import logo11 from "./img/img11.webp";
import logo12 from "./img/img12.webp";
import logo13 from "./img/redessociales.png";
import "./index.css";
import "./reset.css";
const xtitulo = "Tiendas EFE";
const xcolor = "white";
const lcurso1 = [
  "Samsung Galaxy A73 5G 128GB 8GB - Colores",
  "Celular Samsung Galaxy-A13 Negro",
  "Samsung Galaxy S20 Fe SM-G781U1/DS 6+128GB - Rosa",
  "Samsung Galaxy S10 Plus SM-G975U 128GB Negro Single SIM",
];
const lcurso2 = [
  "Samsung Galaxy S10 Plus SM-G975U 128GB Negro Single SIM",
  "Samsung Galaxy S20 Ultra SM-G988U 128GB Negro",
  "Samsung Galaxy S10 Plus SM-G975U 128GB Azul",
  "Samsung Galaxy A22 64GB 4GB Negro",
];
const lcurso3 = [
  "Samsung Galaxy S10 Plus SM-G975U 128GB Verde Single SIM",
  "Samsung Galaxy A22 64GB 4GB Negro",
  "Samsung Galaxy S10 Plus SM-G975U 128GB Blanco Single SIM",
  "Galaxy A23 128GB 4GB negro",
];

const JSX = (
  <div className="contenedor">
    <header>
      <h1 className="header__NombreEmpresa" style={{ color: xcolor }}>
        {xtitulo}
      </h1>
      <h2 class="header__sloganEmpresa">Más fácil.Más moderno.</h2>
    </header>

    <main>
      <div id="catalogo">
        <h2 class="titulo">LO MÁS VENDIDOS</h2>

        <div class="producto producto1">
          <picture>
            <img src={logo1} className="App-logo" alt="logo" />
          </picture>

          <h3>{lcurso1[0]}</h3>
          <p>
            <span class="precio">S/. {Math.round(Math.random() * 1000)}</span>
          </p>
          <button class="botonMenu">Agregar al Carrito</button>
        </div>

        <div class="producto producto1">
          <picture>
            <img src={logo2} className="App-logo" alt="logo" />
          </picture>

          <h3>{lcurso1[1]}</h3>
          <p>
            <span class="precio">S/. {Math.round(Math.random() * 1000)}</span>
          </p>
          <button class="botonMenu">Agregar al Carrito</button>
        </div>
      </div>
    </main>
    <div className="cursos1">
      {/* <img src={logo2} className="App-logo" alt="logo" /> */}
      <img src={logo3} className="App-logo" alt="logo" />
      <img src={logo4} className="App-logo" alt="logo" />
    </div>
    <ul className="lista1">
      <li>
        <a href="#"></a>
      </li>
      <li>
        <a href="#">
          {lcurso1[1]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso1[2]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso1[3]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
    </ul>
    <p></p>
    <div className="cursos2">
      <img src={logo5} className="App-logo" alt="logo" />
      <img src={logo6} className="App-logo" alt="logo" />
      <img src={logo7} className="App-logo" alt="logo" />
      <img src={logo8} className="App-logo" alt="logo" />
    </div>
    <ul className="lista2">
      <li>
        <a href="#">
          {lcurso2[0]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso2[1]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso2[2]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso2[3]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
    </ul>
    <p></p>
    <div className="cursos3">
      <img src={logo9} className="App-logo" alt="logo" />
      <img src={logo10} className="App-logo" alt="logo" />
      <img src={logo11} className="App-logo" alt="logo" />
      <img src={logo12} className="App-logo" alt="logo" />
    </div>
    <ul className="lista3">
      <li>
        <a href="#">
          {lcurso3[0]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso3[1]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso3[2]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
      <li>
        <a href="#">
          {lcurso3[3]} - Precio: S/{Math.round(Math.random() * 100)}{" "}
        </a>
      </li>
    </ul>
    <div className="redessociales">
      <img src={logo13} className="App-logo" alt="logo" />
    </div>
  </div>
);
ReactDOM.render(JSX, document.getElementById("root"));
