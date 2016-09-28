import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOwned, removeOwned } from '../actions'

import '../styles/Figure.css'

let Figure = ({ dispatch, figureData, owned}) => {
    
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
    </div>
  )
}

Figure.propTypes = {
  figureData: PropTypes.object,
}
const mapStateToProps = (state) => ({
  owned: state.owned
})

export default connect( mapStateToProps, null)(Figure)
