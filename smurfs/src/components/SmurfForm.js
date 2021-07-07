import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions/actions'



const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name:'',
    age:'',
    height: ''
  })

     const handleChanges = e => {
        setSmurf({...smurf, [e.target.name] : e.target.value})
    }
    
    

    
    return (
        <div>
         <h1>Add a Smurf</h1>
         <form >
            <label>Name:</label>
            <input
            type='text'
            name='name'
            value={smurf.name}
            onChange={handleChanges}
            />
            <label>Age:</label>
            <input
            type='text'
            name='age'
            value={smurf.age}
            onChange={handleChanges}
            />
            <label>Height</label>
            <input
            type='text'
            name='height'
            value={smurf.height}
            onChange={handleChanges}
            />
            <button type='submit' onClick= {() => props.addSmurfs(smurf)}>Submit</button>
        </form>
        </div> 
    
    )
}


const mapStateToProps = (state) => {
    console.log('this is state', state.smurfs)
    return {
      data:state.smurfs
    }
  }
export default connect(mapStateToProps,{addSmurfs})(SmurfForm);