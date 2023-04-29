import React, { Component } from 'react';

class Header extends Component {
  render() {
    const titleMobile = 'f.r.i.e.n.d.s';
    const headline = 'Find your favorite character!';
    const source = 'https://fontmeme.com/permalink/230405/c262bb5aa194cedcb2e9d32436d7743c.png';
    const alternativeText = 'Friends Series';

    return (
      <>
        <img className="imgTitle" src={ source } alt={ alternativeText } />
        <h1 className="titleMobile">{ titleMobile }</h1>
        <h2 className="headline">{ headline }</h2>
      </>
    );
  }
}

export default Header;
