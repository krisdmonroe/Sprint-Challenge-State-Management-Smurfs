import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/actions'
import Smurf from './Smurf'
import { deleteSmurfs } from '../actions/actions'

const SmurfList = (props) => {
  
    console.log('this is props', props.data)
    return (
<div>
          {props.data.map(item =>
          <Smurf smurf={item} deleteSmurfs={deleteSmurfs}/>
            )}
            {/* {props.smurf && !props.isLoading && <h2>{props}</h2>} */}
            <button variant="contained" onClick={props.fetchSmurf}> Get A Smurf </button>
</div> 
    )
}


const mapStateToProps = (state) => {
    console.log('this is state', state.smurfs)
    return {
      data:state.smurfs
    }
  }
export default connect(mapStateToProps,{fetchSmurf, deleteSmurfs})(SmurfList);