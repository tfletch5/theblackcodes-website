(this.webpackJsonptheblackcodes=this.webpackJsonptheblackcodes||[]).push([[6],{62:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(2),o=t(4),r=t(1),i=t.n(r),c=t(5),u=t.n(c),d=t(3),f={tag:d.h,fluid:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.fluid,i=Object(o.a)(e,["className","cssModule","tag","fluid"]),c=Object(d.e)(u()(a,"jumbotron",!!r&&"jumbotron-fluid"),t);return l.a.createElement(n,Object(s.a)({},i,{className:c}))};b.propTypes=f,b.defaultProps={tag:"div"};var p=b,m=t(63);t(20),a.a=function(e){var a=e.buttonText||"";return l.a.createElement("div",null,l.a.createElement(p,null,l.a.createElement("h1",{className:"display-3"},e.pageTitle),l.a.createElement("p",{className:"lead"},e.lead),l.a.createElement("hr",{className:"my-3"}),a&&l.a.createElement("p",{className:"lead"},l.a.createElement(m.a,{outline:!0,onClick:function(){return e.history.push("/about")}},e.buttonText))))}},63:function(e,a,t){"use strict";var n=t(2),l=t(4),s=t(12),o=t(6),r=t(0),i=t.n(r),c=t(1),u=t.n(c),d=t(5),f=t.n(d),b=t(3),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.h,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,o=e.className,r=e.close,c=e.cssModule,u=e.color,d=e.outline,p=e.size,m=e.tag,h=e.innerRef,g=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,j=Object(b.e)(f()(o,{close:r},r||"btn",r||v,!!p&&"btn-"+p,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),c);g.href&&"button"===m&&(m="a");var E=r?"Close":null;return i.a.createElement(m,Object(n.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:j,ref:h,onClick:this.onClick,"aria-label":t||E}))},a}(i.a.Component);m.propTypes=p,m.defaultProps={color:"secondary",tag:"button"},a.a=m},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(62),o=t(2),r=t(4),i=t(12),c=t(6),u=t(1),d=t.n(u),f=t(5),b=t.n(f),p=t(3),m={children:d.a.node,inline:d.a.bool,tag:p.h,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.inline,s=e.tag,i=e.innerRef,c=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.e)(b()(a,!!n&&"form-inline"),t);return l.a.createElement(s,Object(o.a)({},c,{ref:i,className:u}))},a}(n.Component);h.propTypes=m,h.defaultProps={tag:"form"};var g=h,v={children:d.a.node,row:d.a.bool,check:d.a.bool,inline:d.a.bool,disabled:d.a.bool,tag:p.h,className:d.a.string,cssModule:d.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.row,s=e.disabled,i=e.check,c=e.inline,u=e.tag,d=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.e)(b()(a,!!n&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!s)&&"disabled"),t);return"fieldset"===u&&(d.disabled=s),l.a.createElement(u,Object(o.a)({},d,{className:f}))};j.propTypes=v,j.defaultProps={tag:"div"};var E=j,y=d.a.oneOfType([d.a.number,d.a.string]),O=d.a.oneOfType([d.a.string,d.a.number,d.a.shape({size:y,order:y,offset:y})]),k={children:d.a.node,hidden:d.a.bool,check:d.a.bool,size:d.a.string,for:d.a.string,tag:p.h,className:d.a.string,cssModule:d.a.object,xs:O,sm:O,md:O,lg:O,xl:O,widths:d.a.array},N={tag:"label",widths:["xs","sm","md","lg","xl"]},x=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},z=function(e){var a=e.className,t=e.cssModule,n=e.hidden,s=e.widths,i=e.tag,c=e.check,u=e.size,d=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];s.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var s,o=!n;if(Object(p.d)(l)){var r,i=o?"-":"-"+a+"-";s=x(o,a,l.size),m.push(Object(p.e)(b()(((r={})[s]=l.size||""===l.size,r["order"+i+l.order]=l.order||0===l.order,r["offset"+i+l.offset]=l.offset||0===l.offset,r))),t)}else s=x(o,a,l),m.push(s)}}));var h=Object(p.e)(b()(a,!!n&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,m,!!m.length&&"col-form-label"),t);return l.a.createElement(i,Object(o.a)({htmlFor:d},f,{className:h}))};z.propTypes=k,z.defaultProps=N;var R=z,M={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.h,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},T=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,s=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,m=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(n)>-1,v=new RegExp("\\D","g"),j=u||("select"===n||"textarea"===n?n:"input"),E="form-control";f?(E+="-plaintext",j=u||"input"):"file"===n?E+="-file":g&&(E=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.i)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var y=Object(p.e)(b()(a,c&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,E),t);return("input"===j||u&&"function"===typeof u)&&(h.type=n),h.children&&!f&&"select"!==n&&"string"===typeof j&&"select"!==j&&(Object(p.i)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(j,Object(o.a)({},h,{ref:m,className:y}))},a}(l.a.Component);T.propTypes=M,T.defaultProps={type:"text"};var C=T,w=t(63),P=function(e){return l.a.createElement(g,null,l.a.createElement(E,null,l.a.createElement(R,{for:"exampleEmail"},l.a.createElement("h2",null,"Email")),l.a.createElement(C,{type:"email",name:"email",id:"exampleEmail",placeholder:"Plese enter your email..."})),l.a.createElement(E,null,l.a.createElement(R,{for:"name"},l.a.createElement("h2",null,"Name")),l.a.createElement(C,{type:"text",name:"name",id:"name",placeholder:"Please enter your Name..."})),l.a.createElement(E,null,l.a.createElement(R,{for:"exampleText"},l.a.createElement("h2",null,"Message")),l.a.createElement(C,{type:"textarea",name:"message",id:"exampleText",placeholder:"Please leave us a message..."})),l.a.createElement(w.a,null,l.a.createElement("p",null,"Submit")))};a.default=function(){return l.a.createElement("div",null,l.a.createElement(s.a,{pageTitle:"Contact Us",lead:"Stay in touch with The Black.Codes."}),l.a.createElement(P,null))}}}]);
//# sourceMappingURL=6.a5027e53.chunk.js.map