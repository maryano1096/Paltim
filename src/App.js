import React from "react";
import "./App.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { withTranslation } from 'react-i18next';
import i18next from "i18next";
let stateB = [];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
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
      floor0av:"",
      floor1av:"",
      floor2av:"",
      floor3av:"",
      floor4av:"",
      floor5av:"",
      floor6av:"",
    };
    this.callApi = this.callApi.bind(this);
  }
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
      .then((res) => this.setState({ api: res }))
      .then((res) => this.changeLanguageEn())
  } 
  componentDidMount() {
    if(stateB.length === 0){
      this.callApi();  
    } else {
      this.setState({api: stateB.api, room1: stateB.room1, room2: stateB.room2, room3: stateB.room3, room4: stateB.room4,
      floorL1: stateB.floorL1, floorL2: stateB.floorL2, floorL3: stateB.floorL3, floorL4: stateB.floorL4, floorL5: stateB.floorL5
      , floorL6: stateB.floorL6, floorL7: stateB.floorL7, bathroom1: stateB.bathroom1, bathroom2: stateB.bathroom2,pageNumber : stateB.pageNumber,
      language: stateB.language})
    }
  }
  componentDidUpdate(){
    let div = document.getElementById("content");
    let pageNumber = document.getElementById(stateB.pageNumber);
    let outof = document.getElementById("pageoutof")
    let checkboxes = new Array;
    checkboxes[0] = document.getElementById("checkboxroom1");
    checkboxes[1] = document.getElementById("checkboxroom2");
    checkboxes[2] = document.getElementById("checkboxroom3");
    checkboxes[3] = document.getElementById("checkboxroom4");
    checkboxes[4] = document.getElementById("checkboxfloorL1");
    checkboxes[5] = document.getElementById("checkboxfloorL2");
    checkboxes[6] = document.getElementById("checkboxfloorL3");
    checkboxes[7] = document.getElementById("checkboxfloorL4");
    checkboxes[8] = document.getElementById("checkboxfloorL5");
    checkboxes[9] = document.getElementById("checkboxfloorL6");
    checkboxes[10] = document.getElementById("checkboxfloorL7");
    checkboxes[11] = document.getElementById("checkboxbathroom1");
    checkboxes[12] = document.getElementById("checkboxbathroom2");
    let states = [this.state.room1,this.state.room2,this.state.room3,this.state.room4,this.state.floorL1,this.state.floorL2,this.state.floorL3,
      this.state.floorL4,this.state.floorL5,this.state.floorL6,this.state.floorL7,this.state.bathroom1,this.state.bathroom2]
    if(div){
      div.style.maxHeight = div.scrollHeight + "px";
      document.getElementById("plusminus").className = "fa fa-minus";
    }
    if(this.state.api){
    let pageNumbers = [];
      for (
        let i = 1;
        i <= this.state.api[0].numberOfItems / this.state.postsPerPage + 1;
        i++
      ) {
        pageNumbers.push(i);
      }
    
    if(pageNumber && stateB.pageNumber === this.state.pageNumber){
      for(var i = 1; i <= pageNumbers.length; ++i){
        document.getElementById(i).style.color = "black";
      }
      pageNumber.style.color =  "#e3b85f";
    }
  }
    if(outof && stateB.length !== 0){
      outof.innerHTML = stateB.pageNumber;
    }
    for(let i = 0; i <checkboxes.length; ++i){
      if(checkboxes[i] && states[i] === true){
        checkboxes[i].checked = "true";
      }
    }
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
      .then((res) => this.setState({ api: res }))
  }
  changePage(e) {
    this.setState(
      { pageNumber: e.target.innerHTML, lastone: e.target.innerHTML },
      () => {
        this.sendRequest();
      }
    );
    let pageNumbers = [];
      for (
        let i = 1;
        i <= this.state.api[0].numberOfItems / this.state.postsPerPage + 1;
        i++
      ) {
        pageNumbers.push(i);
      }
    for(var i = 1; i <= pageNumbers.length; ++i){
      document.getElementById(i).style.color = "black";
    }

    let pagination = document.getElementById(e.target.innerHTML);
    if(pagination){
      pagination.style.color = "#e3b85f"
    }
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
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
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
      this.sendRequest();
    });
  }
  handleForward() {
    if (this.state.pageNumber < 7) {
      this.setState({ pageNumber: this.state.pageNumber - -1 }, () => {
        this.sendRequest();
      });
      let pageNumbers = [];
      for (
        let i = 1;
        i <= this.state.api[0].numberOfItems / this.state.postsPerPage + 1;
        i++
      ) {
        pageNumbers.push(i);
      }
      for(var i = 1; i <= pageNumbers.length; ++i){
        document.getElementById(i).style.color = "black";
      } 
      if(this.state.pageNumber + 1 < 8){
    document.getElementById(this.state.pageNumber + 1).style.color = "#e3b85f";
      }
    }
  }
  handleBackwards() {
    if (this.state.pageNumber > 0) {
      this.setState({ pageNumber: this.state.pageNumber - 1 }, () => {
        this.sendRequest();
      });
      let pageNumbers = [];
    for (
      let i = 1;
      i <= this.state.api[0].numberOfItems / this.state.postsPerPage + 1;
      i++
    ) {
      pageNumbers.push(i);
    }
    for(var i = 1; i <= pageNumbers.length; ++i){
      document.getElementById(i).style.color = "black";
    }
    if(this.state.pageNumber - 1 > 0){
  document.getElementById(this.state.pageNumber - 1).style.color = "#e3b85f";
    }
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
  render() {
    if (this.state.api !== "") {
      console.log(this.state.pageNumber)
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
      const rowEvents = {
        onClick: (e, row, rowIndex) => {
          this.props.history.push("apartments/:" + row.APPCODE)
          stateB = this.state;
        },
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
      let roomsclicked = false;
      let floorclicked = false;
      if(this.state.floorL1 === true || this.state.floorL2 === true || this.state.floorL3 === true || this.state.floorL4 === true || this.state.floorL5 === true || 
        this.state.floorL6 === true || this.state.floorL7 === true ){
         floorclicked = true;
      }
      if(this.state.room1 === true || this.state.room2=== true || this.state.room3 === true || this.state.room4 === true){
       roomsclicked = true;
      }
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <button className="langbutton1"  onClick={this.changeLanguageEn.bind(this)}>EN</button>
            <button className="langbutton2"  onClick={this.changeLanguageRo.bind(this)}>RO</button>
            <div>
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
              </div>
              <div className="content" id="content">
                <div className="card">
                  <div className="card-body" style={{marginLeft: "-10px"}}>
                    <h5
                      className="card-title"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", marginLeft: "5px"  }}
                    >
                    </h5>
                    <h6 style={{ marginLeft: "5px",marginTop: "-25px" }}>
                      {" "}
                      <i className="fas fa-bed"> </i> {t('number_of_rooms')}
                    </h6>
                    {roomnumbers.map((room) => {
                      return (
                        <div key={room} id="rooms">
                         <label className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={"checkboxroom" + room}
                            name={"room" + room}
                            onChange={this.handleCheckboxChange.bind(this)}
                          ></input>
                        <span className="check" id="check"></span>
                          
                         
                          {room}{" "}
                          {room === "1" ? (
                            <label htmlFor={"checkboxroom" + room} style={{ display: "inline"}}>
                              {t('room')} {this.state.language === "en" ? <div style={{ display: "inline"}}> &nbsp;&nbsp;</div> : null}&gt; {t('available')} :{" "}
                            </label>
                          ) : (
                            <label htmlFor={"checkboxroom" + room}  style={{ marginBottom: "0px" }} id={"checkboxlabel" + room}>{t('rooms')} &gt; {t('available')} : </label>
                          )}
                          {room === "1" ? (
                            <label
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {roomsclicked === true && floorclicked === false ? this.state.api[0].countroom1f : this.state.api[0].countroom1}
                            </label>
                          ) : null}
                          {room === "2" ? (
                            <label
                              className="count"
                              style={{ display: "inline"}}
                            >
                              {" "}
                              {roomsclicked === true && floorclicked === false ? this.state.api[0].countroom2f : this.state.api[0].countroom2}
                            </label>
                          ) : null}
                          {room === "3" ? (
                            <div
                              className="count"
                              style={{ display: "inline"}}
                            >
                              {" "}
                              {roomsclicked === true && floorclicked === false ? this.state.api[0].countroom3f : this.state.api[0].countroom3}
                            </div>
                          ) : null}
                          {room === "4" ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {roomsclicked === true && floorclicked === false ? this.state.api[0].countroom4f : this.state.api[0].countroom4}
                             
                            </div>
                          ) : null}
                           </label>
                        </div>
                      );
                    })}
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i className="far fa-building"></i> {t('building')}
                    </h6>
                    <div style={{ marginTop: "0px" }}>
                    <label className="checkbox">
                      <input
                      style={{ marginTop: "0px" }}
                        type="checkbox"
                        id="building1"
                        name="building1"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label htmlFor='building1' style={{ marginBottom: "0px" }}> {t('specific_building')} C1 &gt; {t('available')} : </label>
                      <div style={{ display: "inline" }} className="count">
                        {" "}
                        {this.state.api[0].countbuilding1}
                      </div>
                      <span className="check"></span>
                      </label>
                    </div>
                    
                    <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="building2"
                        disabled="disabled"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <label> {t('specific_building')} C2 &gt; {t('coming_soon')}</label>
                      <span className="checkd"></span>
                      </label>
                    </div>
                    
                    <hr></hr>
                    <div className="container">
                      <h6 style={{ marginLeft: "-10px" }}>
                        <i className="fas fa-layer-group"></i> {t('floor_level')}
                      </h6>
                      <div className="" style={{ marginLeft: "-15px" }}>
                        {floornumbers.map((floor) => {
                          return (
                            <div key={floor}>
                              <label className="checkbox">
                              <input
                                type="checkbox"
                                id={"checkboxfloor" + floor}
                                name={"floor" + floor}
                                onChange={this.handleCheckboxChange.bind(this)}
                              ></input>
                              <span className="check" ></span>
                              <label  htmlFor={"checkboxfloor" + floor} style={{ marginBottom: "-10px" }}> {floor === "L1" ? <label  htmlFor={"checkboxfloor" + floor}>{t('floor')} 1</label> : <label  htmlFor={"checkboxfloor" + floor}>{t('floor')} {floor.slice(1,2)  }</label>} &gt; {t('available')} :</label>
                              {floor === "L1" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked  === false ?  this.state.api[0].countfloor2f : this.state.api[0].countfloor2}
                                </div>
                              ) : null}
                              {floor === "L2" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked  === false ?  this.state.api[0].countfloor2f : this.state.api[0].countfloor2}
                                </div>
                              ) : null}
                              {floor === "L3" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked  === false ?  this.state.api[0].countfloor3f : this.state.api[0].countfloor3}
                                </div>
                              ) : null}
                              {floor === "L4" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked === false ?  this.state.api[0].countfloor4f : this.state.api[0].countfloor4}
                                </div>
                              ) : null}
                              {floor === "L5" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked  === false ?  this.state.api[0].countfloor5f : this.state.api[0].countfloor5}
                                </div>
                              ) : null}
                              {floor === "L6" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked  === false ?  this.state.api[0].countfloor6f : this.state.api[0].countfloor6}
                                </div>
                              ) : null}
                              {floor === "L7" ? (
                                <div
                                  className="count"
                                  style={{ display: "inline" }}
                                >
                                  {" "}
                                  {floorclicked === true && roomsclicked === false ?  this.state.api[0].countfloor7f : this.state.api[0].countfloor7}
                                </div>
                              ) : null}

                              </label>
                            </div>
                            
                          );
                        })}
                      </div>
                    </div>
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i className="fas fa-restroom"></i> {t('bathrooms')}
                    </h6>
                    {bathroomsnumbers.map((bathroom) => {
                      return (
                        <div key={bathroom}>
                          <label className="checkbox">
                          <input
                            type="checkbox"
                            id={"checkboxbathroom" + bathroom}
                            name={"bathroom" + bathroom}
                            onChange={this.handleCheckboxChange.bind(this)}
                          ></input>
                          <span className="check"></span>
                          <label  htmlFor={"checkboxbathroom" + bathroom} style={{ marginBottom: "-10px" }}> {bathroom} { bathroom === '1' ? t('bathroom') : t('bathrooms')}{" "}
                          {this.state.language === "en" && bathroom === '1' ? <div style={{ display: "inline" }}>&nbsp;&nbsp;</div> : null} 
                          {this.state.language === "ro" && bathroom === '2' ? <div style={{ display: "inline" }}>&nbsp;&nbsp;</div> : null} 
                          
                          &gt; {t('available')} : </label>
                          {bathroom === '1' ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {this.state.api[0].countbathroom1}
                            </div>
                          ) : null}
                          {bathroom === '2' ? (
                            <div
                              className="count"
                              style={{ display: "inline" }}
                            >
                              {" "}
                              {this.state.api[0].countbathroom2}
                            </div>
                          ) : null}
                          </label>
                        </div>
                      );
                    })}
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i className="fas fa-ruler-combined"></i> {t('surface')}
                    </h6>
                    <p
                      style={{ marginLeft: "5px", fontWeight: "1000" }}
                      className="count"
                    >
                      {this.state.sliderValues[0]}{t('sqm')}{this.state.language === "ro" ? <sup>2</sup>: null} - {" "}
                      {this.state.sliderValues[1]}{t('sqm')}{this.state.language === "ro" ? <sup>2</sup>: null}
                    </p>
                    <div className="slider">
                    <Range
                      className="slider"
                       trackStyle={[{ backgroundColor: '#1f4f4f' }, { backgroundColor: '#1f4f4f' }]}
                       handleStyle={[{ backgroundColor: '#1f4f4f',borderColor:'#1f4f4f' }, { backgroundColor: '#1f4f4f',borderColor:'#1f4f4f' }]}
                       railStyle={{ backgroundColor: '#e3b85f' }}
                       dotStyle={{borderColor:'#e3b85f'}}
                       activeDotStyle={{borderColor:'#e3b85f'}}
                      min={40}
                      max={123}
                      pushable={5}
                      onChange={this.handleSlider.bind(this)}
                      defaultValue={this.state.sliderValues}
                    ></Range>
                    </div>
                    <hr></hr>
                    <h6 style={{ marginLeft: "5px" }}>
                      {" "}
                      <i className="fas fa-lock-open"></i> {t('status')}
                    </h6>
                    <div>
                      <label className="checkbox">
                      <input
                        type="checkbox"
                        id="checkboxforsale"
                        name="forsale"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <span className="check"></span>
                      <label  htmlFor="checkboxforsale" style={{ marginBottom: "-10px" }}>
                        {" "}
                        {t('for_sale')} &gt; {t('available')} :{" "}
                        {this.state.api[0].countforsale}
                      </label>
                      </label>
                    </div>
                    <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="sold"
                        disabled="disabled"
                        onChange={this.handleCheckboxChange.bind(this)}
                      ></input>
                      <span className="checkd"></span>
                      <label> 
                        {t('sold')}
                      </label>
                      </label>
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
            <div className="tablep">
              <BootstrapTable
                className="table"
                keyField="ID"
                data={this.state.api}
                columns={this.state.language === "en" ? columns : columnsro}
                bordered={false}
                rowEvents={rowEvents}
                
              />
                </div>         
            <div id="d-flex" className="d-flex">
                <nav data-pagination>
                  <ul className="pagination pagination-lg">
                  <h6 id="outof" className="outof">
                    {t("page")}
                    <span className="pageoutof">{this.state.pageNumber}</span> {t("out_of")} {pageNumbers.length} - {" "}
                    {this.state.api[0].numberOfItems}{" "}{t("apartments_available")}
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
                      <p>{item}</p>
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
                    
                    points="1 1 6 6 1 11"
                  ></polyline>
                </svg>
              </ul>            
            </nav>
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
