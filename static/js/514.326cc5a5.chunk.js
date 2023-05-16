"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[514],{1973:function(n,e,t){t.d(e,{Z:function(){return T}});var i,r,o,a,l,s,c,d,u,p,x,h=t(2791),f=t(168),g=t(6444),Z=t(1087),m=t(6632),j=g.ZP.header(i||(i=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 55px 170px;\n"]))),v=g.ZP.img(r||(r=(0,f.Z)(["\n  min-width: 122px;\n  min-height: 80px;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"])),m),P=g.ZP.nav(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),b=g.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n"]))),y=g.ZP.li(l||(l=(0,f.Z)(["\n  font-size: 20px;\n  line-height: 26px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  text-align: end;\n"]))),k=(0,g.ZP)(Z.rU)(s||(s=(0,f.Z)(["\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=g.ZP.a(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),C=t(8144),z=t(7238),N=t(184),_=function(){var n=(0,h.useContext)(z.t),e=n.setOpenPopup,t=n.setClickedLink;return(0,N.jsxs)(j,{children:[(0,N.jsx)(k,{to:"/",children:(0,N.jsx)(v,{})}),(0,N.jsx)(P,{children:(0,N.jsx)(b,{children:C.FV.map((function(n){var i=n.id,r=n.title,o=n.path,a=n.isButton;return(0,N.jsx)(y,{children:!0===a?(0,N.jsx)(w,{onClick:function(n){return e(!0),t(n.target.textContent)},children:r}):(0,N.jsx)(k,{to:o,onClick:function(){return e(!1)},children:r})},i)}))})})]})},F=g.ZP.div(d||(d=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 175px;\n  border-bottom: 1px solid #dadada;\n  border-top: 1px solid #dadada;\n"]))),L=g.ZP.h3(u||(u=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 26px;\n  line-height: 32px;\n  letter-spacing: 1.3px;\n  text-transform: uppercase;\n\n  color: #393939;\n"]))),M=g.ZP.div(p||(p=(0,f.Z)(["\n  height: auto;\n"]))),O=(0,g.ZP)(Z.rU)(x||(x=(0,f.Z)(['\n  font-family: "Karla", sans-serif;\n  font-size: 16px;\n  line-heigth: 27px;\n  font-weigth: 400;\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),S=function(n){var e=n.title,t=void 0===e?"Products":e,i=C.xF.find((function(n){return n.title===t})).path;return(0,N.jsxs)(F,{children:[(0,N.jsx)(L,{children:"Error"===t?"404 "+t+" \u2014 Page Not Found":t}),(0,N.jsxs)(M,{children:[(0,N.jsx)(O,{to:"/",children:"Home"})," > ",(0,N.jsx)(O,{to:i,children:t})]})]})},B=t(3883),K=t(2959),U=t(8353),T=function(n){var e=n.children,t=n.navTitle,i=(0,h.useContext)(z.t).isOpenPopup;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{}),(0,N.jsx)(S,{title:t}),i?(0,N.jsx)(U.Z,{}):null,e,(0,N.jsx)(B.Z,{}),(0,N.jsx)(K.Z,{})]})}},3058:function(n,e,t){var i=t(1413),r=t(9439),o=t(2791),a=t(6048),l=t.n(a),s=t(9326),c=t(633),d=t(184);e.Z=function(n){var e=n.itemsPerPage,t=n.list,a=(0,o.useState)(0),u=(0,r.Z)(a,2),p=u[0],x=u[1],h=(0,s.X)(),f=(0,r.Z)(h,3),g=f[0],Z=f[1],m=f[2],j=p+e,v=t.slice(p,j),P=Math.ceil(t.length/e),b=function(n){var e=n.currentItems;return(0,d.jsx)(d.Fragment,{children:e&&e.map((function(n){var e,t,r=n.id,o=n.image,a=n.title,l=n.brand,s=n.price,u=n.alt;return(0,d.jsxs)(c.Zb,{children:[(0,d.jsxs)(c.hz,(0,i.Z)((0,i.Z)({},Z),{},{children:[g&&(null===(e=m.current)||void 0===e||null===(t=e.children[0])||void 0===t?void 0:t.alt)===a?(0,d.jsx)(c.T$,{children:(0,d.jsx)(c.Kk,{children:"Choose option"})}):null,(0,d.jsx)(c.Mo,{src:o,alt:u})]})),(0,d.jsxs)(c.FE,{children:[(0,d.jsx)(c.H7,{children:l}),(0,d.jsx)(c.ll,{children:a}),(0,d.jsx)(c.DL,{children:s})]})]},r)}))})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{currentItems:v}),(0,d.jsx)(l(),{breakLabel:"...",nextLabel:"Next >",onPageChange:function(n){var i=n.selected*e%t.length;x(i)},pageRangeDisplayed:5,pageCount:P,previousLabel:"< Previous",renderOnZeroPageCount:null,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})]})}},9326:function(n,e,t){t.d(e,{X:function(){return o}});var i=t(9439),r=t(2791),o=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],o=e[1],a=(0,r.useRef)(null);return[t,(0,r.useMemo)((function(){return{onMouseOver:function(n){return o(!0),a.current=n.target},onMouseOut:function(){return o(!1),a.current=null}}}),[o]),a]}},8514:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i,r,o,a,l,s,c,d,u,p,x,h=t(1973),f=t(3433),g=t(9439),Z=t(2791),m=t(5034),j=t(168),v=t(6444),P=v.ZP.div(i||(i=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  margin: 40px 0;\n  position: relative;\n"]))),b=v.ZP.section(r||(r=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 120px;\n  margin-bottom: 40px;\n"]))),y=(v.ZP.div(o||(o=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 20px 20px 20px;\n  background: #fff;\n  cursor: pointer;\n"]))),v.ZP.div(a||(a=(0,j.Z)(["\n  position: relative;\n  transition: all 0.25s linear;\n"]))),v.ZP.div(l||(l=(0,j.Z)(["\n  background-color: none;\n  width: 100%;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  transition: all 0.25s linear;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.75);\n  }\n"]))),v.ZP.a(s||(s=(0,j.Z)(['\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  color: #ffffff;\n\n  &::after {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 2px;\n    border-bottom: 1px solid #eee;\n    opacity: 0;\n    transition: all 0.25s linear;\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n']))),v.ZP.img(c||(c=(0,j.Z)(["\n  width: 100%;\n  object-fit: contain;\n  pointer-events: none;\n  display: block;\n"]))),v.ZP.div(d||(d=(0,j.Z)(["\n  margin-top: 25px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n"]))),v.ZP.h5(u||(u=(0,j.Z)(['\n  font-family: "Karla";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 23px;\n  color: #6f6f6f;\n']))),v.ZP.h4(p||(p=(0,j.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: #393939;\n  margin-bottom: 10px;\n"]))),v.ZP.span(x||(x=(0,j.Z)(['\n  font-family: "Karla";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  color: #6f6f6f;\n']))),t(3058)),k=t(8144),w=t(184),C=function(){var n=(0,Z.useState)([]),e=(0,g.Z)(n,2),t=e[0],i=e[1],r=(0,Z.useState)(0),o=(0,g.Z)(r,2),a=o[0],l=o[1],s=(0,Z.useState)(4),c=(0,g.Z)(s,2),d=c[0],u=c[1];return(0,w.jsx)(P,{children:(0,w.jsx)(b,{children:(0,w.jsx)(m.Z,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:function(){for(var n=a;n<=k.BU.length;n++)i([].concat((0,f.Z)(t),[k.BU.slice(a,d)])),l(a+4),u(d+4);return t.map((function(n,e){return(0,w.jsx)(y.Z,{itemsPerPage:16,list:n},e)}))}()})})})},z=function(){return(0,w.jsx)(h.Z,{navTitle:"Brands",children:(0,w.jsx)(C,{})})}}}]);
//# sourceMappingURL=514.326cc5a5.chunk.js.map