import styled from "styled-components";

export const Container = styled.div`
  margin: 0 80px;
`;

export const ToDoList = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

  nav {
    background-color: #006a6a;
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    padding: 0 50px;
  }

  form {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      border: 0;
      padding: 10px;
      font-style: italic;
      border-radius: 3px 0 0 3px;
    }

    input:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    button {
      padding: 8.2px;
      border: 0;
      border-radius: 0 3px 3px 0;
      background-color: #36afd1;
      color: #fff;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 1.04px;
      cursor: pointer;
    }
  }
`;

export const Title = styled.a`
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 100;
  text-transform: uppercase;
  color: #fff;
`;

export const TitleBold = styled.a`
  font-weight: 900;
`;
