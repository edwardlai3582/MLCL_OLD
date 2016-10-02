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
        let whichSeries = [];
        
        if(this.state.toybiz){
            for (let key in MLData.Toybiz) {
                if (MLData.Toybiz.hasOwnProperty(key)) {
                    whichSeries.push(<h2 key={"Toybiz"+key} className="typeWrapper">{key}</h2>, ...MLData.Toybiz[key].map(series =>
                        <Series key={series.seriesname} seriesData={series} />
                    ));        
                }   
            }
        }
        else{
            for (let key in MLData.Hasbro) {
                if (MLData.Hasbro.hasOwnProperty(key)) {
                    whichSeries.push(<h2 key={"Hasbro"+key} className="typeWrapper">{key}</h2>, ...MLData.Hasbro[key].map(series =>
                        <Series key={series.seriesname} seriesData={series} />
                    ));        
                }   
            }            
        }
        
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


