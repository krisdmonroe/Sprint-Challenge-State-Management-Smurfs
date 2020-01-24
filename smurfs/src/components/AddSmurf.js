import React, { Component } from 'react';
import { connect } from 'react-redux';




class AddSmurf extends React.Component {
state = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}
     handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value})
    }
    
     handleSubmit = e => {
        e.preventDefault();
        this.setState(addSmurf)
      }

    render(){
    return (
        <div>
         <h1>Add a Smurf</h1>
         <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChanges}
            />
            <label>Age:</label>
            <input
            type='text'
            name='Age'
            value={this.state.age}
            onChange={this.handleChanges}
            />
            <label>Height</label>
            <input
            type='text'
            name='height'
            value={this.state.height}
            onChange={this.handleChanges}
            />
            <button type='submit'>Submit</button>
        </form>
        </div> 
    
    )
    }
}


const mapStateToProps = (state) => {
    console.log('this is state', state.smurfs)
    return {
      data:state.smurfs
    }
  }
export default connect(mapStateToProps,{addSmurf})(AddSmurf);