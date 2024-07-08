import styled from "styled-components";



export const BodyCointaner = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #afc2d9;
`;

export const LoginCoitaner = styled.section`
.Content{
  width: 800px;
  height: 800px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.Logo_titulo{
  display: flex;
  align-items: center;
  margin-top: 30px;
}

img{
  width: 200px;
  height: 200px;
  margin-right: 15px;
  border-radius: 50%;
}

h1{
  font-size: 50px;
}

form{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input{
  width: 500px;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
}

button{
  width: 500px;
  height: 40px;
  margin-bottom: 30px;
}

a{
  text-decoration: none;
  font-size: 20px;
  color: black;
}
`;

export const Networks = styled.div`
color: black;
font-size: 150px;
width: 185px;
display: flex;  
margin-top: 30px;
`;
