import React, { Component, Fragment } from "react";

import { ToDoList, Title, TitleBold, Container } from "./styles";

import logo from "../../assets/logo.png";

import WebFont from "webfontloader";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as AfazeresActions from "../../store/actions/afazeres";
import * as FeitosActions from "../../store/actions/feitos";

import Afazeres from "../../components/afazeres/index";
import Feitos from "../../components/feitos/index";

WebFont.load({
  google: {
    families: ["Roboto:100,400,900", "sans-serif"],
  },
});

class Main extends Component {
  state = {
    afazerInput: "",
  };

  handleAddToDo = async (event) => {
    event.preventDefault();
    var id = parseFloat(document.getElementById("addOuEdit").value);

    if (document.getElementById("addOuEdit").innerHTML === "Alterar") {
      var achou = false;
      this.props.afazeres.map((afazer) =>
        afazer.id === id ? (achou = true) : false
      );

      if (achou) {
        this.props.addAfazer(
          this.state.afazerInput,
          document.getElementById("addOuEdit").innerHTML,
          id
        );
      } else {
        this.props.editaFeito(id, this.state.afazerInput);
      }
    } else {
      this.props.addAfazer(
        this.state.afazerInput,
        document.getElementById("addOuEdit").innerHTML,
        id
      );
    }

    this.setState({ afazerInput: "" });
  };

  render() {
    return (
      <Fragment>
        <ToDoList>
          <nav>
            <Title>
              <TitleBold>ToDo</TitleBold>List
            </Title>
            <img src={logo} alt='eMix logo'></img>
          </nav>
          <Container>
            <form onSubmit={this.handleAddToDo}>
              <input
                type='text'
                placeholder='Digite aqui uma nova tarefa...'
                value={this.state.afazerInput}
                id='tarefa'
                onChange={(e) => this.setState({ afazerInput: e.target.value })}
                required
              />
              <button type='submit' id='addOuEdit'>
                Adicionar
              </button>
            </form>
            <Afazeres></Afazeres>
            <Feitos></Feitos>
          </Container>
        </ToDoList>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  afazeres: state.afazeres,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...AfazeresActions, ...FeitosActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
