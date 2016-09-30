import React from 'react'
import { connect } from 'react-redux'
import { removeWanted } from '../actions'

import '../styles/WantList.css'

let WantList = ({ dispatch, wanted}) => {
    let wantArray=[];
    for (var key in wanted) {
        if (wanted.hasOwnProperty(key)) {
            wantArray.push(wanted[key]);
        }
    }
    wantArray.sort(function(a, b){        
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }
        return 0;
    });

    return (
        <section className="topLevelChildrenWrapper">
        <div className="wantlistWrapper">
            <h2>
                WANTLIST
            </h2>
            <ul>
                {wantArray.map(figure =>
                    <li key={figure.id} className="figureLi">
                        {figure.series}: {figure.name}
                        <button onClick={() => {dispatch(removeWanted(figure.id))}} >
                            {'Remove'}
                        </button>
                    </li>
                )}       
            </ul>
        </div>
        </section>    
    )
}

const mapStateToProps = (state) => ({
  wanted: state.wanted    
})

export default connect( mapStateToProps, null)(WantList)
