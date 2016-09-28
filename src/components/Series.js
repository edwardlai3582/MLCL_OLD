import React, { PropTypes } from 'react'
import Figure from '../containers/Figure'

const Series = ({seriesData}) => (
    <div>
        {seriesData.seriesname}
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

export default Series
