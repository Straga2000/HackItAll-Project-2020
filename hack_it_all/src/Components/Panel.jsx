import React, {Component} from "react";
import Draggable from "react-draggable";
import Dropdown from "react-dropdown";

export default class Panel extends Component {

    state = {
        info : this.props.info,
        paragraph : "",
        i : 0,
        val : "",
        photo : ""
    };
    constructor(props){
        super(props);
    }
select_option = (e) => {

    console.log(e.value);
    this.setState({ val : e.value });

    }
add_photo = (e) => {
    console.log(e.target.files[0]);
    this.setState({photo: e.target.files[0]});
}

handle_change = (e) => {

        console.log(e.target);
    this.setState({paragraf: e.target});

}


handleSubmit = (e) => {
        console.log(e.target.value);
        this.setState({paragraf: e.target});

}

    render() {
    return(
        <div>

        <Draggable>

            <div style={{width:"10%" ,height:"50%"}} className={"card w-25 "}>

                <div className={"card-body"}>
                    <div className={"group d-flex justify-content-center"}>
                        <h5 className={"card-title text-center"}>Note</h5>

                    </div>

                    {this.state.val=== ""?null:

                        this.state.val === "Text"?
                            this.state.paragraf !==""?

                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Text
                                    <input className="w-100 form-control "
                                           type="text"
                                           value={this.state.value}
                                           onBlur={this.handle_change}

                                    />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>:null:
                    this.state.photo === ""?

                    <input onChange={this.add_photo} className="w-100 form-control btn btn-outline-success"
                    type="file"
                    id="myfile" name="myfile"/>:null
                }


                    {this.state.paragraf!=""?
                        <p className="w-100" >{this.state.paragraf}</p>:null

                    }
                    {this.state.photo!=""?
                        <img className="w-100" src={URL.createObjectURL(this.state.photo)} /> : null

                    }

                </div>
                <div className="card-footer p-0"> { this.state.val==""?
                    <Dropdown onChange={this.select_option } className="dropdown-toggle btn btn-success w-100 h-25 m-0 p-0 rounded-0 " value={"Upload"} options={["Text","Photo"]}>



                </Dropdown>:null}

                </div>


            </div>
        </Draggable>
        </div>
    );
    }}

