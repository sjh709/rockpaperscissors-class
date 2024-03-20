import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandScissors,
  faHandBackFist,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://content.etilize.com/Alternate-Image1/1073503247.jpg',
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: choice[computerChoice],
      result: this.judgement(choice[userChoice], choice[computerChoice]),
    });
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else {
      if (user.name === 'Scissors') {
        return computer.name === 'Rock' ? 'lose' : 'win';
      }
      if (user.name === 'Rock') {
        return computer.name === 'Scissors' ? 'win' : 'lose';
      }
      if (user.name === 'Paper') {
        return computer.name === 'Scissors' ? 'lose' : 'win';
      }
    }
  };

  render() {
    return (
      <div>
        <div className='main'>
          <BoxClass
            title='You'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='Computer'
            item={this.state.computerSelect}
            result={
              this.state.result === 'win'
                ? 'lose'
                : this.state.result === 'lose'
                ? 'win'
                : this.state.result
            }
          />
        </div>
        <div className='main'>
          <button className='item-button' onClick={() => this.play('scissors')}>
            <FontAwesomeIcon icon={faHandScissors} />
          </button>
          <button className='item-button' onClick={() => this.play('rock')}>
            <FontAwesomeIcon icon={faHandBackFist} />
          </button>
          <button className='item-button' onClick={() => this.play('paper')}>
            <FontAwesomeIcon icon={faHand} />
          </button>
        </div>
        <h1 className='main'>{this.state.result}</h1>
      </div>
    );
  }
}
