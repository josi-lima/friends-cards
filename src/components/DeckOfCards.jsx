import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeckOfCards extends Component {
  checkTryunfo = (isTrue) => (
    isTrue ? <h4 className="trunfoCard" data-testid="trunfo-card">Super Trump</h4> : ''
  );

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
      removeCard,
    } = this.props;

    return (
      <section className="newCard">
        <div className="cardText">
          <img
            className="newCardImage"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <h3 className="cardName" data-testid="name-card">{ cardName }</h3>
          <q className="cardQuote" data-testid="description-card">
            <em>
              { cardDescription }
            </em>
          </q>
          <div>
            <p data-testid="attr1-card">
              {`Funny ......... ${Number(cardAttr1)}`}
            </p>
            <p data-testid="attr2-card">
              {`Popular ...... ${Number(cardAttr2)}`}
            </p>
            <p data-testid="attr3-card">
              {`Quirky ........ ${Number(cardAttr3)}`}
            </p>
          </div>
          <p data-testid="rare-card">{`Friendship: ${cardRare}`}</p>
          { this.checkTryunfo(cardTrunfo) }
        </div>
        <button
          data-testid="delete-button"
          className="deleteButton"
          id={ cardName }
          onClick={ () => removeCard(cardName) }
        >
          Delete
        </button>
      </section>
    );
  }
}

DeckOfCards.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  removeCard: PropTypes.func,
}.isRequired;

DeckOfCards.propTypes = {
  cardTrunfo: PropTypes.bool,
};

DeckOfCards.defaultProps = {
  cardTrunfo: false,
};

export default DeckOfCards;
