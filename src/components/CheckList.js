import React from 'react'
import { connect } from 'react-redux'
import '../styles/CheckList.css'
import MLData from '../ML.json'
import Series from './Series'

const CheckList = ({owned,wanted}) => (
    <section className="topLevelChildrenWrapper">
        { MLData.Hasbro.series.map(series =>
            <Series key={series.seriesname} seriesData={series} />
        )}      
    </section>
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

