import React, { Component } from 'react';

class NlcEventForm4 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nlcSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nlcHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nlcSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            nlcSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nlcHandleSubmit = (ev)=>{
      ev.preventDefault();
      alert("Select:" + this.state.nlcSelectCheckBox);
  }
    render() {
        return (
            <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nlcSelectCheckBox.includes("Apple")}
              onChange={this.nlcHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nlcSelectCheckBox.includes("Banana")}
              onChange={this.nlcHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nlcSelectCheckBox.includes("Orange")}
              onChange={this.nlcHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nlcHandleSubmit}>Submit</button>
        </form>
      </div>
        );
    }
}

export default NlcEventForm4;
