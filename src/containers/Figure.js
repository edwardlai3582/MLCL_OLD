import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOwned, removeOwned, addWanted, removeWanted } from '../actions'

import '../styles/Figure.css'

let Figure = ({ dispatch, figureData, owned, wanted}) => {
    
  return (
    <div>
      <input type="checkbox" value="None" className="roundedTwo"  checked={(figureData.id in owned)} onClick={() => {
        if(figureData.id in owned){
            dispatch(removeOwned(figureData.id))
        }
        else{
            dispatch(addOwned(figureData))    
        }
        }} />
      {figureData.name}
        <button onClick={() => {
            if(figureData.id in wanted){
                dispatch(removeWanted(figureData.id))
            }
            else{
                dispatch(addWanted(figureData))    
            }
        }} >
            {(figureData.id in wanted)?'Remove from Want list':'Add to WANT list'}
        </button>
    </div>
  )
}

Figure.propTypes = {
  figureData: PropTypes.object,
}
const mapStateToProps = (state) => ({
  owned: state.owned,
  wanted: state.wanted    
})

export default connect( mapStateToProps, null)(Figure)
