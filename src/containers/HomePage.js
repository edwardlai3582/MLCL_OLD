import React from 'react'
import { connect } from 'react-redux'

import MLData from '../ML.json'
//import '../styles/Figure.css'

let HomePAge = ({ dispatch, owned}) => {

    return (
        <div>
            HOME
            <section>
                {Object.getOwnPropertyNames(owned).length}
                /
                {MLData.Hasbro.series.reduce( (previousValue, currentValue, currentIndex, array) => {
                return currentValue.figures.length + previousValue;
                }, 0)}
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
  owned: state.owned    
})

export default connect( mapStateToProps, null)(HomePAge)
