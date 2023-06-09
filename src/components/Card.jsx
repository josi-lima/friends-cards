import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defaultImage } from '../mocks';

class Card extends Component {
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
    } = this.props;

    return (
      <section className="card">
        <div className="cardText">
          <img
            className="cardImage"
            data-testid="image-card"
            src={ cardImage ? cardImage : defaultImage }
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
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
}.isRequired;

Card.propTypes = {
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardTrunfo: false,
};

export default Card;

// =============================

/* Image links

Chandler - https://i.postimg.cc/fRkYDMY9/chandler.png -- I make jokes when I’m uncomfortable.
Joey - https://i.postimg.cc/jj7Nnvgq/joey.png -- How you doing?
Monica - https://i.postimg.cc/NM8HpFvW/monica.png -- And I have to live with a boy!
Phoebe - https://i.postimg.cc/rwdR7QLG/phoebe.png -- Smelly Cat, Smelly Cat!
Rachel - https://i.postimg.cc/rsQt2Hmj/rachel.png -- Maybe, I don't need your money. Wait, maybe!
Ross - https://i.postimg.cc/3xP0hmKs/ross.png -- We were on a break!
Mike - https://i.postimg.cc/zBYhCW6C/mike.png -- You’re a strange kind of grown-up!
Gunther - https://i.postimg.cc/Hsky9TZh/ghunter.png -- Jij hebt seks met ezels!
Janice - https://i.postimg.cc/7PVzz5Vz/janice.png -- Oh. My. God.
*/
