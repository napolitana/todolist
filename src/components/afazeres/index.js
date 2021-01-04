import React, { Fragment } from "react";

import { ListaAfazeres, Alteracoes, Checkbox } from "./styles";

import { connect } from "react-redux";
import * as AfazeresActions from "../../store/actions/afazeres";
import * as FeitosActions from "../../store/actions/feitos";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

const Afazeres = ({ afazeres, removeAfazer, finalizaAfazer, addAfazer }) => {
  const handdleFinalizaAfazer = (id, description) => {
    finalizaAfazer(description);
    removeAfazer(id);
  };

  const handdleEditarAfazer = (id, oldDescription) => {
    document.getElementById("tarefa").focus();
    document.getElementById("tarefa").value = oldDescription;
    document.getElementById("addOuEdit").innerText = "Alterar";
    document.getElementById("addOuEdit").value = id;
  };

  return (
    <Fragment>
      <ListaAfazeres>
        <h2>A fazer</h2>
        <ul>
          {afazeres.map((afazer) => (
            <li key={afazer.id}>
              <Checkbox>
                <input
                  type='checkbox'
                  name='afazer'
                  onClick={() =>
                    handdleFinalizaAfazer(afazer.id, afazer.description)
                  }
                ></input>
                <label htmlFor='afazer'>{afazer.description}</label>
              </Checkbox>

              <Alteracoes>
                <button
                  type='button'
                  onClick={() =>
                    handdleEditarAfazer(afazer.id, afazer.description)
                  }
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button type='button' onClick={() => removeAfazer(afazer.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </Alteracoes>
            </li>
          ))}
        </ul>
      </ListaAfazeres>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  afazeres: state.afazeres,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...AfazeresActions, ...FeitosActions }, dispatch);

Afazeres.propTypes = {
  afazeres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Afazeres);
