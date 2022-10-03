import React, { Component } from 'react';
import PersonStyle from "./Person.module.css";

class ListMapS extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }
    render() {
        const main ={
            margin:"-180px 0px 200px 230px",
            border:"solid",
            position:"fix"
         }
      return (
            <>
                <div className={PersonStyle.PersonBox} style={main}>
                    <h1>
                        <label>Name</label> :{" "}
                        <i>{this.props.name}</i>
                        <br/>
                        <label>Age</label>:<i>{this.props.age }</i>
                    </h1>
                </div>
            </>
        );
    }
}

export default ListMapS;