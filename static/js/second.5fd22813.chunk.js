(window["webpackJsonpgogo-react"]=window["webpackJsonpgogo-react"]||[]).push([[3],{138:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return f});var n=t(58),r=t(59),s=t(63),c=t(60),l=t(62),o=t(1),u=t.n(o),i=t(81),m=t(66),d=t(67),b=t(70),f=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(i.a,null,u.a.createElement(d.a,{xxs:"12"},u.a.createElement(b.a,{heading:"menu.second",match:this.props.match}),u.a.createElement(d.b,{className:"mb-5"}))),u.a.createElement(i.a,null,u.a.createElement(d.a,{xxs:"12",className:"mb-4"},u.a.createElement("p",null,u.a.createElement(m.a,{id:"menu.second"})))))}}]),a}(o.Component)},67:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(4),c=t(7),l=t(68),o=t.n(l),u=t(10),i=t.n(u),m=t(55),d=t.n(m),b=t(56),f=i.a.oneOfType([i.a.number,i.a.string]),g=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),p={tag:b.k,xs:g,sm:g,md:g,lg:g,xl:g,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,u=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach(function(a,n){var r=e[a];if(delete u[a],r||""===r){var s=!n;if(o()(r)){var c,l=s?"-":"-"+a+"-",m=v(s,a,r.size);i.push(Object(b.h)(d()(((c={})[m]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c)),t))}else{var f=v(s,a,r);i.push(f)}}}),i.length||i.push("col");var m=Object(b.h)(d()(a,i),t);return r.a.createElement(l,Object(s.a)({},u,{className:m}))};E.propTypes=p,E.defaultProps=h;var N=E;t.d(a,"a",function(){return O}),t.d(a,"b",function(){return j});var O=function(e){return r.a.createElement(N,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},j=function(e){return r.a.createElement("div",{className:"separator ".concat(e.className)})}},70:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(4),c=t(7),l=t(10),o=t.n(l),u=t(55),i=t.n(u),m=t(56),d={tag:m.k,listTag:m.k,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,l=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],b=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(m.h)(i()(a),n),g=Object(m.h)(i()("breadcrumb",t),n);return r.a.createElement(o,Object(s.a)({},b,{className:f,"aria-label":d}),r.a.createElement(u,{className:g},l))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var f=b,g={tag:m.k,active:o.a.bool,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.active,l=e.tag,o=Object(c.a)(e,["className","cssModule","active","tag"]),u=Object(m.h)(i()(a,!!n&&"active","breadcrumb-item"),t);return r.a.createElement(l,Object(s.a)({},o,{className:u,"aria-current":n?"page":void 0}))};p.propTypes=g,p.defaultProps={tag:"li"};var h=p,v=t(65),E=t(66),N=function(e){return r.a.createElement(E.a,{id:"menu.".concat(e)})},O=function(e,a,t){return 0===t?"":e.split(a)[0]+a},j=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(function(e){return-1===e.indexOf(":")})),r.a.createElement(n.Fragment,null,r.a.createElement(f,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map(function(e,n){return r.a.createElement(h,{key:n,active:t.length===n+1},t.length!==n+1?r.a.createElement(v.b,{to:"/"+O(a,e,n)},N(e)):N(e))})))};a.a=function(e){var a=e.heading,t=e.match;return r.a.createElement(n.Fragment,null,a&&r.a.createElement("h1",null,r.a.createElement(E.a,{id:a})),r.a.createElement(j,{match:t}))}},81:function(e,a,t){"use strict";var n=t(4),r=t(7),s=t(1),c=t.n(s),l=t(10),o=t.n(l),u=t(55),i=t.n(u),m=t(56),d={tag:m.k,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},b=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,l=e.tag,o=e.form,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.h)(i()(a,s?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(l,Object(n.a)({},u,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=second.5fd22813.chunk.js.map