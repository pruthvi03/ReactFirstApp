import React, { Component } from 'react';
import './custom.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import Button from './element/Button'
const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}


class App extends Component {

  constructor(props) {
    super(props)
    console.log("App", props.title)
    this.state = {
      cards: [
        {
          id: "123",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Bruce Wayne",
          heroname: "Batman"
        },
        {
          id: "124",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Clark Kent",
          heroname: "Superman"
        },
        {
          id: "125",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Diana Princess",
          heroname: "Wondar Woman"
        }
      ],
      showCard: true
    }
  }

  // const [showCard, setShowCard] = useState(true);
  // const [cards, setCards] = useState([
  //   {
  //     id: "123",
  //     avatar: "https://www.w3schools.com/howto/img_avatar.png",
  //     name: "Bruce Wayne",
  //     heroname: "Batman"
  //   },
  //   {
  //     id: "124",
  //     avatar: "https://www.w3schools.com/howto/img_avatar.png",
  //     name: "Clark Kent",
  //     heroname: "Superman"
  //   },
  //   {
  //     id: "125",
  //     avatar: "https://www.w3schools.com/howto/img_avatar.png",
  //     name: "Diana Princess",
  //     heroname: "Wondar Woman"
  //   }
  // ]);

  // const buttonStyle = {
  //   backgroundColor:null
  // }
  // if(cards.length < 3) buttonStyle.backgroundColor = 'lightpink';
  // if(cards.length < 2) buttonStyle.backgroundColor = 'red';


  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps', props)
    return state
  }


  toggleShowCard = () => this.setState({ showCard: !this.state.showCard });
  deleteHandler = (cardsIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardsIndex, 1)
    this.setState({ cards: cards_copy })
  }
  channgeNameHandler = (event, id) => {
    // 1. Which Card
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    // 2. Make copy of that card
    const cards_copy = [...this.state.cards]
    // 3.change name of specific card
    cards_copy[cardIndex].name = event.target.value
    // 4. set the cards with updated version of card copy
    this.setState({ cards: cards_copy })
  }

  // const buttonnMarkUp = (
  //   <div>
  //       <button className="button button2">Blue</button>
  //       <button className="button button3">Red</button>
  //   </div>
  // )
  // const changeNameHandler = (name)=>{
  //   setName(name);
  // }
  // const inputNameHadler = event => {
  //   setName(event.target.value);
  // } 

  componentDidMount() {
    console.log('App js componentDidMount')
  }


  render() {
    if(this.state.showCard===false){
      return <div>nothing</div>
    }
    console.log('App js render')
    const classes = ['button']
    if (this.state.cards.length < 3) classes.push('pink');
    if (this.state.cards.length < 2) classes.push('red');

    const cardsMarkUp = this.state.showCard &&
      (
        this.state.cards.map((card, index) =>
          <Card
            key={card.id}
            avatar={card.avatar}
            name={card.name}
            heroname={card.heroname}
            onDelete={() => this.deleteHandler(index)}
            onChangeName={(event) => this.channgeNameHandler(event, card.id)}
          />
        )
      )

    return (
      <ThemeProvider theme={theme} >
        <div className="App">
          <Button color="mango" length={this.state.cards.length}>Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle show/hide</button>
          {
            cardsMarkUp
          }
        </div>
      </ThemeProvider>
    );
  }


}

export default App;
