import React, {Component} from 'react';
import AddAssignment from './AddAssignment';
import AddExam from './AddExam'


class MainContent extends Component{

    render(){

        const style = {
            padding : "70px"
        };

        return(
            <div className="MainContainer" style={style}>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <AddAssignment />
                    </div>
                    <div className="col-sm-1"/>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <AddExam />
                    </div>
                    <div className="col-sm-1"/>
                </div>
            </div>
        )
    }

}

export default MainContent;