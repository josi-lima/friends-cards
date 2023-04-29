import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // function to verify if the 'trunfo' card has been picked
  possibleTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    const checkTrunfo = (
      <label htmlFor="trunfoInputCheck">
        <input
          data-testid="trunfo-input"
          id="trunfoInputCheck"
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trump Card!
      </label>
    );
    return !hasTrunfo
      ? checkTrunfo
      : <span className="warningInfo">Você já tem um Super Trunfo em seu baralho</span>;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form className="form">

        <div>
          <label htmlFor="name-input">
            Name of the character
          </label>
        </div>
        <input
          data-testid="name-input"
          type="text"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />

        <div>
          <label htmlFor="description-input">
            Quote
          </label>
        </div>
        <textarea
          data-testid="description-input"
          type="text"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <div>
          <label htmlFor="attr1-input">
            Sense of humor
          </label>
        </div>
        <input
          data-testid="attr1-input"
          type="number"
          name="cardAttr1"
          min="0"
          max="90"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <div>
          <label htmlFor="attr2-input">
            Popularity
          </label>
        </div>
        <input
          data-testid="attr2-input"
          type="number"
          name="cardAttr2"
          min="0"
          max="90"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <div>
          <label htmlFor="attr3-input">
            Quirkiness
          </label>
        </div>
        <input
          data-testid="attr3-input"
          type="number"
          name="cardAttr3"
          min="0"
          max="90"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <div>
          <label htmlFor="image-input">
            Photo
          </label>
        </div>
        <input
          data-testid="image-input"
          type="text"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rareInput">
          Friendship level
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" name="options">
              normal
            </option>
            <option value="raro" name="options">
              strong
            </option>
            <option value="muito raro" name="options">
              very strong
            </option>
          </select>
        </label>

        {this.possibleTrunfo(hasTrunfo, cardTrunfo, onInputChange)}

        <button
          data-testid="save-button"
          className="btn-save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          SAVE
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
