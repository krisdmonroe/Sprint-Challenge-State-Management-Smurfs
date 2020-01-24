import React from 'react';
import { connect } from 'react-redux'
import { deleteSmurfs } from '../actions/actions';



const Smurf = (props) => {
  
    console.log('this is props in Smurf', props)
    return (
        <div>
          
          <div >
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age} Years old</p>
            <p>{props.smurf.height}</p>
            <button onClick={() =>{props.deleteSmurfs(props.smurf.id)}}>Delete Smurf</button>
            </div>
        </div> 
    )
}
const mapStateToProps = (state) => {
    return {
       key:state
    }
  }
  
export default connect(mapStateToProps, {deleteSmurfs})(Smurf)