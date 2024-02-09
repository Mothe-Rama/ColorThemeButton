import React, {Component} from 'react'
import './App.css';
import ColorPicker from './components/colorPicker';

const title = "color Picker"

class App extends Component {
  render() {
    return (
      <div style={{border: 2 }}>
        <h8k-navbar header= {title}></h8k-navbar>
           {this.props.initialSelectedColor}
           <ColorPicker
           colorPickerOptions= {this.props.colorPickerOptions}
           initialSelectedColor={this.props.initialSelectedColor}
           />
      </div>
     
    );
  }
}


export default App;
