import styled from "styled-components";

export const ListaAfazeres = styled.div`
  margin-top: 20px;

  h2 {
    color: #006a6a;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
    color: #7b7b7b;
  }
`;

export const Checkbox = styled.div`
  label {
    padding-left: 10px;
  }
`;

export const Alteracoes = styled.div`
  button {
    color: #7b7b7b;
    padding-left: 20px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
