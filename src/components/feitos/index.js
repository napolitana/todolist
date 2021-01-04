import React, { Fragment } from "react";

import { ListaFeitos, Checkbox, Alteracoes } from "./styles";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from "react-redux";
import * as FeitosActions from "../../store/actions/feitos";
import * as AfazeresActions from "../../store/actions/afazeres";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

const Feitos = ({ feitos, removeFeito, addAfazer }) => {
  const handdleDesfazFeito = (id, description) => {
    addAfazer(description, "Adicionar", Math.random());
    removeFeito(id);
  };

  const handdleEditarFeito = (id, oldDescription) => {
    document.getElementById("tarefa").focus();

    document.getElementById("tarefa").value = oldDescription;
    document.getElementById("addOuEdit").innerText = "Alterar";
    document.getElementById("addOuEdit").value = id;
  };

  return (
    <Fragment>
      <ListaFeitos>
        {" "}
        <h2>Feito</h2>
        <ul>
          {feitos.map((feito) => (
            <li key={feito.id}>
              <Checkbox>
                <input type='checkbox' name='feito' defaultChecked></input>
                <span
                  onClick={() =>
                    handdleDesfazFeito(feito.id, feito.description)
                  }
                ></span>
                <label htmlFor='feito'>{feito.description}</label>
              </Checkbox>
              <Alteracoes>
                <button type='button'>
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={() =>
                      handdleEditarFeito(feito.id, feito.description)
                    }
                  />
                </button>
                <button type='button'>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => removeFeito(feito.id)}
                  />
                </button>
              </Alteracoes>
            </li>
          ))}
        </ul>
      </ListaFeitos>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  feitos: state.feitos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...FeitosActions, ...AfazeresActions }, dispatch);

Feitos.propTypes = {
  feitos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feitos);
