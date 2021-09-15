import React from "react";
import "./App.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Modal, Button } from "react-bootstrap";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { withTranslation } from 'react-i18next';
import i18next from "i18next";


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/paltimapi.php",
      api: "",
      room1: false,
      room2: false,
      room3: false,
      room4: false,
      building1: false,
      building2: false,
      floorL1: false,
      floorL2: false,
      floorL3: false,
      floorL4: false,
      floorL5: false,
      floorL6: false,
      floorL7: false,
      bathroom1: false,
      bathroom2: false,
      forsale: false,
      sold: false,
      currentPage: 1,
      modalinfo: [],
      showmodal: false,
      show: false,
      sliderValues: [40, 123],
      pageNumber: 1,
      postsPerPage: 20,
      totalposts: 123,
      lastone: "",
      language:"en",
    };

    this.callApi = this.callApi.bind(this);
  }
  //Call API
  callApi() {
    fetch(this.state.url, {
      method: "POST",
      body: JSON.stringify({
        type: "all",
        room1: "da",
        postsPerPage: this.state.postsPerPage,
        pageNumber: this.state.pageNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ api: res }));
  }
  componentDidMount() {
    this.callApi();
  }
  componentDidUpdate(){
    let div = document.getElementById("content");
    div.style.maxHeight = div.scrollHeight + "px";
    document.getElementById("plusminus").className = "fa fa-minus";
  }
  handleCheckboxChange(e) {
    this.setState({ [e.target.name]: e.target.checked, pageNumber: 1 }, () => {
      this.sendRequest();
    });
  }
  handleSlider(sliderValues) {
    this.setState({ sliderValues, pageNumber: 1 }, () => {
      this.sendRequest();
    });
  }
  async sendRequest() {
    await fetch(this.state.url, {
      method: "POST",
      body: JSON.stringify({
        type: "sort",
        room1: this.state.room1,
        room2: this.state.room2,
        room3: this.state.room3,
        room4: this.state.room4,
        building1: this.state.building1,
        building2: this.state.building2,
        floor0: this.state.floorL1,
        floor1: this.state.floorL2,
        floor2: this.state.floorL3,
        floor3: this.state.floorL4,
        floor4: this.state.floorL5,
        floor5: this.state.floorL6,
        floor6: this.state.floorL7,
        bathroom1: this.state.bathroom1,
        bathroom2: this.state.bathroom2,
        surface1: this.state.sliderValues[0],
        surface2: this.state.sliderValues[1],
        forsale: this.state.forsale,
        sold: this.state.sold,
        pageNumber: this.state.pageNumber,
        postsPerPage: this.state.postsPerPage,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ api: res }));
  }
  changePage(e) {
    this.setState(
      { pageNumber: e.target.innerHTML, lastone: e.target.innerHTML },
      () => {
        this.sendRequest();
      }
    );
  }
  display() {
    let div = document.getElementById("content");
    if (div.style.maxHeight) {
      div.style.maxHeight = null;
      document.getElementById("plusminus").className = "fa fa-plus";
    } else {
      div.style.maxHeight = div.scrollHeight + "px";
      document.getElementById("plusminus").className = "fa fa-minus";
    }
  }
  resetFilters() {
    document.getElementById("checkboxroom1").checked = false;
    document.getElementById("checkboxroom2").checked = false;
    document.getElementById("checkboxroom3").checked = false;
    document.getElementById("checkboxroom4").checked = false;
    document.getElementById("checkboxfloorL1").checked = false;
    document.getElementById("checkboxfloorL2").checked = false;
    document.getElementById("checkboxfloorL3").checked = false;
    document.getElementById("checkboxfloorL4").checked = false;
    document.getElementById("checkboxfloorL5").checked = false;
    document.getElementById("checkboxfloorL6").checked = false;
    document.getElementById("checkboxfloorL7").checked = false;
    document.getElementById("checkboxbathroom1").checked = false;
    document.getElementById("checkboxbathroom2").checked = false;
    document.getElementById("checkboxforsale").checked = false;
    this.setState({
      room1: false,
      room2: false,
      room3: false,
      room4: false,
      building1: false,
      floorL1: false,
      floorL2: false,
      floorL3: false,
      floorL4: false,
      floorL5: false,
      floorL6: false,
      floorL7: false,
      bathroom1: false,
      bathroom2: false,
      forsale: false,
      sold: false,
      sliderValues: [40, 123],
    });
    this.callApi();
  }
  handleSelect(e) {
    this.setState({ postsPerPage: e.target.value, pageNumber: 1 }, () => {
      console.log(this.state.postsPerPage);
      this.sendRequest();
      
    });
  }

  handleForward() {
    if (this.state.pageNumber < 13) {
      this.setState({ pageNumber: this.state.pageNumber - -1 }, () => {
        this.sendRequest();
      });
    }
  }
  handleBackwards() {
    if (this.state.pageNumber > 0) {
      this.setState({ pageNumber: this.state.pageNumber - 1 }, () => {
        this.sendRequest();
      });
    }
  }
  changeLanguageEn(){
    this.setState({language: "en"}, () => {
      i18next.changeLanguage("en");
    });
  }
  changeLanguageRo(){
    this.setState({language: "ro"}, () => {
      i18next.changeLanguage("ro");
    });
  }
  disable(e){
    console.log(e.target.innerHTML);
  }

  redirect(){
    this.setState({ redirect: "/someRoute" });
  }
  render() {
    if (this.state.api !== "") {
      let pageNumbers = [];
      if(this.state.api !== []){
      for (
        let i = 1;
        i <= this.state.api[0].numberOfItems / this.state.postsPerPage + 1;
        i++
      ) {
        pageNumbers.push(i);
      }
    }
      const handleClose = () => {
        this.setState({ show: false });
      };

      const handleShow = () => {
        this.setState({ show: true });
      };

      const rowEvents = {
        onClick: (e, row, rowIndex) => {
          window.location.href = "http://localhost:3000/pages/:" + row.APPCODE;
        },
      };

      const ModalContent = () => {
        return (
          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.modalinfo.APPCODE}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="nothing"
                    ></img>
                  </div>
                  <div className="col">
                    <hr></hr>
                    <h6 className="modalth6">
                      Surface : {this.state.modalinfo.SURFACE}
                    </h6>
                    <h6>Building : {this.state.modalinfo.BUILDING}</h6>
                    <h6>Floor : {this.state.modalinfo.LEVEL}</h6>
                    <h6>Number of rooms : {this.state.modalinfo.ROOMS}</h6>
                    <h6>Bathrooms : {this.state.modalinfo.BATHROOMS}</h6>
                    <h6 className="modalbh6">
                      Terrace : {this.state.modalinfo.TERRACE}
                    </h6>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        );
      };
      
     
      let columns = [
        { dataField: "APPCODE", text: "APPCODE" },
        { dataField: "BUILDING", text: "BUILDING" },
        { dataField: "LEVEL", text: "FLOOR" },
        { dataField: "ROOMS", text: "ROOMS" },
        { dataField: "BATHROOMS", text: "BATHROOMS" },
        { dataField: "SURFACE", text: "SURFACE(SQM)" },
        { dataField: "TERRACE", text: "TERRACE(SQM)" },
        { dataField: "ORIENTATION", text: "ORIENTATION" },
        { dataField: "STATUS", text: "STATUS" },
      ];

      let columnsro = [
        { dataField: "APPCODE", text: "CODAP." },
        { dataField: "BUILDING", text: "CLĂDIRI" },
        { dataField: "LEVEL", text: "ETAJ" },
        { dataField: "ROOMS", text: "CAMERE" },
        { dataField: "BATHROOMS", text: "BĂI" },
        { dataField: "SURFACE", text: "SUPRAFATA(M²)" },
        { dataField: "TERRACE", text: "TERASĂ(M²)" },
        { dataField: "ORIENTATION", text: "ORIENTARE" },
        { dataField: "STATUSRO", text: "STARE" },
      ];
    
      let bathroomsnumbers = ["1", "2"];
      let floornumbers = ["L1", "L2", "L3", "L4", "L5", "L6", "L7"];
      let roomnumbers = ["1", "2", "3", "4"];
      const {t} = this.props
      const available = [this.state.api[0].countroom1f,this.state.api[0].countroom2f,this.state.api[0].countroom3f,this.state.api[0].countroom4f,
      this.state.api[0].countbuilding1f,this.state.api[0].countfloor1f,this.state.api[0].countfloor2f,this.state.api[0].countfloor3f,this.state.api[0].countfloor4f,
      this.state.api[0].countfloor5f,this.state.api[0].countfloor6f,this.state.api[0].countfloor7f,this.state.api[0].countbathroom1f,this.state.api[0].countbathroom2f,
      this.state.api[0].countforsalef];
      let roomsclicked = false;
      let floorclicked = false;
      if(this.state.room1 == true || this.state.room2== true || this.state.room3 == true || this.state.room4 == true){
        roomsclicked = true;
      }
      if(this.state.floorL1 == true || this.state.floorL2 == true || this.state.floorL3 == true || this.state.floorL4 == true ||
        this.state.floorL5 == true || this.state.floorL6 == true || this.state.floorL7 == true){
        floorclicked = true;
      }
      
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button onClick={this.redirect.bind(this)}>Redirect</button>
            <button onClick={this.changeLanguageEn.bind(this)}>EN</button>
            <button onClick={this.changeLanguageRo.bind(this)}>RO</button>
              <button
                style={{color: "#e3b85f"}}
                type="button"
                className="collapsible"
                onClick={this.display.bind(this)}
              >
                {t('filters')}
                <i
                  className="fas fa-plus"
                  id="plusminus"
                  style={{ marginLeft: "170px" }}
                ></i>
              </button>
              <div className="content" id="content">
                <div className="card">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ fontFamily: "'Nunito Sans', sans-serif;", marginLeft: "5px"  }}
                    >
                    </h5>
                    <h6 style={{ marginLeft: "5px",marginTop: "-25px" }}>
                      {" "}
                      <i class="fas fa-bed"> </i> {t('number_of_rooms')}
                    </h6>
                    {roomnumbers.map((room) => {
                      return (
                        <div key={room} id="rooms">
                          <input
                            type="checkbox"
                            id={"checkboxroom" + room}
                            name={"room" + room}
                            onClick={this.disable.bind(this)}
                            onChange={this.handleCheckboxChange.bind(this)}
                          ></input>
                          {room}{" "}
                          {room === "1" ? (
                            <label for={"checkboxroom" + room} style={{ display: "inline"}}>
                              {t('room')} {this.state.language === "en" ? <div style={{ display: "inline"}}>&nbsp;&nbsp;</div> : null}&gt; {t('available')} :{" "}
                            </label>
                          ) : (
                            <label for={"checkboxroom" + room}  style={{ marginBottom: "0px" }} id={"checkboxlabel" + room}>{t('rooms')} &gt; {t('available')} : </label>
                          )}
                          {room === "1" ? (
                            <label
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {roomsclicked === true ?  available[0] : this.state.api[0].countroom1}
                            </label>
                          ) : null}
                          {room === "2" ? (
                            <label
                              className="count"
                              style={{ display: "inline"}}
                            >
                              {" "}
                              {roomsclicked === true ?  available[1] : this.state.api[0].countroom2}
                            </label>
                          ) : null}
                          {room === "3" ? (
                            <div
                              className="count"
                              style={{ display: "inline"}}
                            >
                              {" "}
                              {roomsclicked === true ?  available[2] : this.state.api[0].countroom3}
                            </div>
                          ) : null}
                          {room === "4" ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {roomsclicked === true ?  available[3] : this.state.api[0].countroom4}
                             
                            </div>
                          ) : null}
                           
                        </div>
                      );
                    })}
                    <hr ></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i class="far fa-building"></i> {t('building')}
                    </h6>
                    <div style={{ marginTop: "0px" }}>
                      <input
                      style={{ marginTop: "0px" }}
                        type="checkbox"
                        id="building1"
                        name="building1"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label for='building1' style={{ marginBottom: "0px" }}> {t('specific_building')} C1 &gt; {t('available')} : </label>
                      <div style={{ display: "inline" }} className="count">
                        {" "}
                        {available[4]}
                      </div>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="building2"
                        disabled="disabled"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label> {t('specific_building')} C2 &gt; {t('coming_soon')}</label>
                    </div>
                    <hr></hr>
                    <div className="container">
                      <h6 style={{ marginLeft: "-10px" }}>
                        <i class="fas fa-layer-group"></i> {t('floor_level')}
                      </h6>
                      <div className="" style={{ marginLeft: "-15px" }}>
                        {floornumbers.map((floor) => {
                          return (
                            <div key={floor}>
                              <input
                                type="checkbox"
                                id={"checkboxfloor" + floor}
                                name={"floor" + floor}
                                onChange={this.handleCheckboxChange.bind(this)}
                              ></input>
                              <label for={"checkboxfloor" + floor} style={{ marginBottom: "-10px" }}> {floor === "L1" ? <label for={"checkboxfloor" + floor}>{t('ground_floor')}</label> : <label for={"checkboxfloor" + floor}>{t('floor')} {floor.slice(1,2) - 1}</label>} &gt; {t('available')} :</label>
                              {floor == "L1" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor1}
                                </div>
                              ) : null}
                              {floor == "L2" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor2}
                                </div>
                              ) : null}
                              {floor == "L3" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor3}
                                </div>
                              ) : null}
                              {floor == "L4" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor4}
                                </div>
                              ) : null}
                              {floor == "L5" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor5}
                                </div>
                              ) : null}
                              {floor == "L6" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor6}
                                </div>
                              ) : null}
                              {floor == "L7" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {this.state.api[0].countfloor7}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i class="fas fa-restroom"></i> {t('bathrooms')}
                    </h6>
                    {bathroomsnumbers.map((bathroom) => {
                      return (
                        <div key={bathroom}>
                          <input
                            type="checkbox"
                            id={"checkboxbathroom" + bathroom}
                            name={"bathroom" + bathroom}
                            onChange={this.handleCheckboxChange.bind(this)}
                          ></input>
                          <label for={"checkboxbathroom" + bathroom} style={{ marginBottom: "-10px" }}> {bathroom} { bathroom == 1 ? t('bathroom') : t('bathrooms')}{" "}
                          {this.state.language == "en" && bathroom == 1 ? <div style={{ display: "inline" }}>&nbsp;&nbsp;</div> : null} 
                          {this.state.language == "ro" && bathroom == 2 ? <div style={{ display: "inline" }}>&nbsp;&nbsp;</div> : null} 
                          
                          &gt; {t('available')} : </label>
                          {bathroom == 1 ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {this.state.api[0].countbathroom1}
                            </div>
                          ) : null}
                          {bathroom == 2 ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {this.state.api[0].countbathroom2}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i class="fas fa-ruler-combined"></i> {t('surface')}
                    </h6>
                    <p
                      style={{ marginLeft: "5px", fontWeight: "1000" }}
                      className="count"
                    >
                      {this.state.sliderValues[0]}{t('sqm')}{this.state.language == "ro" ? <sup>2</sup>: null} - {" "}
                      {this.state.sliderValues[1]}{t('sqm')}{this.state.language == "ro" ? <sup>2</sup>: null}
                    </p>
                    <Range
                      min={40}
                      max={123}
                      pushable={5}
                      onChange={this.handleSlider.bind(this)}
                      defaultValue={this.state.sliderValues}
                    ></Range>
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i class="fas fa-lock-open"></i> {t('status')}
                    </h6>
                    <div>
                      <input
                        type="checkbox"
                        id="checkboxforsale"
                        name="forsale"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label for="checkboxforsale" style={{ marginBottom: "-10px" }}>
                        {" "}
                        {t('for_sale')} &gt; {t('available')} :{" "}
                        {available[14]}
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="sold"
                        disabled="disabled"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label> {t('sold')}</label>
                    </div>
                  </div>
                  <button
                    onClick={this.resetFilters.bind(this)}
                    className="reset"
                  >
                    {t('reset_filters')}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="overflowtable">
              <BootstrapTable
                className="table-borderless"
                keyField="ID"
                data={this.state.api}
                columns={this.state.language === "en" ? columns : columnsro}
                bordered={false}
                rowEvents={rowEvents}
                
              />
              </div>
              {this.state.show ? <ModalContent /> : null}
              <div id="d-flex" className="d-flex">
            <nav data-pagination>
              <ul className="pagination pagination-lg">
              <h6 id="outof" className="outof">
                    {" Page "}
                    {this.state.pageNumber} Out of {pageNumbers.length} - {" "}
                    {this.state.api[0].numberOfItems}{" "}{" Apartments available "}
                  </h6> 
                <svg
                  width="7"
                  onClick={this.handleBackwards.bind(this)}
                  className="svg1"
                  height="12"
                  viewBox="0 0 7 12"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="pagination-previous"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    stroke-width="1.2"
                    points="6 1 1 6 6 11"
                  ></polyline>
                </svg>
                  
                {pageNumbers.map((item) => {
                  return (
                    <li
                      key={item}
                      id={item}
                      value={item}
                      className="current"
                      onClick={this.changePage.bind(this)}
                    >
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
                <svg
                  onClick={this.handleForward.bind(this)}
                  width="7"
                  height="12"
                  className="svg2"
                  viewBox="0 0 7 12"
                  xmlns="http://www.w3.org/2000/svg"
                  data-svg="pagination-next"
                >
                  <polyline
                    fill="none"
                    stroke="#000"
                    stroke-width="1.2"
                    points="1 1 6 6 1 11"
                  ></polyline>
                </svg>
              </ul>            
            </nav>
          </div>
            </div>    
          </div>
         
        </div>
      );
    } else {
      return (
        <div>
      <h1>Fetching data</h1>
     
      </div>
      )
    }
  }
}

export default withTranslation()(Table);
