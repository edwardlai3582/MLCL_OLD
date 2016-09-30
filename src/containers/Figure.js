import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOwned, removeOwned, addWanted, removeWanted } from '../actions'

import '../styles/Figure.css'

let Figure = ({ dispatch, figureData, owned, wanted}) => {
    
    return (
        <div className="figureWrapper">
        
            <div className="figureLeft">
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

            <div className="figureName" >
                {figureData.name}
            </div>
            </div>
            <button className={(figureData.id in wanted)?'figureButton remove':'figureButton add'} onClick={() => {
                if(figureData.id in wanted){
                    dispatch(removeWanted(figureData.id))
                }
                else{
                    dispatch(addWanted(figureData))    
                }
            }} >
                {(figureData.id in wanted)?'-':'+'}
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
