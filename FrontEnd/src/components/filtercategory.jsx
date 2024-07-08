import React, { useState } from 'react'
import styled from "styled-components";
import {FilterCategorys} from '../styles/filtercategory'


const FilterCategory = () => {
const [useCategoria, useCategoriaFiltro] = useState({
  remeras: false,
  buzos: false,
  campera: false,
  camisas: false,
  rompevientos: false,
  short: false,
  zapatillas: false,
  pantalones: false,
});

const [datosFiltrados, setDatosFiltrados] = useState([

]);

async function initialData() {
    await fetch('http://localhost:3000/categorias')
      .then(res => res.json())
      .catch(res => console.log(res))
  }
 
const handleOnCheckbox = (e) => {
useCategoriaFiltro({
    ...useCategoria,
    [e.target.valor]: e.target.checked,
})

if (e.target.checked) {
    const resultadoCategoria = initialData.filter(
        item => item.nombre === e.target.nombre
    )
}

};

  return (
    <FilterCategorys>
    <section className="contenedor__content_filter">
    <section className="filter">
        <h2>filtro</h2>

        <section className="line__and__circle">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
        </section>


        <div className="vestimenta__superior">
            <h3>Vestimenta superior</h3>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'remeras'
                valor = 'remeras'
                id= '7'
                />
                <label htmlFor="remeras">Remeras</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'buzos'
                valor = 'buzos'
                id= '8'
                />
                <label htmlFor="buzos">Buzos</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'campera'
                valor = 'campera'
                id= '2'
                />
                <label htmlFor="campera">Campera</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'camisas'
                valor = 'camisas'
                id= '4'
                />
                <label htmlFor="camisas">camisas</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'rompevientos'
                valor = 'rompevientos'
                id= '5'
                />
                <label htmlFor="rompevientos">Rompevientos</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'short'
                valor = 'short'
                id= '1'
                />
                <label htmlFor="short">Short</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'zapatillas'
                valor = 'zapatillas'
                id= '3'
                />
                <label htmlFor="zapatillas">Zapatillas</label>
            </div>
            <div className='input-checkbox'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                nombre = 'pantalones'
                valor = 'pantalones'
                id= '6'
                />
                <label htmlFor="pantalones">Pantalones</label>
            </div>

        </div>


        <section className="line__and__circle">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
        </section>
         
         <div className='precio__filtro'>
           <h3>Precios</h3>

         </div>



    </section>
    </section>
</FilterCategorys>
  )
}

export default FilterCategory