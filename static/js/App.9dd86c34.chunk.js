(window["webpackJsonpgogo-react"]=window["webpackJsonpgogo-react"]||[]).push([[0],{111:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 2018 All Rights Reserved.","user.login-title":"Login","user.register":"Register","user.forgot-password":"Forgot Password","user.email":"E-mail","user.password":"Password","user.forgot-password-question":"Forget password?","user.fullname":"Full Name","user.login-button":"LOGIN","user.register-button":"REGISTER","user.reset-password-button":"RESET","user.buy":"BUY","user.username":"Username","menu.app":"Home","menu.dashboards":"Dashboards","menu.gogo":"Gogo","menu.start":"Start","menu.second-menu":"Second Menu","menu.second":"Second","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Survey","menu.todo":"Todo","menu.search":"Search","menu.docs":"Docs","menu.blank-page":"Blank Page","pages.error-title":"Ooops... looks like an error occurred!","pages.error-code":"Error code","pages.go-back-home":"GO BACK HOME"}},115:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(6),r=function(){var e=a.b;if(localStorage.getItem("direction")){var t=localStorage.getItem("direction");"rtl"!==t&&"ltr"!==t||(e=t)}return{direction:e,isRtl:"rtl"===e}},o=function(e){var t="ltr";"rtl"!==e&&"ltr"!==e||(t=e),localStorage.setItem("direction",t)}},143:function(e,t){},151:function(e,t){},158:function(e,t){},160:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 Todos los derechos reservados.","user.login-title":"Iniciar sesi\xf3n","user.register":"Registro","user.forgot-password":"Se te olvid\xf3 tu contrase\xf1a","user.email":"Email","user.password":"Contrase\xf1a","user.forgot-password-question":"\xbfContrase\xf1a olvidada?","user.fullname":"Nombre completo","user.login-button":"INICIAR SESI\xd3N","user.register-button":"REGISTRO","user.reset-password-button":"REINICIAR","user.buy":"COMPRAR","user.username":"Nombre de Usuario","menu.app":"Inicio","menu.dashboards":"Tableros","menu.gogo":"Gogo","menu.start":"Comienzo","menu.second-menu":"Segundo men\xfa","menu.second":"Segundo","menu.ui":"IU","menu.charts":"Gr\xe1ficos","menu.chat":"Chatea","menu.survey":"Encuesta","menu.todo":"Notas","menu.search":"B\xfasqueda","menu.docs":"Docs","menu.blank-page":"Blank Page","pages.error-title":"Vaya, parece que ha ocurrido un error!","pages.error-code":"C\xf3digo de error","pages.go-back-home":"REGRESAR A INICIO"}},289:function(e,t,n){"use strict";n.r(t);var a=n(68),r=n(69),o=n(72),i=n(70),c=n(71),s=n(1),u=n.n(s),l=n(26),m=n(25),d=n(14),f=n(84),p=n(17),g=n(110),h=n.n(g),b=n(111),v=n.n(b);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var O={messages:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},v.a),locale:"en-US",data:h.a},E=n(159),j=n.n(E),C=n(160);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var N={en:O,es:{messages:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.n(C).a),locale:"es-ES",data:j.a},enrtl:{messages:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},v.a),locale:"en-US",data:h.a}};Object(f.c)(N.en.data),Object(f.c)(N.es.data),Object(f.c)(N.enrtl.data);var x=N,R=n(73),S=n(16),P=n.n(S),D=n(6),T=n(274),I=n(275),q=n(276),L=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this))).getContainer=function(){return P.a.findDOMNode(Object(R.a)(n))},n.toggle=function(e){e.preventDefault();var t=n.state.isOpen;t?n.removeEvents():n.addEvents(),n.setState({isOpen:!t})},n.changeThemeColor=function(e,t){e.preventDefault(),localStorage.setItem(D.k,t),n.toggle(e),setTimeout(function(){window.location.reload()},500)},n.addEvents=function(){["click","touchstart"].forEach(function(e){return document.addEventListener(e,n.handleDocumentClick,!0)})},n.removeEvents=function(){["click","touchstart"].forEach(function(e){return document.removeEventListener(e,n.handleDocumentClick,!0)})},n.handleDocumentClick=function(e){var t=n.getContainer();t.contains(e.target)||t===e.target||n.toggle(e)},n.changeRadius=function(e){"flat"===e?document.body.classList.remove("rounded"):document.body.classList.add("rounded"),n.setState({radius:e}),localStorage.setItem(D.l,e)},n.state={isOpen:!1,selectedColor:localStorage.getItem(D.k),radius:localStorage.getItem(D.l)||"rounded"},n.removeEvents(),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.changeRadius(this.state.radius)}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedColor,a=t.radius;return u.a.createElement("div",{className:"theme-colors ".concat(this.state.isOpen?"shown":"")},u.a.createElement("div",{className:"p-4"},u.a.createElement("p",{className:"text-muted mb-2"},"Light Theme"),u.a.createElement("div",{className:"d-flex flex-row justify-content-between mb-4"},["purple","blue","green","orange","red"].map(function(t){return u.a.createElement("a",{key:"light.".concat(t),href:"#light.".concat(t),className:"theme-color theme-color-".concat(t," ").concat(n==="light.".concat(t)?"active":""),onClick:function(n){return e.changeThemeColor(n,"light.".concat(t))}},u.a.createElement("span",null,"`light.$",t,"`"))})),u.a.createElement("p",{className:"text-muted mb-2"},"Dark Theme"),u.a.createElement("div",{className:"d-flex flex-row justify-content-between"},["purple","blue","green","orange","red"].map(function(t){return u.a.createElement("a",{key:"dark.".concat(t),href:"#dark.".concat(t),className:"theme-color theme-color-".concat(t," ").concat(n==="dark.".concat(t)?"active":""),onClick:function(n){return e.changeThemeColor(n,"dark.".concat(t))}},u.a.createElement("span",null,"`dark.$",t,"`"))}))),u.a.createElement("div",{className:" pb-0 pl-4 pt-4"},u.a.createElement(T.a,null,u.a.createElement(I.a,{for:"radiusRadio"},"Border Radius "),u.a.createElement("div",null,u.a.createElement(q.a,{type:"radio",name:"radiusRadio",id:"rounded",label:"Rounded",inline:!0,defaultChecked:"rounded"===a,onChange:function(){return e.changeRadius("rounded")}}),u.a.createElement(q.a,{type:"radio",name:"radiusRadio",id:"flat",label:"Flat",inline:!0,defaultChecked:"flat"===a,onChange:function(){return e.changeRadius("flat")}})))),u.a.createElement("a",{href:"#section",className:"theme-button",onClick:this.toggle}," ",u.a.createElement("i",{className:"simple-icon-magic-wand"})," "))}}]),t}(s.Component),H=n(162),G="change",A="primary",U="secondary",M="info",B="success",F="warning",z="error",J=new(function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).listNotify=[],e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,n,a,r,o){this.create({type:A,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"secondary",value:function(e,t,n,a,r,o){this.create({type:U,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"info",value:function(e,t,n,a,r,o){this.create({type:M,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"success",value:function(e,t,n,a,r,o){this.create({type:B,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"warning",value:function(e,t,n,a,r,o){this.create({type:F,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"error",value:function(e,t,n,a,r,o){this.create({type:z,message:e,title:t,timeOut:n,onClick:a,priority:r,customClassName:o})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter(function(t){return e.id!==t.id}),this.emitChange()}},{key:"emitChange",value:function(){this.emit(G,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(G,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(G,e)}}]),t}(H.EventEmitter)),W=n(294),$=n(291),K=n(65),V=n.n(K),Y=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=function(){var e=n.props.timeOut;0!==e&&(n.timer=setTimeout(n.requestHide,e))},n.componentWillUnmount=function(){n.timer&&clearTimeout(n.timer)},n.handleClick=function(){var e=n.props.onClick;e&&e(),n.requestHide()},n.requestHide=function(){var e=n.props.onRequestHide;e&&e()},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.message,a=this.props.title,r=V()(["notification","notification-".concat(t),this.props.customClassName]);return a=a?u.a.createElement("h4",{className:"title"},a):null,u.a.createElement("div",{className:r,onClick:this.handleClick},u.a.createElement("div",{className:"notification-message",role:"alert"},a,u.a.createElement("div",{className:"message"},n)))}}]),t}(u.a.Component);Y.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var Q=Y,X=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).handleRequestHide=function(e){return function(){var t=n.props.onRequestHide;t&&t(e)}},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,a=t.enterTimeout,r=t.leaveTimeout,o=V()("notification-container",{"notification-container-empty":0===n.length});return u.a.createElement("div",{className:o},u.a.createElement(W.a,null,n.map(function(t){var n=t.id||(new Date).getTime();return u.a.createElement($.a,{classNames:"notification",key:n,timeout:{exit:r,enter:a}},u.a.createElement(Q,{key:n,type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName}))})))}}]),t}(u.a.Component);X.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var Z=X,_=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={notifications:[]},n.componentWillUnmount=function(){J.removeChangeListener(n.handleStoreChange)},n.handleStoreChange=function(e){n.setState({notifications:e})},n.handleRequestHide=function(e){J.remove(e)},J.addChangeListener(n.handleStoreChange),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,a=t.leaveTimeout;return u.a.createElement(Z,{enterTimeout:n,leaveTimeout:a,notifications:e,onRequestHide:this.handleRequestHide})}}]),t}(u.a.Component);_.defaultProps={enterTimeout:400,leaveTimeout:400};var ee=_,te=n(115),ne=u.a.lazy(function(){return n.e(5).then(n.bind(null,277))}),ae=u.a.lazy(function(){return Promise.all([n.e(14),n.e(6)]).then(n.bind(null,288))}),re=u.a.lazy(function(){return n.e(7).then(n.bind(null,292))}),oe=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(o.a)(this,Object(i.a)(t).call(this,e)),Object(te.a)().isRtl?(document.body.classList.add("rtl"),document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.body.classList.remove("rtl")),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.locale,t=x[e];return u.a.createElement("div",{className:"h-100"},u.a.createElement(f.b,{locale:t.locale,messages:t.messages},u.a.createElement(u.a.Fragment,null,u.a.createElement(ee,null),D.f&&u.a.createElement(L,null),u.a.createElement(s.Suspense,{fallback:u.a.createElement("div",{className:"loading"})},u.a.createElement(m.a,{basename:"/gestell"},u.a.createElement(d.d,null,u.a.createElement(d.b,{path:"/app",render:function(e){return u.a.createElement(ae,e)}}),u.a.createElement(d.b,{path:"/error",exact:!0,render:function(e){return u.a.createElement(re,e)}}),u.a.createElement(d.b,{path:"/",exact:!0,render:function(e){return u.a.createElement(ne,e)}}),u.a.createElement(d.a,{to:"/error"})))))))}}]),t}(s.Component);t.default=Object(l.b)(function(e){return{locale:e.settings.locale}},{})(oe)}}]);
//# sourceMappingURL=App.9dd86c34.chunk.js.map