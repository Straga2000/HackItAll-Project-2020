import React, {Component} from "react";



export default class Panel extends Component {

    render() {return(
        <div className={"card w-50"}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Panel title</h5>
                <p className={"card-text text-secondary"}>Some quick example text to build on the panel title and make up the bulk of the
                    panel's content.</p>
                <a className={"card-link"}>Card link</a>
                <a className={"card-link"}>Another link</a>
            </div>
        </div>
    );
    }
}
