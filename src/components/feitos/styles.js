import styled from "styled-components";

export const ListaFeitos = styled.div`
  margin-top: 20px;

  h2 {
    color: #006a6a;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
    color: #7b7b7b;
    text-decoration: line-through;
  }

  [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="checkbox"]:checked {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  [type="checkbox"] + span {
    position: relative;
    cursor: pointer;
    display: inline;
    margin-right: 14.72px;
  }

  [type="checkbox"]:checked + span::before {
    top: 0;
    content: "";
    width: 3px;
    height: 7px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotateZ(37deg);
    transform-origin: 100% 100%;
    position: absolute;
    z-index: 1;
  }

  [type="checkbox"]:checked + span::after {
    top: 0;
    width: 12.73px;
    height: 12.73px;
    border-radius: 2px;
    border: 1px solid #7b7b7b;
    background-color: #7b7b7b;
    z-index: 0;
    content: "";
    left: 0;
    position: absolute;
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
