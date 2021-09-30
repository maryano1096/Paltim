import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import i18next from "i18next";
import { withTranslation } from "react-i18next";
import ModalImage from "react-modal-image";
import {Helmet} from "react-helmet";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/admininterface.php",
      appcode: "",
      api: "d",
      src: "https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/apartmentImagePlans/",
    };
    this.callApi = this.callApi.bind(this);
  }
  componentDidMount() {
    this.callApi();
  }
  componentDidUpdate(){
    if(this.state.api){
      document.getElementById("og:description").setAttribute("content","dada")
      console.log(document.getElementById("og:description"))
    }
  }
  callApi() {
    let id = this.props.match.params.id;
    id = id.slice(1, id.length);
    this.setState({ appcode: id.slice(0, id.length) });
    fetch(this.state.url, {
      method: "POST",
      body: JSON.stringify({
        type: "id",
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ api: res }));
  }
  downloadPlan() {
   window.location.href = 'https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/download.php?da=' + this.state.api[0].APPCODE
  }
  changeLanguageRo() {
    this.setState({ language: "ro" }, () => {
      i18next.changeLanguage("ro");
    });
  }
  changeLanguageEn() {
    this.setState({ language: "en" }, () => {
      i18next.changeLanguage("en");
    });
  }
  goBack(){
    this.props.history.goBack(); 
  }
  render() {
    if (this.state.api !== "d" && this.state.api.length !== 0) {
      console.log(this.props.match.params.room1);           
      const { t } = this.props;
      return (
        <div>
          
          <div className="container">
            <button className="langbutton1" onClick={this.changeLanguageEn.bind(this)}>EN</button>
            <button className="langbutton2" onClick={this.changeLanguageRo.bind(this)}>RO</button>
            <button className="back-button"  onClick={this.goBack.bind(this)}>
            <i
              className="fas fa-times fa-3x"
            ></i>
            </button>
            <div className="row">
            <div className="img-magnifier-container" >
              <ModalImage className="img" smallSrcSet={this.state.api[0].IMAGE} hideDownload={true} hideZoom={true}></ModalImage>
              </div>
              <div className="info">
                <table
                  className="table table-borderless"
                  style={{ maxWidth: "500px;", marginLeft: "100px", marginTop: "-30px"  }}> 
                  <thead>
                  <div className="row-appcode">{this.state.api[0].APPCODE}</div>
                  <hr className="row-hr"></hr>
                    <tr>                    
                    </tr>
                  </thead >{" "}
                  <tr className="row-tr">
                    <td>{t('specific_building')}</td>{" "}
                    <td>
                      <span style={{marginLeft: "-90px"}}>{this.state.api[0].BUILDING}</span>
                    </td>
                  </tr>{" "}
                  <tr className="row-tr">
                    <td>{t('floor')}</td>{" "}
                    <td>
                      <span style={{marginLeft: "-90px"}}>{this.state.api[0].LEVEL}</span> 
                    </td>
                  </tr>{" "}
                  <tr className="row-tr">
                    <td>{t('rooms')}</td>{" "}
                    <td>
                      <span style={{marginLeft: "-90px"}}>{this.state.api[0].ROOMS}</span>
                    </td>
                  </tr>{" "}
                  <tr className="row-tr">
                    <td>{t('bathrooms')}</td>{" "}
                    <td>
                    <span style={{marginLeft: "-90px"}}>{this.state.api[0].BATHROOMS}</span>
                    </td>
                  </tr>{" "}
                  <tr className="row-tr">
                  <td>{t('surface')}</td>{" "}
                    <td>
                      <span style={{marginLeft: "-90px"}}>{this.state.api[0].SURFACE} {t('sqm')}</span> 
                    </td>
                  </tr>{" "}
                  <tr className="row-tr">
                    <td>{t('terrace')}</td>{" "}
                    <td>
                      <span style={{marginLeft: "-90px"}}>{this.state.api[0].TERRACE} {t('sqm')}</span> 
                    </td>
                  </tr>                  
                  <p className="row-usable">{t("usable_surface")}</p>
                  <hr className="row-hr"></hr>
                  <button
                className="download-plan"
                  onClick={this.downloadPlan.bind(this)}
                   >{t('download_plan')}
                </button>               
               </table>                
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withTranslation()(withRouter(Pages));
