(this.webpackJsonppaltimsalestool=this.webpackJsonppaltimsalestool||[]).push([[0],{107:function(e,t,s){},109:function(e,t,s){},251:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),o=s(13),l=s.n(o),n=(s(107),s(32)),c=s.n(n),r=s(45),h=s(3),d=s(6),u=s(7),b=s(16),m=s(10),j=s(14),p=(s(109),s(86)),f=s.n(p),x=s(253),g=s(254),O=s(99),y=(s(216),s(255)),v=s(33),k=s(1),L=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={url:"https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/paltimapi.php",api:"",room1:!1,room2:!1,room3:!1,room4:!1,building1:!1,building2:!1,floorL1:!1,floorL2:!1,floorL3:!1,floorL4:!1,floorL5:!1,floorL6:!1,floorL7:!1,bathroom1:!1,bathroom2:!1,forsale:!1,sold:!1,currentPage:1,modalinfo:[],showmodal:!1,show:!1,sliderValues:[40,123],pageNumber:1,postsPerPage:20,totalposts:123,lastone:"",language:"en"},a.callApi=a.callApi.bind(Object(b.a)(a)),a}return Object(u.a)(s,[{key:"callApi",value:function(){var e=this;fetch(this.state.url,{method:"POST",body:JSON.stringify({type:"all",room1:"da",postsPerPage:this.state.postsPerPage,pageNumber:this.state.pageNumber}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.setState({api:t})}))}},{key:"componentDidMount",value:function(){this.callApi()}},{key:"componentDidUpdate",value:function(){var e=document.getElementById("content");e.style.maxHeight=e.scrollHeight+"px",document.getElementById("plusminus").className="fa fa-minus"}},{key:"handleCheckboxChange",value:function(e){var t,s=this;this.setState((t={},Object(h.a)(t,e.target.name,e.target.checked),Object(h.a)(t,"pageNumber",1),t),(function(){s.sendRequest()}))}},{key:"handleSlider",value:function(e){var t=this;this.setState({sliderValues:e,pageNumber:1},(function(){t.sendRequest()}))}},{key:"sendRequest",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.state.url,{method:"POST",body:JSON.stringify({type:"sort",room1:this.state.room1,room2:this.state.room2,room3:this.state.room3,room4:this.state.room4,building1:this.state.building1,building2:this.state.building2,floor0:this.state.floorL1,floor1:this.state.floorL2,floor2:this.state.floorL3,floor3:this.state.floorL4,floor4:this.state.floorL5,floor5:this.state.floorL6,floor6:this.state.floorL7,bathroom1:this.state.bathroom1,bathroom2:this.state.bathroom2,surface1:this.state.sliderValues[0],surface2:this.state.sliderValues[1],forsale:this.state.forsale,sold:this.state.sold,pageNumber:this.state.pageNumber,postsPerPage:this.state.postsPerPage}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return t.setState({api:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePage",value:function(e){var t=this;this.setState({pageNumber:e.target.innerHTML,lastone:e.target.innerHTML},(function(){t.sendRequest()}))}},{key:"display",value:function(){var e=document.getElementById("content");e.style.maxHeight?(e.style.maxHeight=null,document.getElementById("plusminus").className="fa fa-plus"):(e.style.maxHeight=e.scrollHeight+"px",document.getElementById("plusminus").className="fa fa-minus")}},{key:"resetFilters",value:function(){document.getElementById("checkboxroom1").checked=!1,document.getElementById("checkboxroom2").checked=!1,document.getElementById("checkboxroom3").checked=!1,document.getElementById("checkboxroom4").checked=!1,document.getElementById("checkboxfloorL1").checked=!1,document.getElementById("checkboxfloorL2").checked=!1,document.getElementById("checkboxfloorL3").checked=!1,document.getElementById("checkboxfloorL4").checked=!1,document.getElementById("checkboxfloorL5").checked=!1,document.getElementById("checkboxfloorL6").checked=!1,document.getElementById("checkboxfloorL7").checked=!1,document.getElementById("checkboxbathroom1").checked=!1,document.getElementById("checkboxbathroom2").checked=!1,document.getElementById("checkboxforsale").checked=!1,this.setState({room1:!1,room2:!1,room3:!1,room4:!1,building1:!1,floorL1:!1,floorL2:!1,floorL3:!1,floorL4:!1,floorL5:!1,floorL6:!1,floorL7:!1,bathroom1:!1,bathroom2:!1,forsale:!1,sold:!1,sliderValues:[40,123]}),this.callApi()}},{key:"handleSelect",value:function(e){var t=this;this.setState({postsPerPage:e.target.value,pageNumber:1},(function(){console.log(t.state.postsPerPage),t.sendRequest()}))}},{key:"handleForward",value:function(){var e=this;this.state.pageNumber<13&&this.setState({pageNumber:this.state.pageNumber- -1},(function(){e.sendRequest()}))}},{key:"handleBackwards",value:function(){var e=this;this.state.pageNumber>0&&this.setState({pageNumber:this.state.pageNumber-1},(function(){e.sendRequest()}))}},{key:"changeLanguageEn",value:function(){this.setState({language:"en"},(function(){v.a.changeLanguage("en")}))}},{key:"changeLanguageRo",value:function(){this.setState({language:"ro"},(function(){v.a.changeLanguage("ro")}))}},{key:"disable",value:function(e){console.log(e.target.innerHTML)}},{key:"redirect",value:function(){this.setState({redirect:"/someRoute"})}},{key:"render",value:function(){var e=this;if(""!==this.state.api){var t=[];if(this.state.api!==[])for(var s=1;s<=this.state.api[0].numberOfItems/this.state.postsPerPage+1;s++)t.push(s);var a=function(){e.setState({show:!1})},i={onClick:function(e,t,s){window.location.href="http://localhost:3000/pages/:"+t.APPCODE}},o=function(){return Object(k.jsxs)(x.a,{show:e.state.show,onHide:a,children:[Object(k.jsx)(x.a.Header,{closeButton:!0,children:Object(k.jsx)(x.a.Title,{children:e.state.modalinfo.APPCODE})}),Object(k.jsx)(x.a.Body,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col",children:Object(k.jsx)("img",{src:"https://picsum.photos/200/300",alt:"nothing"})}),Object(k.jsxs)("div",{className:"col",children:[Object(k.jsx)("hr",{}),Object(k.jsxs)("h6",{className:"modalth6",children:["Surface : ",e.state.modalinfo.SURFACE]}),Object(k.jsxs)("h6",{children:["Building : ",e.state.modalinfo.BUILDING]}),Object(k.jsxs)("h6",{children:["Floor : ",e.state.modalinfo.LEVEL]}),Object(k.jsxs)("h6",{children:["Number of rooms : ",e.state.modalinfo.ROOMS]}),Object(k.jsxs)("h6",{children:["Bathrooms : ",e.state.modalinfo.BATHROOMS]}),Object(k.jsxs)("h6",{className:"modalbh6",children:["Terrace : ",e.state.modalinfo.TERRACE]}),Object(k.jsx)("hr",{})]})]})})}),Object(k.jsx)(x.a.Footer,{children:Object(k.jsx)(g.a,{variant:"secondary",onClick:a,children:"Close"})})]})},l=this.props.t,n=[this.state.api[0].countroom1f,this.state.api[0].countroom2f,this.state.api[0].countroom3f,this.state.api[0].countroom4f,this.state.api[0].countbuilding1f,this.state.api[0].countfloor1f,this.state.api[0].countfloor2f,this.state.api[0].countfloor3f,this.state.api[0].countfloor4f,this.state.api[0].countfloor5f,this.state.api[0].countfloor6f,this.state.api[0].countfloor7f,this.state.api[0].countbathroom1f,this.state.api[0].countbathroom2f,this.state.api[0].countforsalef],c=!1;return 1!=this.state.room1&&1!=this.state.room2&&1!=this.state.room3&&1!=this.state.room4||(c=!0),1!=this.state.floorL1&&1!=this.state.floorL2&&1!=this.state.floorL3&&1!=this.state.floorL4&&1!=this.state.floorL5&&1!=this.state.floorL6&&1!=this.state.floorL7||!0,Object(k.jsx)("div",{className:"container-fluid",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsxs)("div",{className:"col",children:[Object(k.jsx)("button",{onClick:this.redirect.bind(this),children:"Redirect"}),Object(k.jsx)("button",{onClick:this.changeLanguageEn.bind(this),children:"EN"}),Object(k.jsx)("button",{onClick:this.changeLanguageRo.bind(this),children:"RO"}),Object(k.jsxs)("button",{style:{color:"#e3b85f"},type:"button",className:"collapsible",onClick:this.display.bind(this),children:[l("filters"),Object(k.jsx)("i",{className:"fas fa-plus",id:"plusminus",style:{marginLeft:"170px"}})]}),Object(k.jsx)("div",{className:"content",id:"content",children:Object(k.jsxs)("div",{className:"card",children:[Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title",style:{fontFamily:"'Nunito Sans', sans-serif;",marginLeft:"5px"}}),Object(k.jsxs)("h6",{style:{marginLeft:"5px",marginTop:"-25px"},children:[" ",Object(k.jsx)("i",{class:"fas fa-bed",children:" "})," ",l("number_of_rooms")]}),["1","2","3","4"].map((function(t){return Object(k.jsxs)("div",{id:"rooms",children:[Object(k.jsx)("input",{type:"checkbox",id:"checkboxroom"+t,name:"room"+t,onClick:e.disable.bind(e),onChange:e.handleCheckboxChange.bind(e)}),t," ","1"===t?Object(k.jsxs)("label",{for:"checkboxroom"+t,style:{display:"inline"},children:[l("room")," ","en"===e.state.language?Object(k.jsx)("div",{style:{display:"inline"},children:"\xa0\xa0"}):null,"> ",l("available")," :"," "]}):Object(k.jsxs)("label",{for:"checkboxroom"+t,style:{marginBottom:"0px"},id:"checkboxlabel"+t,children:[l("rooms")," > ",l("available")," : "]}),"1"===t?Object(k.jsxs)("label",{className:"count",style:{display:"inline"},children:[" ",!0===c?n[0]:e.state.api[0].countroom1]}):null,"2"===t?Object(k.jsxs)("label",{className:"count",style:{display:"inline"},children:[" ",!0===c?n[1]:e.state.api[0].countroom2]}):null,"3"===t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",!0===c?n[2]:e.state.api[0].countroom3]}):null,"4"===t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",!0===c?n[3]:e.state.api[0].countroom4]}):null]},t)})),Object(k.jsx)("hr",{}),Object(k.jsxs)("h6",{style:{marginLeft:"5px"},children:[" ",Object(k.jsx)("i",{class:"far fa-building"})," ",l("building")]}),Object(k.jsxs)("div",{style:{marginTop:"0px"},children:[Object(k.jsx)("input",{style:{marginTop:"0px"},type:"checkbox",id:"building1",name:"building1",onChange:this.handleCheckboxChange.bind(this)}),Object(k.jsxs)("label",{for:"building1",style:{marginBottom:"0px"},children:[" ",l("specific_building")," C1 > ",l("available")," : "]}),Object(k.jsxs)("div",{style:{display:"inline"},className:"count",children:[" ",n[4]]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"checkbox",name:"building2",disabled:"disabled",onChange:this.handleCheckboxChange.bind(this)}),Object(k.jsxs)("label",{children:[" ",l("specific_building")," C2 > ",l("coming_soon")]})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("h6",{style:{marginLeft:"-10px"},children:[Object(k.jsx)("i",{class:"fas fa-layer-group"})," ",l("floor_level")]}),Object(k.jsx)("div",{className:"",style:{marginLeft:"-15px"},children:["L1","L2","L3","L4","L5","L6","L7"].map((function(t){return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"checkbox",id:"checkboxfloor"+t,name:"floor"+t,onChange:e.handleCheckboxChange.bind(e)}),Object(k.jsxs)("label",{for:"checkboxfloor"+t,style:{marginBottom:"-10px"},children:[" ","L1"===t?Object(k.jsx)("label",{for:"checkboxfloor"+t,children:l("ground_floor")}):Object(k.jsxs)("label",{for:"checkboxfloor"+t,children:[l("floor")," ",t.slice(1,2)-1]})," > ",l("available")," :"]}),"L1"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor1]}):null,"L2"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor2]}):null,"L3"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor3]}):null,"L4"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor4]}):null,"L5"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor5]}):null,"L6"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor6]}):null,"L7"==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countfloor7]}):null]},t)}))})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("h6",{style:{marginLeft:"5px"},children:[" ",Object(k.jsx)("i",{class:"fas fa-restroom"})," ",l("bathrooms")]}),["1","2"].map((function(t){return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"checkbox",id:"checkboxbathroom"+t,name:"bathroom"+t,onChange:e.handleCheckboxChange.bind(e)}),Object(k.jsxs)("label",{for:"checkboxbathroom"+t,style:{marginBottom:"-10px"},children:[" ",t," ",l(1==t?"bathroom":"bathrooms")," ","en"==e.state.language&&1==t?Object(k.jsx)("div",{style:{display:"inline"},children:"\xa0\xa0"}):null,"ro"==e.state.language&&2==t?Object(k.jsx)("div",{style:{display:"inline"},children:"\xa0\xa0"}):null,"> ",l("available")," : "]}),1==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countbathroom1]}):null,2==t?Object(k.jsxs)("div",{className:"count",style:{display:"inline"},children:[" ",e.state.api[0].countbathroom2]}):null]},t)})),Object(k.jsx)("hr",{}),Object(k.jsxs)("h6",{style:{marginLeft:"5px"},children:[" ",Object(k.jsx)("i",{class:"fas fa-ruler-combined"})," ",l("surface")]}),Object(k.jsxs)("p",{style:{marginLeft:"5px",fontWeight:"1000"},className:"count",children:[this.state.sliderValues[0],l("sqm"),"ro"==this.state.language?Object(k.jsx)("sup",{children:"2"}):null," - "," ",this.state.sliderValues[1],l("sqm"),"ro"==this.state.language?Object(k.jsx)("sup",{children:"2"}):null]}),Object(k.jsx)(O.a,{min:40,max:123,pushable:5,onChange:this.handleSlider.bind(this),defaultValue:this.state.sliderValues}),Object(k.jsx)("hr",{}),Object(k.jsxs)("h6",{style:{marginLeft:"5px"},children:[" ",Object(k.jsx)("i",{class:"fas fa-lock-open"})," ",l("status")]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"checkbox",id:"checkboxforsale",name:"forsale",onChange:this.handleCheckboxChange.bind(this)}),Object(k.jsxs)("label",{for:"checkboxforsale",style:{marginBottom:"-10px"},children:[" ",l("for_sale")," > ",l("available")," :"," ",n[14]]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"checkbox",name:"sold",disabled:"disabled",onChange:this.handleCheckboxChange.bind(this)}),Object(k.jsxs)("label",{children:[" ",l("sold")]})]})]}),Object(k.jsx)("button",{onClick:this.resetFilters.bind(this),className:"reset",children:l("reset_filters")})]})})]}),Object(k.jsxs)("div",{className:"col-9",children:[Object(k.jsx)("div",{className:"overflowtable",children:Object(k.jsx)(f.a,{className:"table-borderless",keyField:"ID",data:this.state.api,columns:"en"===this.state.language?[{dataField:"APPCODE",text:"APPCODE"},{dataField:"BUILDING",text:"BUILDING"},{dataField:"LEVEL",text:"FLOOR"},{dataField:"ROOMS",text:"ROOMS"},{dataField:"BATHROOMS",text:"BATHROOMS"},{dataField:"SURFACE",text:"SURFACE(SQM)"},{dataField:"TERRACE",text:"TERRACE(SQM)"},{dataField:"ORIENTATION",text:"ORIENTATION"},{dataField:"STATUS",text:"STATUS"}]:[{dataField:"APPCODE",text:"CODAP."},{dataField:"BUILDING",text:"CL\u0102DIRI"},{dataField:"LEVEL",text:"ETAJ"},{dataField:"ROOMS",text:"CAMERE"},{dataField:"BATHROOMS",text:"B\u0102I"},{dataField:"SURFACE",text:"SUPRAFATA(M\xb2)"},{dataField:"TERRACE",text:"TERAS\u0102(M\xb2)"},{dataField:"ORIENTATION",text:"ORIENTARE"},{dataField:"STATUSRO",text:"STARE"}],bordered:!1,rowEvents:i})}),this.state.show?Object(k.jsx)(o,{}):null,Object(k.jsx)("div",{id:"d-flex",className:"d-flex",children:Object(k.jsx)("nav",{"data-pagination":!0,children:Object(k.jsxs)("ul",{className:"pagination pagination-lg",children:[Object(k.jsxs)("h6",{id:"outof",className:"outof",children:[" Page ",this.state.pageNumber," Out of ",t.length," - "," ",this.state.api[0].numberOfItems," "," Apartments available "]}),Object(k.jsx)("svg",{width:"7",onClick:this.handleBackwards.bind(this),className:"svg1",height:"12",viewBox:"0 0 7 12",xmlns:"http://www.w3.org/2000/svg","data-svg":"pagination-previous",children:Object(k.jsx)("polyline",{fill:"none",stroke:"#000","stroke-width":"1.2",points:"6 1 1 6 6 11"})}),t.map((function(t){return Object(k.jsx)("li",{id:t,value:t,className:"current",onClick:e.changePage.bind(e),children:Object(k.jsx)("a",{href:"#",children:t})},t)})),Object(k.jsx)("svg",{onClick:this.handleForward.bind(this),width:"7",height:"12",className:"svg2",viewBox:"0 0 7 12",xmlns:"http://www.w3.org/2000/svg","data-svg":"pagination-next",children:Object(k.jsx)("polyline",{fill:"none",stroke:"#000","stroke-width":"1.2",points:"1 1 6 6 1 11"})})]})})})]})]})})}return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"Fetching data"})})}}]),s}(i.a.Component),N=Object(y.a)()(L),C=s(12),E=(s(225),s(244),function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={url:"https://localhost/phprest/paltimapi.php",image:"../images/de.jpg",appcode:"",api:"d",src:"https://marianadascalitei.dev.ascensys.ro/paltimsalestool/api/apartmentImagePlans/"},a.callApi=a.callApi.bind(Object(b.a)(a)),a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.callApi()}},{key:"callApi",value:function(){var e=this,t=this.props.match.params.id;t=t.slice(1,t.length),this.setState({appcode:t.slice(0,t.length)}),fetch(this.state.url,{method:"POST",body:JSON.stringify({type:"id",id:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.setState({api:t})}))}},{key:"downloadPlan",value:function(){window.location.href="https://localhost/phprest/download.php?da="+this.state.appcode}},{key:"render",value:function(){if("d"!==this.state.api&&0!==this.state.api.length){console.log(this.state.api.length);var e=this.state.src+this.state.appcode+".png";return Object(k.jsx)("div",{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col",children:Object(k.jsx)("img",{src:e,width:"900px",style:{marginLeft:"-150px"}})}),Object(k.jsxs)("div",{className:"col",children:[Object(k.jsxs)("h6",{className:"modalth6",style:{marginTop:"200px"},children:[Object(k.jsx)("h3",{children:this.state.appcode}),Object(k.jsx)("hr",{}),"Surface : ",Object(k.jsxs)("label",{style:{marginLeft:"195px"},children:[" ",this.state.api[0].SURFACE," "]})]}),Object(k.jsxs)("h6",{children:["Building : ",Object(k.jsxs)("label",{style:{marginLeft:"217px"},children:["  ",this.state.api[0].BUILDING]})]}),Object(k.jsxs)("h6",{children:["Floor :  ",Object(k.jsx)("label",{style:{marginLeft:"259px"},children:this.state.api[0].LEVEL})]}),Object(k.jsxs)("h6",{children:["Number of rooms : ",Object(k.jsxs)("label",{style:{marginLeft:"136px"},children:[" ",this.state.api[0].ROOMS]})]}),Object(k.jsxs)("h6",{children:["Bathrooms :  ",Object(k.jsx)("label",{style:{marginLeft:"207px"},children:this.state.api[0].BATHROOMS})]}),Object(k.jsxs)("h6",{className:"modalbh6",children:["Terrace :  ",Object(k.jsxs)("label",{style:{marginLeft:"210px"},children:[" ",this.state.api[0].TERRACE]})]}),Object(k.jsx)("hr",{}),Object(k.jsx)("button",{style:{width:"200px",height:"50px",borderRadius:"10px"},onClick:this.downloadPlan.bind(this),children:"Download Plan"})]})]})})})}return Object(k.jsx)("div",{})}}]),s}(a.Component)),S=Object(C.f)(E),R=s(36),B=s(96),A=s(100),w={en:{translation:s(97)},ro:{translation:s(98)}};v.a.use(B.a).use(A.a).use(R.e).init({resources:w,fallbackLng:["en"],detection:{checkWhitelist:!0},debug:!1,whitelist:["en","ro"],interpolation:{escapeValue:!1}});v.a;var F=s(60);l.a.render(Object(k.jsx)(F.a,{children:Object(k.jsxs)(C.c,{children:[Object(k.jsx)(C.a,{exact:!0,path:"/home",component:N}),Object(k.jsx)(C.a,{exact:!0,path:"/pages/:id",component:S})]})}),document.getElementById("root"))},97:function(e){e.exports=JSON.parse('{"filters":"Filters","number_of_rooms":"Number of rooms","room":"Room","rooms":"Rooms","available":"Available","building":"Buildings","specific_building":"Building","coming_soon":"Coming soon","floor_level":"Floor Level","floor":"Floor","ground_floor":"Ground Floor","bathrooms":"Bathrooms","bathroom":"Bathroom","surface":"Surface","sqm":"sqm","status":"Status","for_sale":"For Sale","sold":"Sold","reset_filters":"Reset filters"}')},98:function(e){e.exports=JSON.parse('{"filters":"Filtre","number_of_rooms":"Num\u0103rul de camere","room":"Camer\u0103 ","rooms":"Camere","available":"Disponibile","building":"Cl\u0103diri","specific_building":"Cl\u0103direa","coming_soon":"\xcen cur\xe2nd","floor_level":"Nivelul etajului","floor":"Etaj","ground_floor":"Parter","bathrooms":"B\u0103i","bathroom":"Baie","surface":"Suprafa\u021b\u0103","sqm":"m","status":"Stare","for_sale":"De v\xe2nzare","sold":"V\xe2ndute","reset_filters":"Reseteaz\u0103 filtrele"}')}},[[251,1,2]]]);
//# sourceMappingURL=main.85089224.chunk.js.map