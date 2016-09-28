import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Figure from '../containers/Figure'

const Series = ({seriesData, owned}) => (
    <div>
        {seriesData.seriesname}
        {seriesData.figures.reduce( (previousValue, currentValue, currentIndex, array) => {
            if(currentValue.id in owned){
                return previousValue + 1;    
            }
            return previousValue;
        }, 0)}
        /
        {seriesData.figures.length}
        <ul>
            {seriesData.figures.map(figure =>
              <li key={figure.id}>
                <Figure figureData={figure} />    
              </li>
            )}       
        </ul>
    </div>
)

Series.propTypes = {
  seriesData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  owned: state.owned   
})

export default connect( mapStateToProps, null)(Series)
