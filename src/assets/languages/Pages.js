import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { data } from 'jquery';

 class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "https://localhost/phprest/paltimapi.php",
            image: "../images/de.jpg",
            appcode:"",
            api: "d",
            src: "https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/apartmentImagePlans/"
        }
        this.callApi = this.callApi.bind(this);
    }
    componentDidMount() {
        this.callApi()
    }
    callApi() {
        let id = this.props.match.params.id;
        id = id.slice(1,id.length)
        this.setState({appcode: id.slice(0,id.length)});
        fetch(this.state.url, {
            method: "POST",
            body: JSON.stringify({
              type: "id",
              id: id
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((res) => this.setState({ api: res }));
      }
      downloadPlan(){
        window.location.href = "https://localhost/phprest/download.php?da=" + this.state.appcode;
    }
    render() {
        if (this.state.api !== "d" && this.state.api.length !== 0) {
            console.log(this.state.api.length)
        let src =this.state.src + this.state.appcode + ".png";
        return (
            <div >
                <div className="container" >
                <div className="row">
                  <div className="col">
                  <img  src={src} width="900px" style={{marginLeft: "-150px"}}/>
                  </div>
                  <div className="col">
                    <h6 className="modalth6" style={{marginTop: "200px"}}>
                        <h3>{this.state.appcode}</h3>
                        <hr></hr>
                      Surface : <label style={{marginLeft: "195px"}}> {this.state.api[0].SURFACE} </label>
                    </h6>
                    <h6>Building : <label style={{marginLeft: "217px"}}>  {this.state.api[0].BUILDING}</label></h6>
                    <h6>Floor :  <label style={{marginLeft: "259px"}}>{this.state.api[0].LEVEL}</label></h6>
                    <h6>Number of rooms : <label style={{marginLeft: "136px"}}> {this.state.api[0].ROOMS}</label></h6>
                    <h6>Bathrooms :  <label style={{marginLeft: "207px"}}>{this.state.api[0].BATHROOMS}</label></h6>
                    <h6 className="modalbh6">
                      Terrace :  <label style={{marginLeft: "210px"}}> {this.state.api[0].TERRACE}</label>
                    </h6>
                    <hr></hr>
                    <button style={{width: "200px", height:"50px", borderRadius: "10px"}} onClick={this.downloadPlan.bind(this)}>Download Plan</button>
                  </div>
                </div>
              </div>
                
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
}
export default withRouter(Pages)

