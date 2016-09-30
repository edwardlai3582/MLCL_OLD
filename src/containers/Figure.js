import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOwned, removeOwned, addWanted, removeWanted } from '../actions'

import '../styles/Figure.css'

let Figure = ({ dispatch, figureData, owned, wanted}) => {
    
    return (
        <div className="figureWrapper">
        
  <section title=".roundedOne">
    <div className="roundedOne">
      <input type="checkbox" id={figureData.id} value="None" checked={(figureData.id in owned)} onChange={() => {
                if(figureData.id in owned){
                    dispatch(removeOwned(figureData.id))
                }
                else{
                    dispatch(addOwned(figureData))    
                }
            }} />
      <label htmlFor={figureData.id}></label>
    </div>
  </section>        

            <div className="figureName" >
                {figureData.name}
            </div>
            <button className="figureButton" onClick={() => {
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
