import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/actions'



const SmurfList = (props) => {
  
    console.log('this is props', props.data)
    return (
        <div>
          {props.data.map(smurf =>
          <div key={Date.now()}>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            </div>
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
export default connect(mapStateToProps,{fetchSmurf})(SmurfList);