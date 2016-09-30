import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import '../styles/Series.css'
import Figure from '../containers/Figure'

//const Series = ({seriesData, owned}) => (
class Series extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({show: !this.state.show});
    }  
    
    render(){
        let seriesData = this.props.seriesData;
        let owned = this.props.owned;
        let ulWrapperClass = this.state.show? "ulWrapper show" : "ulWrapper";
        let buttonText =  this.state.show? "HIDE" : "SHOW";

        return(
            <div className="seriesWrapper">
                <section className="seriesTitleWrapper">
                    <button onClick={this.handleClick} className="showbutton">
                        {buttonText}
                    </button>
                    <h6 className="seriesName">
                        {seriesData.seriesname}
                    </h6>
                    <div className="seriesComplete">
                        {seriesData.figures.reduce( (previousValue, currentValue, currentIndex, array) => {
                            if(currentValue.id in owned){
                                return previousValue + 1;    
                            }
                            return previousValue;
                        }, 0)}
                        /
                        {seriesData.figures.length}
                    </div>
                </section>
                <section  className={ulWrapperClass} >    
                    <ul className={ "" } >
                        {seriesData.figures.map(figure =>
                          <li key={figure.id}>
                            <Figure figureData={figure} />    
                          </li>
                        )}       
                    </ul>
                </section>
            </div>        
        );
    }
}

Series.propTypes = {
  seriesData: PropTypes.object,
}

const mapStateToProps = (state) => ({
  owned: state.owned   
})

export default connect( mapStateToProps, null)(Series)
