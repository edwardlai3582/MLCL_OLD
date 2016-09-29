import React from 'react'
import { connect } from 'react-redux'
import { removeWanted } from '../actions'

//import '../styles/Figure.css'

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
        <div>
            WANTLIST

            <ul>
                {wantArray.map(figure =>
                    <li key={figure.id}>
                        {figure.name}
                        <button onClick={() => {dispatch(removeWanted(figure.id))}} >
                            {'Remove from Want list'}
                        </button>
                    </li>
                )}       
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
  wanted: state.wanted    
})

export default connect( mapStateToProps, null)(WantList)
