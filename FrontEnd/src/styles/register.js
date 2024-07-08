import styled from "styled-components";



export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1c5cf;
`;

export const  RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 800px;
  height: 900px;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;

  .Logo_titulo {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  h1 {
    font-size: 50px;
  }

  img {
    width: 200px;
    height: 200px;
    margin-right: 15px;
    border-radius: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 500px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    width: 500px;
    height: 40px;
    margin-bottom: 30px;
  }
`;

export const Networks = styled.div`
  color: black;
  font-size: 150px;
  width: 185px;
  display: flex;
  margin-top: 30px;
`;