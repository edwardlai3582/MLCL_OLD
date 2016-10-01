import React from 'react'
import { connect } from 'react-redux'
import '../styles/CheckList.css'
import MLData from '../ML.json'
import Series from './Series'

class CheckList extends React.Component {
    constructor() {
        super();
        this.state = {
            toybiz: true
        };
    }
    
    handleClick(toybiz) {
        this.setState({toybiz: toybiz});
    }  
    
    render(){
        let toybizButtonClass = this.state.toybiz? "" : "notCurrent";
        let hasbroButtonClass = this.state.toybiz? "notCurrent" : "";
        let whichSeries = this.state.toybiz? MLData.Toybiz.series.map(series =>
                        <Series key={series.seriesname} seriesData={series} />
                    ) : MLData.Hasbro.series.map(series =>
                        <Series key={series.seriesname} seriesData={series} />
                    )
        
        return (
            <div>
                <div className="tOrHWrapper">
                    <button className={toybizButtonClass} onClick={
                        this.handleClick.bind(this, true)
                    }>
                        Toybiz
                    </button>
                    <button className={hasbroButtonClass} onClick={
                        this.handleClick.bind(this, false)
                    }>
                        Hasbro
                    </button>
                </div>
                <section className="topLevelChildrenWrapper">
                    { whichSeries }      
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  owned: state.owned,
  wanted: state.wanted    
})

export default connect( mapStateToProps, null)(CheckList)


