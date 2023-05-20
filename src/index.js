import React from 'react';
import ReactDOM from 'react-dom';
import logo1 from './img/img1.webp';
import logo2 from './img/img2.webp';
import logo3 from './img/img3.webp';
import logo4 from './img/img4.webp';
import logo5 from './img/img5.webp';
import logo6 from './img/img6.webp';
import logo7 from './img/img7.webp';
import logo8 from './img/img8.webp';
import logo9 from './img/img9.webp';
import logo10 from './img/img10.webp';
import logo11 from './img/img11.webp';
import logo12 from './img/img12.webp';
import logo13 from './img/redessociales.png';
import './index.css';

const xtitulo='Primer laboratorio';
const xcolor='white';
const lcurso1=['Celular1','Celular2','Celular3','Celular4'];
const lcurso2=['Celular5','Celular6','Celular7','Celular8'];
const lcurso3=['Celular9','Celular10','Celular11','Celular12'];

const JSX = (
  <div className='contenedor'>
    <h1 className='titulo' style={{color:xcolor}}>{xtitulo}</h1>
    <h1 className='titulo' style={{color:xcolor}}>Primer Proyecto</h1>
    <div className='cursos1'>
      <img src={logo1} className='App-logo' alt='logo' />
      <img src={logo2} className='App-logo' alt='logo' />
      <img src={logo3} className='App-logo' alt='logo' />
      <img src={logo4} className='App-logo' alt='logo' />
    </div>
    <ul className='lista1'>
      <li><a href='#'>{lcurso1[0]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso1[1]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso1[2]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso1[3]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
    </ul>
    <p></p>
    <div className='cursos2'>
      <img src={logo5} className='App-logo' alt='logo' />
      <img src={logo6} className='App-logo' alt='logo' />
      <img src={logo7} className='App-logo' alt='logo' />
      <img src={logo8} className='App-logo' alt='logo' />
    </div>
    <ul className='lista2'>
      <li><a href='#'>{lcurso2[0]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso2[1]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso2[2]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso2[3]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
    </ul>
    <p></p>
    <div className='cursos3'>
      <img src={logo9} className='App-logo' alt='logo' />
      <img src={logo10} className='App-logo' alt='logo' />
      <img src={logo11} className='App-logo' alt='logo' />
      <img src={logo12} className='App-logo' alt='logo' />
    </div>
    <ul className='lista3'>
      <li><a href='#'>{lcurso3[0]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso3[1]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso3[2]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
      <li><a href='#'>{lcurso3[3]} -
      Precio: S/{Math.round(Math.random() * 100)} </a></li>
    </ul>
    <div className='redessociales'>
      <img src={logo13} className='App-logo' alt='logo' />
    </div>
  </div>
)
ReactDOM.render(JSX,document.getElementById('root'));