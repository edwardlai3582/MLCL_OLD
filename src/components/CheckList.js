import React from 'react'
import { connect } from 'react-redux'

import MLData from '../ML.json'
import Series from './Series'

const CheckList = ({owned,wanted}) => (
    <div>


        { MLData.Hasbro.series.map(series =>
            <Series key={series.seriesname} seriesData={series} />
        )}      
    </div>
)

const mapStateToProps = (state) => ({
  owned: state.owned,
  wanted: state.wanted    
})

export default connect( mapStateToProps, null)(CheckList)

/*
       {JSON.stringify(owned, null, 4)}
       {JSON.stringify(wanted, null, 4)}
*/

