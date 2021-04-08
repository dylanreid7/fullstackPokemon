import React, { Component } from "react";
import PokemonList from "./PokemonList";


// Fix this file. Not all mistakes are explicitly labeled with FIX_ME

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    }

  }

  // onClick={/*  FIX_ME ----> I should control the visibility of details */}

  render() {
    console.log(this.props.pokemon);
    return(
    <tr>
      <td className="pokemon-name">
        {this.props.pokemon.name}
      </td>
      <td>
        {this.props.pokemon.picture}
      </td>
      {this.state.showDetails ?
      <td>
        {`level: ${this.props.pokemon.level} \ntype: ${this.props.pokemon.type}`}
      </td>
      : null}
    </tr>
    )
  }
}

export default Pokemon;