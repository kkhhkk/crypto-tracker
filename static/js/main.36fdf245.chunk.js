(this["webpackJsonpreact-crpyto-traker"]=this["webpackJsonpreact-crpyto-traker"]||[]).push([[0],{76:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),r=t(29),o=t.n(r),a=t(12),s=t(5),l=t(45),d=t(6),j=t(11),h=t(4),u=t(30),b=t(21),p=t(15),x=t.n(p),O="https://api.coinpaprika.com/v1";function f(){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/coins"));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/coins/").concat(n));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/tickers/").concat(n));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(b.a)(x.a.mark((function e(n){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Date.now()/1e3),c=t-31449600,e.next=4,fetch("".concat(O,"/coins/").concat(n,"/ohlcv/historical?start=").concat(c,"&end=").concat(t));case 4:return e.next=6,e.sent.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(b.a)(x.a.mark((function e(n,t){var c,i,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){return"1y"===e?365:"3m"===e?93:"1m"===e?31:"14d"===e?14:7},c=Math.floor(Date.now()/1e3),r=c-86400*i(t),e.next=5,fetch("".concat(O,"/coins/").concat(n,"/ohlcv/historical?start=").concat(r,"&end=").concat(c));case 5:return e.next=7,e.sent.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C,_,q,D,I,S,F,z=t(0),L=s.c.div(C||(C=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),P=s.c.header(_||(_=Object(d.a)(["\n  height: 15vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),U=s.c.ul(q||(q=Object(d.a)([""]))),M=s.c.li(D||(D=Object(d.a)(['\n  background-color: "transparent";\n  color: ',";\n  border: 1px solid white;\n  font-size: 15px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n  &:hover {\n    a {\n      color: ",";\n      padding: 25px;\n    }\n  }\n"])),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor})),A=s.c.h1(I||(I=Object(d.a)(["\n  color: ",";\n  font-size: 40px;\n"])),(function(e){return e.theme.accentColor})),Q=s.c.div(S||(S=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 48px;\n"]))),T=s.c.img(F||(F=Object(d.a)(["\n  width: 25px;\n  height: 25px;\n  margin-left: 10px;\n  margin-right: 10px;\n"])));var Y=function(){var e=Object(a.useQuery)("allCoins",f),n=e.isLoading,t=e.data;return Object(z.jsxs)(L,{children:[Object(z.jsx)(u.a,{children:Object(z.jsx)("title",{children:"Crpyto"})}),Object(z.jsx)(P,{children:Object(z.jsx)(A,{children:"Crpyto"})}),n?Object(z.jsx)(Q,{children:"Loading..."}):Object(z.jsx)(U,{children:null===t||void 0===t?void 0:t.slice(0,200).map((function(e){return Object(z.jsx)(M,{children:Object(z.jsxs)(j.b,{to:{pathname:"/".concat(e.id),state:{name:e.name}},children:[e.rank," :"," ",Object(z.jsx)(T,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(e.symbol.toLowerCase())}),e.name," ( ",e.symbol," ) \u2192"]})},e.id)}))})]})},$=t(31),H=t.n($);var J,R,B=function(e){var n=e.coinId,t=Object(h.h)("/:coinId/chart/1y"),c=Object(h.g)().setDate,i=Object(a.useQuery)(["ohlcv".concat(c,"}"),n],(function(){return function(e,n){return k.apply(this,arguments)}(n,c)})),r=i.isLoading,o=i.data,s=function(e){return"3m"===e?"3M":"1m"===e?"1M":e}(c);return Object(z.jsx)("div",{children:r?"Chart Loading...":null===t?Object(z.jsx)(H.a,{type:"candlestick",series:[{name:"Price",data:null===o||void 0===o?void 0:o.map((function(e){return{x:e.time_close.slice(5,10),y:[e.open.toFixed(2),e.high.toFixed(2),e.low.toFixed(2),e.close.toFixed(2)]}}))}],options:{theme:{mode:"dark"},chart:{type:"candlestick",width:500,height:500,background:"transparent",toolbar:{show:!1}},title:{text:"Chart of ".concat(s," - Daily close price"),align:"left"},xaxis:{categories:[null===o||void 0===o?void 0:o.map((function(e){return e.time_close.slice(5,10)}))],labels:{style:{fontSize:"11px"},show:!1},axisTicks:{show:!1}},stroke:{curve:"smooth",width:1},tooltip:{enabled:!0},plotOptions:{candlestick:{colors:{upward:"#e84118",downward:"#0097e6"}}}}}):Object(z.jsx)(z.Fragment,{})})},E=s.c.div(J||(J=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),G=s.c.div(R||(R=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 10px 5px 10px;\n  border-radius: 10px;\n  color: ",";\n"])),(function(e){return e.isActive?e.theme.accentColor:e.theme.textColor}));var K,N,V,W,X,Z,ee=function(e){var n=e.coinId,t=Object(h.h)("/:coinId/chart/1y"),c=Object(h.h)("/:coinId/chart/3m"),i=Object(h.h)("/:coinId/chart/1m"),r=Object(h.h)("/:coinId/chart/14d"),o=Object(h.h)("/:coinId/chart/7d"),s=Object(a.useQuery)(["ohlcv",n],(function(){return function(e){return w.apply(this,arguments)}(n)})),l=s.isLoading,d=s.data;return Object(z.jsxs)("div",{children:[Object(z.jsxs)(E,{children:[Object(z.jsx)(G,{isActive:null!==t,children:Object(z.jsx)(j.b,{to:"/".concat(n,"/chart/1y"),children:"1Y"})}),Object(z.jsx)(G,{isActive:null!==c,children:Object(z.jsx)(j.b,{to:"/".concat(n,"/chart/3m"),children:"3M"})}),Object(z.jsx)(G,{isActive:null!==i,children:Object(z.jsx)(j.b,{to:"/".concat(n,"/chart/1m"),children:"1M"})}),Object(z.jsx)(G,{isActive:null!==r,children:Object(z.jsx)(j.b,{to:"/".concat(n,"/chart/14d"),children:"14d"})}),Object(z.jsx)(G,{isActive:null!==o,children:Object(z.jsx)(j.b,{to:"/".concat(n,"/chart/7d"),children:"7d"})})]}),l?"":null!==t?Object(z.jsx)(H.a,{type:"candlestick",series:[{name:"Price",data:null===d||void 0===d?void 0:d.map((function(e){return{x:e.time_close.slice(5,10),y:[e.open.toFixed(2),e.high.toFixed(2),e.low.toFixed(2),e.close.toFixed(2)]}}))}],options:{theme:{mode:"dark"},chart:{width:500,height:500,background:"transparent",toolbar:{show:!1}},colors:null===d||void 0===d?void 0:d.map((function(e){return e.open-e.close>0?"#e84118":"#00a8ff"})),title:{text:"Chart of 1Y - Daily close price",align:"left"},xaxis:{categories:[null===d||void 0===d?void 0:d.map((function(e){return e.time_close.slice(5,10)}))],labels:{style:{fontSize:"11px"},show:!1},axisTicks:{show:!1}},stroke:{curve:"smooth",width:1},plotOptions:{candlestick:{colors:{upward:"#e84118",downward:"#0097e6"}}}}}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(h.c,{children:Object(z.jsx)(h.a,{path:"/:coinId/chart/:setDate",children:Object(z.jsx)(B,{coinId:n})})})]})},ne=s.c.div(K||(K=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),te=s.c.ul(N||(N=Object(d.a)([""]))),ce=s.c.li(V||(V=Object(d.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ",";\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  padding: 15px;\n  justify-content: space-between;\n"])),(function(e){return e.theme.textColor})),ie=s.c.h3(W||(W=Object(d.a)(["\n  margin-right: 100px;\n  font-size: 15px;\n  font-weight: 900;\n"]))),re=s.c.h3(X||(X=Object(d.a)(["\n  margin-right: 100px;\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.theme.textColor})),oe=s.c.h3(Z||(Z=Object(d.a)(["\n  margin-right: 100px;\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.isPositive?"red":"blue"}));function ae(e){return e>0}var se,le,de,je,he,ue,be,pe,xe,Oe,fe=function(e){var n=e.coinId,t=Object(a.useQuery)(["price",n],(function(){return v(n)})),c=t.isLoading,i=t.data,r=null===i||void 0===i?void 0:i.quotes.USD.ath_price,o=null===i||void 0===i?void 0:i.quotes.USD.price,s=((o-r)/r*100).toFixed(2);return console.log(r,o),Object(z.jsx)("div",{children:c?"Chart Loading...":Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(ne,{children:Object(z.jsxs)(te,{children:[Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Price :"}),Object(z.jsxs)(re,{children:["$",null===i||void 0===i?void 0:i.quotes.USD.price.toFixed(2)]})]}),Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Curr / Max :"}),Object(z.jsxs)(oe,{isPositive:ae(s),children:[s,"%"]})]}),Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Change_24h :"}),Object(z.jsxs)(oe,{isPositive:ae(null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h,"%"]})]}),Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Change_7d :"}),Object(z.jsxs)(oe,{isPositive:ae(null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d,"%"]})]}),Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Change_1M :"}),Object(z.jsxs)(oe,{isPositive:ae(null===i||void 0===i?void 0:i.quotes.USD.percent_change_30d),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_30d,"%"]})]}),Object(z.jsxs)(ce,{children:[Object(z.jsx)(ie,{children:"Change_1Y :"}),Object(z.jsxs)(oe,{isPositive:ae(null===i||void 0===i?void 0:i.quotes.USD.percent_change_1y),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_1y,"%"]})]})]})})})})},me=s.c.div(se||(se=Object(d.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),ge=s.c.header(le||(le=Object(d.a)(["\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n"]))),ve=s.c.h1(de||(de=Object(d.a)(["\n  color: ",";\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n"])),(function(e){return e.theme.accentColor})),ye=s.c.img(je||(je=Object(d.a)(["\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n"]))),we=s.c.div(he||(he=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 48px;\n"]))),ke=s.c.div(ue||(ue=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 15px 20px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n"]))),Ce=s.c.div(be||(be=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 15px;\n\n  span:first-child {\n    font-size: 12px;\n    font-weight: 400;\n    margin-bottom: 5px;\n  }\n"]))),_e=s.c.div(pe||(pe=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),qe=s.c.div(xe||(xe=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  width: 49%;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 20px;\n  padding: 10px;\n  margin-bottom: 15px;\n  font-weight: 400;\n  color: ",";\n  a {\n    display: block;\n    padding: 2.5px 80px;\n  }\n"])),(function(e){return e.isActive?e.theme.accentColor:e.theme.textColor})),De=s.c.div(Oe||(Oe=Object(d.a)(["\n  font-size: 30px;\n  margin-top: 20px;\n  margin-left: 20px;\n"])));var Ie=function(){var e=Object(h.g)().coinId,n=Object(h.f)().state,t=Object(h.h)("/:coinId/chart"),c=Object(h.h)("/:coinId/price"),i=Object(a.useQuery)(["info",e],(function(){return function(e){return g.apply(this,arguments)}(e)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",e],(function(){return v(e)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data,b=r||l;return Object(z.jsxs)(me,{children:[Object(z.jsx)(u.a,{children:Object(z.jsx)("title",{children:null!==n&&void 0!==n&&n.name?n.name:b?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(z.jsx)(De,{children:Object(z.jsx)(j.b,{to:"/",children:"\ud83c\udfe0"})}),Object(z.jsx)(ge,{children:Object(z.jsxs)(ve,{children:[Object(z.jsx)(ye,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(null===o||void 0===o?void 0:o.symbol.toLowerCase())}),null!==n&&void 0!==n&&n.name?n.name:b?"Loading...":null===o||void 0===o?void 0:o.name]})}),b?Object(z.jsx)(we,{children:"Loading..."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(ke,{children:[Object(z.jsxs)(Ce,{children:[Object(z.jsx)("span",{children:"Rank"}),Object(z.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(z.jsxs)(Ce,{children:[Object(z.jsx)("span",{children:"Symbol"}),Object(z.jsx)("span",{children:null===o||void 0===o?void 0:o.symbol})]})]}),Object(z.jsxs)(ke,{children:[Object(z.jsxs)(Ce,{children:[Object(z.jsx)("span",{children:"Max Price Date"}),Object(z.jsx)("span",{children:null===d||void 0===d?void 0:d.quotes.USD.ath_date.slice(0,10)})]}),Object(z.jsxs)(Ce,{children:[Object(z.jsx)("span",{children:"Max Price"}),Object(z.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.ath_price.toFixed(2)]})]}),Object(z.jsxs)(Ce,{children:[Object(z.jsx)("span",{children:"Current Price"}),Object(z.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(2)]})]})]}),Object(z.jsxs)(_e,{children:[Object(z.jsx)(qe,{isActive:null!==t,children:Object(z.jsx)(j.b,{to:"/".concat(e,"/chart/1y"),children:"Chart"})}),Object(z.jsx)(qe,{isActive:null!==c,children:Object(z.jsx)(j.b,{to:"/".concat(e,"/price"),children:"Price"})})]}),Object(z.jsx)(h.c,{children:Object(z.jsx)(h.a,{path:"/:coinId/price",children:Object(z.jsx)(fe,{coinId:e})})}),Object(z.jsx)(h.c,{children:Object(z.jsx)(h.a,{path:"/:coinId/chart/",children:Object(z.jsx)(ee,{coinId:e})})})]})]})};var Se,Fe=function(){return Object(z.jsx)(j.a,{basename:"/crypto-tracker",children:Object(z.jsxs)(h.c,{children:[Object(z.jsx)(h.a,{path:"/:coinId",children:Object(z.jsx)(Ie,{})}),Object(z.jsx)(h.a,{path:"/",children:Object(z.jsx)(Y,{})})]})})},ze=Object(s.b)(Se||(Se=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n*{\n  box-sizing : border-box;\n}\nbody {\n  font-family : 'Source Sans Pro', sans-serif;\n  background-color : ",";\n  color : ",";\n\n}\na {\n  text-decoration : none;\n  color : inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var Le=function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ze,{}),Object(z.jsx)(Fe,{})]})},Pe=new a.QueryClient;o.a.render(Object(z.jsx)(i.a.StrictMode,{children:Object(z.jsxs)(a.QueryClientProvider,{client:Pe,children:[Object(z.jsx)(s.a,{theme:{textColor:"#f5f6fa",bgColor:"#2f3640",accentColor:"#44bd32"},children:Object(z.jsx)(Le,{})}),Object(z.jsx)(l.ReactQueryDevtools,{initialIsOpen:!0})]})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.36fdf245.chunk.js.map