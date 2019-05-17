import React from 'react';
import './App.css';


function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
    {props.value}
  </button>

  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      XisNext:true,
    }
  }

  handleClick(i){

    const newSquares = this.state.squares.slice()
    newSquares[i] = this.state.XisNext ? 'X':'O'

    this.setState({
      squares:newSquares,
      XisNext:!(this.state.XisNext),
    })
  }


  render() {
    const winner = calculateWinner(this.state.squares)
    return (
      <div>
        <div>
          <Square value={this.state.squares[0]} onClick={()=>{this.handleClick(0)}} />
          <Square value={this.state.squares[1]} onClick={()=>{this.handleClick(1)}}/>
          <Square value={this.state.squares[2]} onClick={()=>{this.handleClick(2)}}/>
        </div>
        <div>
          <Square value={this.state.squares[3]} onClick={()=>{this.handleClick(3)}}/>
          <Square value={this.state.squares[4]} onClick={()=>{this.handleClick(4)}}/>
          <Square value={this.state.squares[5]} onClick={()=>{this.handleClick(5)}}/>
        </div>
        <div>
          <Square value={this.state.squares[6]} onClick={()=>{this.handleClick(6)}}/>
          <Square value={this.state.squares[7]} onClick={()=>{this.handleClick(7)}}/>
          <Square value={this.state.squares[8]} onClick={()=>{this.handleClick(8)}}/>
        </div>
        <div className="status">Winner:{winner}</div>
      </div>

    )
  }
}

// helper function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  return <Board/>
}

export default App;

