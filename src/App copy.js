// *******This is state function ##state:button click change h1 value (using class) *******
import React, {Component} from 'react';

class App extends Component{
  state={
    my_name:"Rutuja"
  }
  changeMyName=()=>{

  // ***this.setState is syntax***
    this.setState(
      {
        my_name:"Wisdom"
      }

    )
  }

render()
{
  return(
<div>
  <h1> Hello {this.state.my_name}</h1>
  <button onClick={this.changeMyName}>Click Here </button>
  </div>
  );
};

}
export default App;