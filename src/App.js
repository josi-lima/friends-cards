import React from 'react';
import Card from './components/Card';
import DeckOfCards from './components/DeckOfCards';
import Form from './components/Form';
import Header from './components/Header';
import Image from './components/Image';
import headerImg from './components/images/headerImg.jpeg';
import footerImg from './components/images/img02.png';
import Footer from './components/Footer';

class App extends React.Component {
  // determine the initial state of the elements
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  // ==================================

  // function to verify inputs of the form according to a set of conditions
  validateFields = () => {
    this.setState( // updates the state of components
      ({
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      }) => {
        const textInputs = cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0;

        const maxScore = 210;
        const maxSingleScore = 90;

        const attrInputs = Number(cardAttr1) >= 0
          && Number(cardAttr1) <= maxSingleScore
          && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxSingleScore
          && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxSingleScore
          && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxScore;

        return { isSaveButtonDisabled: !(textInputs && attrInputs) };
      },
    );
  };

  // =============================

  // function to verify if the card 'trunfo' already exists in the deck

  findTrunfoInDeck = () => {
    const { savedCards } = this.state; // obtains the value of the object (from its state)
    this.setState({
      hasTrunfo: savedCards.some(({ cardTrunfo }) => cardTrunfo === true),
    });
  };

  // =============================
  setImage = () => {
    const { cardName } = this.state;
    switch (cardName.toUpperCase()) {
      case 'ROSS': 
        this.setState({ cardImage: 'https://i.postimg.cc/3xP0hmKs/ross.png'});        
        break;  
      case 'CHANDLER':
        this.setState({ cardImage: 'https://i.postimg.cc/fRkYDMY9/chandler.png'});
        break;  
      case 'JOEY':
        this.setState({ cardImage: 'https://i.postimg.cc/jj7Nnvgq/joey.png'}); 
        break; 
      case 'MONICA':
        this.setState({ cardImage: 'https://i.postimg.cc/NM8HpFvW/monica.png'});
        break;       
      case 'PHOEBE': 
        this.setState({ cardImage: 'https://i.postimg.cc/rwdR7QLG/phoebe.png'});
        break;       
      case 'RACHEL':
        this.setState({ cardImage: 'https://i.postimg.cc/rsQt2Hmj/rachel.png'});
        break; 
      case 'MIKE':
        this.setState({ cardImage: 'https://i.postimg.cc/zBYhCW6C/mike.png'});
        break; 
        case 'GHUNTER': 
        this.setState({ cardImage: 'https://i.postimg.cc/Hsky9TZh/ghunter.png'});
        break; 
        case 'JANICE':
        this.setState({ cardImage: 'https://i.postimg.cc/7PVzz5Vz/janice.png'});
        break;
      default:
    }
  }   
    
  // =============================

  // general event handler to handle the state of each element or component
  onInputChange = ({ target }) => {
    this.findTrunfoInDeck();
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // this.setState updates the state of the component or element, here the save button
    this.setState({
      [name]: value,
    }, () => {
      this.setImage()
      this.validateFields()
    });
  };

  // Function to delete cards

  removeCard = (cardName) => {
    // const savedInfo = App.state.savedCards;
    const { savedCards } = this.state;
    const newSavedCards = savedCards.filter((card) => card.cardName !== cardName);

    this.setState({
      savedCards: newSavedCards,
      hasTrunfo: newSavedCards.some(({ cardTrunfo }) => cardTrunfo === true),
    });
  };

  // =============================

  // Function to activate the save button and create a new card
  onSaveButtonClick = (e) => {
    e.preventDefault(); // prevents the default behavior to submit of the button

    this.setState(({ savedCards }) => { // destructuring prevState.savedCards
      const cardsList = [...savedCards];

      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = this.state;

      cardsList.push({
        cardName,
        cardDescription,
        cardAttr1: Number(cardAttr1),
        cardAttr2: Number(cardAttr2),
        cardAttr3: Number(cardAttr3),
        cardImage,
        cardRare,
        cardTrunfo,
      });

      return {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        savedCards: cardsList,
      };
    }, () => {
      this.validateFields();
      this.findTrunfoInDeck();
    });
  };

  // ==================================

  // =============================

  render() {
    // to read (or access) the state of an element, use `this.state.keyOfTheState`
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
      savedCards,
    } = this.state;

    // =============================

    return (
      <>
        <Image
          source={ headerImg }
          alternativeText="image of the characters from the sitcom Friends"
        />
        <Header />
        <main className="mainContainer">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />

          { savedCards.map((card) => (
            <DeckOfCards
              key={ card.name }
              { ...card }
              removeCard={ this.removeCard }
            />))}
        </main>

        <Footer
          source={ footerImg }
          alternativeText="image of the logo of the café from the sitcom Friends"
        />
      </>
    );
  }
}

export default App;

// 
