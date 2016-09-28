import React from 'react'
import { connect } from 'react-redux'

import MLData from '../ML.json'
import Series from './Series'

const CheckList = ({owned}) => (
    <div>
       {JSON.stringify(owned, null, 4)}
        { MLData.Hasbro.series.map(series =>
            <Series key={series.seriesname} seriesData={series} />
        )}      
    </div>
)

const mapStateToProps = (state) => ({
  owned: state.owned
})

export default connect( mapStateToProps, null)(CheckList)

