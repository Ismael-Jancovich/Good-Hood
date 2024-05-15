import React from 'react'
import styled from "styled-components";

const FilterCategorys = styled.section`
.filter {
    display: flex;
    width: 400px;
    height: 120vh;
    background: #b0b1cb;
    flex-direction: column;
    align-items: center;
}

.filter h2 {
    text-transform: uppercase;
}


.filter__calzado {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 150px
}

.filter__calzado h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.filter__remeras {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 150px
}

.filter__remeras h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}


.filter__camperas {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 150px
}

.filter__camperas h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.filter__pantalones {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 150px
}

.filter__pantalones h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}


.filter__shorts {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    width: 250px;
    height: 150px
}

.filter__shorts h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.line__and__circle {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
}

.line {
    background-color: black;
    width: 80px;
    height: 2px;
    margin-left: 5px;
    margin-right: 5px;
}

.circle {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 5px;
}
`

const FilterCategory = () => {
  return (
    <FilterCategorys>
    <section class="contenedor__content_filter">
    <section class="filter">
        <h2>filtro</h2>
        <div class="filter__calzado">
            <h3>Calzado</h3>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Zapatillas
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Sandalias
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Moda
            </label>
        </div>

        <section class="line__and__circle">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
        </section>

        <div class="filter__remeras">
            <h3>Remeras</h3>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Camisas
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Musculosas
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Deportivas
            </label>
        </div>

        <section class="line__and__circle">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
        </section>

        <div class="filter__camperas">
            <h3>Camperas</h3>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Rompevientos
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Invierno
            </label>
        </div>

        <section class="line__and__circle">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
        </section>

        <div class="filter__pantalones">
            <h3>Pantalones</h3>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Joggers
            </label>
            <label>
            <input type="checkbox" name="myCheckbox"/>
                Jeans
            </label>
            <label>
                <input type="checkbox" name="myCheckbox"/>
                Deportivos
            </label>
        </div>

        <section class="line__and__circle">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
        </section>

        <div class="filter__shorts">
            <h3>Shorts</h3>
            <label>
                <input type="checkbox" name="myCheckbox"/>
                Bermudas
            </label>
            <label>
                <input type="checkbox" name="myCheckbox"/>
                Jeans
            </label>
            <label>
                <input type="checkbox" name="myCheckbox"/>
                Deportivos
            </label>

        </div>
        <section class="line__and__circle">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
        </section>
    </section>
    </section>
</FilterCategorys>
  )
}

export default FilterCategory