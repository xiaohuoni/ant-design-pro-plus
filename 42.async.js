(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"/fC+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("uqIC"),i=s(r),l=n("nntF"),c=s(l);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=t.CopyToClipboard=function(e){function t(){var e,n,a,o;p(this,t);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n=a,a.onClick=function(e){var t=a.props,n=t.text,o=t.onCopy,r=t.children,l=t.options,s=i.default.Children.only(r),d=(0,c.default)(n,l);o&&o(n,d),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)},o=n,u(a,o)}return m(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=d(e,["text","onCopy","options","children"]),o=i.default.Children.only(t);return i.default.cloneElement(o,a({},n,{onClick:this.onClick}))}}]),t}(i.default.PureComponent);f.defaultProps={onCopy:void 0,options:void 0}},"4Ofr":function(e,t,n){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},"9AHN":function(e,t,n){"use strict";var a=n("/fC+"),o=a.CopyToClipboard;o.CopyToClipboard=o,e.exports=o},BFsb:function(e,t,n){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},PceP:function(e,t,n){"use strict";n.r(t);n("FIjW");var a,o,r,i=n("NoLE"),l=(n("4J7g"),n("KLrW")),c=(n("7DKw"),n("Nscp")),s=(n("J715"),n("v6rT")),d=(n("W8Mx"),n("ozzq")),p=(n("hAYM"),n("0wqQ")),u=(n("a1v2"),n("jn5m")),m=(n("n3tB"),n("mQZC")),f=(n("sOOk"),n("00vY")),g=n("43Yg"),h=n.n(g),y=n("/tCh"),b=n.n(y),v=n("scpF"),k=n.n(v),C=n("O/V9"),E=n.n(C),O=n("8aBX"),j=n.n(O),w=n("mK77"),x=n.n(w),M=(n("ZafF"),n("xZ+x")),S=n("uqIC"),N=n.n(S),F=n("suRj"),z=n("9AHN"),_=n("LneV"),H=n("B1rl"),I=n("BFsb"),B=n.n(I),P=n("zAuD"),A=n.n(P),T=n("BG4o"),L=n.n(T),D=n("4Ofr"),W=n.n(D),q=function(e){var t=e.color,n=e.check,a=L()(e,["color","check"]);return N.a.createElement("div",A()({},a,{style:{backgroundColor:t}}),n?N.a.createElement(p["default"],{type:"check"}):"")},J=function(e){var t=e.colors,n=e.title,a=e.value,o=e.onChange,r=t;return t||(r=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),N.a.createElement("div",{className:W.a.themeColor},N.a.createElement("h3",{className:W.a.title},n),N.a.createElement("div",{className:W.a.content},r.map(function(e){var t=e.key,n=e.color;return N.a.createElement(u["a"],{key:n,title:Object(F["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},N.a.createElement(q,{className:W.a.colorBlock,color:n,check:a===n,onClick:function(){return o&&o(n)}}))})))},R=J,Y=function(e){var t=e.value,n=e.onChange,a=e.list;return N.a.createElement("div",{className:B.a.blockChecbox,key:t},a.map(function(e){return N.a.createElement(u["a"],{title:e.title,key:e.key},N.a.createElement("div",{className:B.a.item,onClick:function(){return n(e.key)}},N.a.createElement("img",{src:e.url,alt:e.key}),N.a.createElement("div",{className:B.a.selectIcon,style:{display:t===e.key?"block":"none"}},N.a.createElement(p["default"],{type:"check"}))))}))},K=Y,Z=M["default"].Option,Q=function(e){var t=e.children,n=e.title,a=e.style;return N.a.createElement("div",{style:x()({},a,{marginBottom:24})},N.a.createElement("h3",{className:B.a.title},n),t)},V=(a=Object(_["connect"])(function(e){var t=e.setting;return{setting:t}}),a((r=function(e){function t(){var e,n;h()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=k()(this,(e=E()(t)).call.apply(e,[this].concat(o))),n.state={collapse:!1},n.getLayoutSetting=function(){var e=n.props.setting,t=e.contentWidth,a=e.fixedHeader,o=e.layout,r=e.autoHideHeader,i=e.fixSiderbar;return[{title:Object(F["formatMessage"])({id:"app.setting.content-width"}),action:N.a.createElement(M["default"],{value:t,size:"small",onSelect:function(e){return n.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===o?null:N.a.createElement(Z,{value:"Fixed"},Object(F["formatMessage"])({id:"app.setting.content-width.fixed"})),N.a.createElement(Z,{value:"Fluid"},Object(F["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(F["formatMessage"])({id:"app.setting.fixedheader"}),action:N.a.createElement(f["default"],{size:"small",checked:!!a,onChange:function(e){return n.changeSetting("fixedHeader",e)}})},{title:Object(F["formatMessage"])({id:"app.setting.hideheader"}),disabled:!a,disabledReason:Object(F["formatMessage"])({id:"app.setting.hideheader.hint"}),action:N.a.createElement(f["default"],{size:"small",checked:!!r,onChange:function(e){return n.changeSetting("autoHideHeader",e)}})},{title:Object(F["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(F["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:N.a.createElement(f["default"],{size:"small",checked:!!i,onChange:function(e){return n.changeSetting("fixSiderbar",e)}})}]},n.changeSetting=function(e,t){var a=n.props.setting,o=x()({},a);o[e]=t,"layout"===e?o.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(o.autoHideHeader=!1),n.setState(o,function(){var e=n.props.dispatch;e({type:"setting/changeSetting",payload:n.state})})},n.togglerContent=function(){var e=n.state.collapse;n.setState({collapse:!e})},n.renderLayoutSettingItem=function(e){var t=N.a.cloneElement(e.action,{disabled:e.disabled});return N.a.createElement(u["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},N.a.createElement(m["default"].Item,{actions:[t]},N.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},n}return j()(t,e),b()(t,[{key:"render",value:function(){var e=this,t=this.props.setting,n=t.navTheme,a=t.primaryColor,o=t.layout,r=t.colorWeak,u=this.state.collapse;return N.a.createElement(i["default"],{visible:u,width:300,onClose:this.togglerContent,placement:"right",handler:N.a.createElement("div",{className:B.a.handle,onClick:this.togglerContent},N.a.createElement(p["default"],{type:u?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},N.a.createElement("div",{className:B.a.content},N.a.createElement(Q,{title:Object(F["formatMessage"])({id:"app.setting.pagestyle"})},N.a.createElement(K,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(F["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(F["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:n,onChange:function(t){return e.changeSetting("navTheme",t)}})),N.a.createElement(R,{title:Object(F["formatMessage"])({id:"app.setting.themecolor"}),value:a,onChange:function(t){return e.changeSetting("primaryColor",t)}}),N.a.createElement(d["default"],null),N.a.createElement(Q,{title:Object(F["formatMessage"])({id:"app.setting.navigationmode"})},N.a.createElement(K,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(F["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(F["formatMessage"])({id:"app.setting.topmenu"})}],value:o,onChange:function(t){return e.changeSetting("layout",t)}})),N.a.createElement(m["default"],{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),N.a.createElement(d["default"],null),N.a.createElement(Q,{title:Object(F["formatMessage"])({id:"app.setting.othersettings"})},N.a.createElement(m["default"],{split:!1,renderItem:this.renderLayoutSettingItem,dataSource:[{title:Object(F["formatMessage"])({id:"app.setting.weakmode"}),action:N.a.createElement(f["default"],{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("colorWeak",t)}})}]})),N.a.createElement(d["default"],null),N.a.createElement(z["CopyToClipboard"],{text:JSON.stringify(Object(H["a"])(t,["colorWeak"]),null,2),onCopy:function(){return s["default"].success(Object(F["formatMessage"])({id:"app.setting.copyinfo"}))}},N.a.createElement(c["default"],{block:!0,icon:"copy"},Object(F["formatMessage"])({id:"app.setting.copy"}))),N.a.createElement(l["default"],{type:"warning",className:B.a.productionHint,message:N.a.createElement("div",null,Object(F["formatMessage"])({id:"app.setting.production.hint"})," ",N.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(S["Component"]),o=r))||o);t["default"]=V}}]);