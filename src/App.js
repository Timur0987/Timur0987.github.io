import CardBlock from './components/cardBlcok/cardBlock';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_9.svg', id:1, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_9.svg', id:2, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_9.svg', id:3, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_9.svg', id:4, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_10.svg', id:5, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_10.svg', id:6, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_10.svg', id:7, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_10.svg', id:8, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg', id:9, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_jack.svg', id:10, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_jack.svg', id:11, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_jack.svg', id:12, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_queen.svg', id:13, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_queen.svg', id:14, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_queen.svg', id:15, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_queen.svg', id:16, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_king.svg', id:17, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_king.svg', id:18, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_king.svg', id:19, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_king.svg', id:20, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_ace.svg', id:21, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_ace.svg', id:22, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_ace.svg', id:23, delete:false},
        {src:'https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_ace.svg', id:24, delete:false}
      ]
    }
  }
  onDelete = () =>{
    console.log('delete');
  }
  onSelectCard = (id) =>{
    this.setState(({data})=>{
      return{
        data: data.filter(item=> item.id !== id)
      }
    })
  }
  render() {
    const {data} = this.state
    return (
      <div>
        <CardBlock  data={data} SelectCard={this.onSelectCard}/>
        <div className="btnBlock">
        </div>
      </div>
    );
  }
}

export default App;
