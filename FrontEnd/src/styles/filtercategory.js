import styled from "styled-components";


export const FilterCategorys = styled.section`
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


.vestimenta__superior {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
}

.vestimenta__superior h3 {
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

@media (max-width: 900px){
    .filter{
        height: 1500px;
        width: 250px;
    };
}

`