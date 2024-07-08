import styled from "styled-components";


export const FooterContainer = styled.footer`
    background-color: #1672cd;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

links   {
    display: flex;
   flex-direction: row;
   align-items: center;
   
    p{
    margin-right: 50px;
    color: white;
    font-size: 25px;
    margin-left: 10px;
  }
}

@media (max-width: 900px){
    p{
        font-size: 20px;
    }
  }

`

export const FooterContat = styled.div`
color: white;
width: 435px;
font-size: 24px;
display: flex;
align-items: center;


ul{
    margin-left: 50px;
    display: flex;
}
`

export const FooterNetworks = styled.div`
color: white;
font-size: 50px ;
width: 185px;
display: flex;  



ul{
    margin-left: 50px;
}

@media (max-width: 900px){
    ul{
        margin-left: 25px;
    }
  }



`