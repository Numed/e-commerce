"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[295],{1973:function(n,e,t){t.d(e,{Z:function(){return D}});var i,r,o,a,l,s,c,d,p,x,h,u=t(2791),f=t(168),g=t(6444),Z=t(1087),m=t(6632),j=g.ZP.header(i||(i=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 55px 170px;\n"]))),v=g.ZP.img(r||(r=(0,f.Z)(["\n  min-width: 122px;\n  min-height: 80px;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"])),m),P=g.ZP.nav(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),y=g.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n"]))),b=g.ZP.li(l||(l=(0,f.Z)(["\n  font-size: 20px;\n  line-height: 26px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  text-align: end;\n"]))),k=(0,g.ZP)(Z.rU)(s||(s=(0,f.Z)(["\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=g.ZP.a(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),C=t(8890),z=t(7238),N=t(184),_=function(){var n=(0,u.useContext)(z.tH),e=n.setOpenPopup,t=n.setClickedLink;return(0,N.jsxs)(j,{children:[(0,N.jsx)(k,{to:"/",children:(0,N.jsx)(v,{})}),(0,N.jsx)(P,{children:(0,N.jsx)(y,{children:C.FV.map((function(n){var i=n.id,r=n.title,o=n.path,a=n.isButton;return(0,N.jsx)(b,{children:!0===a?(0,N.jsx)(w,{onClick:function(n){return e(!0),t(n.target.textContent)},children:r}):(0,N.jsx)(k,{to:o,onClick:function(){return e(!1)},children:r})},i)}))})})]})},F=g.ZP.div(d||(d=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 175px;\n  border-bottom: 1px solid #dadada;\n  border-top: 1px solid #dadada;\n"]))),L=g.ZP.h3(p||(p=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 26px;\n  line-height: 32px;\n  letter-spacing: 1.3px;\n  text-transform: uppercase;\n\n  color: #393939;\n"]))),H=g.ZP.div(x||(x=(0,f.Z)(["\n  height: auto;\n"]))),K=(0,g.ZP)(Z.rU)(h||(h=(0,f.Z)(['\n  font-family: "Karla", sans-serif;\n  font-size: 16px;\n  line-heigth: 27px;\n  font-weigth: 400;\n  text-decoration: none;\n  color: #393939;\n  opacity: 0.9;\n  transition: all 0.2s linear;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),I=function(n){var e=n.title,t=void 0===e?"Products":e,i=C.xF.find((function(n){return n.title===t})).path;return(0,N.jsxs)(F,{children:[(0,N.jsx)(L,{children:"Error"===t?"404 "+t+" \u2014 Page Not Found":t}),(0,N.jsxs)(H,{children:[(0,N.jsx)(K,{to:"/",children:"Home"})," > ",(0,N.jsx)(K,{to:i,children:t})]})]})},O=t(3883),T=t(2959),B=t(8353),D=function(n){var e=n.children,t=n.navTitle,i=(0,u.useContext)(z.tH).isOpenPopup;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{}),(0,N.jsx)(I,{title:t}),i?(0,N.jsx)(B.Z,{}):null,e,(0,N.jsx)(O.Z,{}),(0,N.jsx)(T.Z,{})]})}},3058:function(n,e,t){var i=t(1413),r=t(3433),o=t(9439),a=t(2791),l=t(6048),s=t.n(l),c=t(5034),d=t(9326),p=t(633),x=t(184);e.Z=function(n){for(var e=n.itemsPerPage,t=n.list,l=(0,a.useState)(0),h=(0,o.Z)(l,2),u=h[0],f=h[1],g=(0,d.XI)(),Z=(0,o.Z)(g,3),m=Z[0],j=Z[1],v=Z[2],P=u+e,y=t.slice(u,P),b=Math.ceil(t.length/e),k=0,w=[],C=k;C<y.length/4;C++)w[C]=(0,r.Z)(y.slice(k,k+4)),k+=4;var z=function(n){var e=n.currentItems;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"my-masonry-grid_column",children:e&&e.map((function(n){var e,t,r=n.id,o=n.image,a=n.title,l=n.brand,s=n.price,c=n.alt;return(0,x.jsxs)(p.Zb,{children:[(0,x.jsxs)(p.hz,(0,i.Z)((0,i.Z)({},j),{},{children:[m&&(null===(e=v.current)||void 0===e||null===(t=e.children[0])||void 0===t?void 0:t.alt)===a?(0,x.jsx)(p.T$,{children:(0,x.jsx)(p.Kk,{to:"/products/".concat(r),children:"Choose option"})}):null,(0,x.jsx)(p.Mo,{src:o,alt:c})]})),(0,x.jsxs)(p.FE,{children:[(0,x.jsx)(p.H7,{children:l}),(0,x.jsx)(p.ll,{children:a}),(0,x.jsx)(p.DL,{children:s})]})]},r)}))})})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:w.map((function(n,e){return(0,x.jsx)(z,{currentItems:n},e)}))}),(0,x.jsx)(s(),{breakLabel:"...",nextLabel:"Next >",onPageChange:function(n){var i=n.selected*e%t.length;f(i)},pageRangeDisplayed:5,pageCount:b,previousLabel:"< Previous",renderOnZeroPageCount:null,containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})]})}},2295:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var i,r,o,a,l,s,c,d,p,x,h,u=t(1973),f=t(2791),g=t(3058),Z=t(168),m=t(6444),j=m.ZP.div(i||(i=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n  margin: 40px 0;\n  position: relative;\n"]))),v=m.ZP.section(r||(r=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 120px;\n  margin-bottom: 40px;\n"]))),P=(m.ZP.div(o||(o=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 20px 20px 20px;\n  background: #fff;\n  cursor: pointer;\n"]))),m.ZP.div(a||(a=(0,Z.Z)(["\n  position: relative;\n  transition: all 0.25s linear;\n"]))),m.ZP.div(l||(l=(0,Z.Z)(["\n  background-color: none;\n  width: 100%;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  transition: all 0.25s linear;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.75);\n  }\n"]))),m.ZP.a(s||(s=(0,Z.Z)(['\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  color: #ffffff;\n\n  &::after {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 2px;\n    border-bottom: 1px solid #eee;\n    opacity: 0;\n    transition: all 0.25s linear;\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n']))),m.ZP.img(c||(c=(0,Z.Z)(["\n  width: 100%;\n  object-fit: contain;\n  pointer-events: none;\n  display: block;\n"]))),m.ZP.div(d||(d=(0,Z.Z)(["\n  margin-top: 25px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n"]))),m.ZP.h5(p||(p=(0,Z.Z)(['\n  font-family: "Karla";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 23px;\n  color: #6f6f6f;\n']))),m.ZP.h4(x||(x=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: #393939;\n  margin-bottom: 10px;\n"]))),m.ZP.span(h||(h=(0,Z.Z)(['\n  font-family: "Karla";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n  color: #6f6f6f;\n']))),t(7238)),y=t(184),b=function(){var n=(0,f.useContext)(P.BZ).products;return(0,y.jsx)(j,{children:(0,y.jsx)(v,{children:(0,y.jsx)(g.Z,{itemsPerPage:16,list:n})})})},k=function(){return(0,y.jsx)(u.Z,{navTitle:"Products",children:(0,y.jsx)(b,{})})}}}]);
//# sourceMappingURL=295.496770fb.chunk.js.map