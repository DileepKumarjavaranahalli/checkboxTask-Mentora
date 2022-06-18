import React from "react";
import './App.css';
class SelectCheckbox extends React.Component {
    state = {
        list: [ 
          { id: 1, label: 'Mango', value: false },
          { id: 2, label: 'Banana', value: false },
          { id: 3, label: 'Grapes', value: false },
          { id: 4, label: 'Orange', value: true }
        ]
    };
  
    handleChange = e => {
      const id = e.target.id;
      this.setState(prevState => {
        return {
          list: prevState.list.map(
            li => (li.id === +id ? { ...li,
              value: !li.value
            } : li)
          )
        };
      });
    };
    handleClick = () => {
      this.setState(prevState => {
        return {
          list: prevState.list.filter(li => !li.value)
        };
      });
    };
    render() {
      return (
        <div className="App">
          {this.state.list.map(e => (
            <div key={e.id}>
              <input
                type="checkbox"
                id={e.id}
                checked={e.value}
                onChange={this.handleChange}
              />
              <label htmlFor={e.id}>{e.label}</label>
            </div>
          ))}
          <button className='buttonStyle' onClick={this.handleClick}>Delete</button>
        </div>
      );
    }
  }
  export default SelectCheckbox;