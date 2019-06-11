(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,t,e){n.exports=e(56)},41:function(n,t,e){},42:function(n,t,e){},56:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(11),o=e.n(i),c=(e(41),e(42),e(57)),u=e(19),d=e.n(u),l=e(25),s=e(12),f=e(13),p=e(16),h=e(14),m=e(17),x=e(1),b=e(2);function g(){var n=Object(x.a)(["\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n"]);return g=function(){return n},n}function w(){var n=Object(x.a)(["\n    display: inline-block;\n    border-radius: 50%;\n    box-shadow: 0px 0px 2px;\n    width: 15px;\n    height: 15px;\n    border: 2px solid #ccc;\n    margin: 0px auto;\n"]);return w=function(){return n},n}function v(){var n=Object(x.a)(["\n    width: calc(100% - 20px);\n    padding: 10px;\n    height: 30px;\n    line-height: 30px;\n    font-family: sans-serif;\n"]);return v=function(){return n},n}function C(){var n=Object(x.a)(["\n    position: fixed;\n    background: #fff;\n    left: 0;\n    width: 300px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    transition: .5s;\n    z-index: 1;\n    height: -webkit-calc(100% - 40px);\n    transition-timing-function: ease;\n"]);return C=function(){return n},n}function y(){var n=Object(x.a)(["\n    float: left;\n    background: transparent;\n    -webkit-appearance: none;\n    margin: 0px 5px;\n    border: 0px;\n"]);return y=function(){return n},n}function k(){var n=Object(x.a)(["\n    width: 30px;\n    height: 4px;\n    background-color: #fff;\n    margin: 6px 0;\n"]);return k=function(){return n},n}function E(){var n=Object(x.a)(["\n    height: 20px;\n    line-height: 20px;\n    width: auto;\n    padding: 10px;\n    color: #fff;\n    font-family: sans-serif;\n"]);return E=function(){return n},n}function O(){var n=Object(x.a)(["\n    width: 100%;\n    height: 40px;\n    background: #0067a3;\n"]);return O=function(){return n},n}var j=b.a.div(O()),M=b.a.div(E()),L=b.a.div(k()),S=b.a.button(y()),N=b.a.div(C()),D=b.a.div(v()),A=b.a.div(w()),I=b.a.div(g()),B=function(n){function t(n){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this,n))).headerLabel="TrelloBoards",e.state={sample:""},e}return Object(m.a)(t,n),Object(f.a)(t,[{key:"render",value:function(){var n=this;return r.createElement(r.Fragment,null,r.createElement(j,null,r.createElement(S,{onClick:function(){return n.props.openMenu()}},r.createElement(L,null),r.createElement(L,null),r.createElement(L,null)),r.createElement(M,null,this.headerLabel)),r.createElement(N,{className:"menuWrapper",style:{transform:"translateX("+this.props.menuWidth+")"}},r.createElement(D,null,"Theme"),r.createElement(I,null,r.createElement(A,{style:{background:"#0079bf"},onClick:function(){return n.props.themeSetter("#0079bf")}}),r.createElement(A,{style:{background:"#000000"},onClick:function(){return n.props.themeSetter("#000000")}}),r.createElement(A,{style:{background:"#344c5a"},onClick:function(){return n.props.themeSetter("#344c5a")}}),r.createElement(A,{style:{background:"#cccccc"},onClick:function(){return n.props.themeSetter("#cccccc")}}),r.createElement(A,{style:{background:"#00243a"},onClick:function(){return n.props.themeSetter("#00243a")}}))))}}]),t}(r.Component);function J(){var n=Object(x.a)(["\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    width: 15px;\n    height: 15px;\n    cursor: pointer;\n    ::after {\n        position: absolute;\n        left: 7px;\n        content: ' ';\n        height: 15px;\n        width: 1px;\n        background-color: #333;\n        transform: rotate(-45deg);\n    }\n    ::before {\n        position: absolute;\n        left: 7px;\n        content: ' ';\n        height: 15px;\n        width: 1px;\n        background-color: #333;\n        transform: rotate(45deg);\n    }\n"]);return J=function(){return n},n}function z(){var n=Object(x.a)(["\n    display: inherit;\n    width: calc(100% - 10px);\n    color: #666;\n    padding: 5px;\n    border: 1px solid #f7f7f7;\n    border-radius: 5px;\n    background: #f7f7f7;\n    margin: 5px 0px;\n"]);return z=function(){return n},n}function W(){var n=Object(x.a)(["\n    color: #868686;\n    font-family: inherit;\n    width: 100%;\n    height: auto;\n    border: none;\n    outline-width: 0;\n"]);return W=function(){return n},n}function T(){var n=Object(x.a)(["\n    border-top: 1px solid #ccc;\n    padding-top: 10px;\n    margin-top: 10px;\n"]);return T=function(){return n},n}function U(){var n=Object(x.a)(["\n    display: inherit;\n    width: 100%;\n    height: 20px;\n    line-height: 20px;\n    text-transform: capitalize;\n    font-family: sans-serif;\n"]);return U=function(){return n},n}function X(){var n=Object(x.a)(["\n    margin: 10px;\n    padding: 10px;\n    width: calc(100% - 40px);\n    height: 20px;\n    line-height: 20px;\n    background: #c1c1c1;\n    opacity: 0.5;\n    border-radius: 10px;\n    border: 1px solid #fff;\n    font-size: inherit;\n    color: #000;\n"]);return X=function(){return n},n}function q(){var n=Object(x.a)(["\n    display: inherit;\n    margin: 10px;\n    width: calc(100% - 40px);\n    height: 20px;\n    line-height: 20px;\n    text-transform: capitalize;\n    border-bottom: 1px solid #6b6b6b;\n    box-shadow: -2px 17px 21px -13px #888888;\n    font-size: 22px;\n    font-family: sans-serif;\n    padding: 5px 10px;\n"]);return q=function(){return n},n}function F(){var n=Object(x.a)(["\n    min-width: 400px;\n    min-height: 100px;\n    height: auto;\n    background: #fff;\n    border-radius: 10px;\n    border: 1px solid #fff;\n    margin: 20px 10px;\n    color: #000;\n    display: inline-table;\n    position: relative;\n"]);return F=function(){return n},n}function Y(){var n=Object(x.a)(["\n"]);return Y=function(){return n},n}function K(){var n=Object(x.a)(["\n    -webkit-appearance : none;\n    height: 50px;\n    width: calc(50% - 10px);\n    margin: 10px;\n    border-radius: 10px;\n    background: red;\n    color: #fff;\n    font-size: 16px;\n    font-family: sans-serif;\n"]);return K=function(){return n},n}function P(){var n=Object(x.a)(["\n    -webkit-appearance : none;\n    height: 50px;\n    width: calc(50% - 10px);\n    margin: 10px;\n    border-radius: 10px;\n    background: green;\n    color: #fff;\n    font-size: 16px;\n    font-family: sans-serif;\n"]);return P=function(){return n},n}function $(){var n=Object(x.a)(["\n    width: 95%;\n    margin: 0 auto;\n    height: 60px;\n    -webkit-appearance: none;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    display: -webkit-box;\n    position: relative;\n    margin-top: 40px;\n    padding-left: 10px;\n    font-family: sans-serif;\n    font-size: 16px;\n    ::placeholder {\n       \n    }\n"]);return $=function(){return n},n}function G(){var n=Object(x.a)(["\n    padding: 10px;\n    width: calc(100% - 20px);\n    height: calc(100% - 20px);\n"]);return G=function(){return n},n}function H(){var n=Object(x.a)(["\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: 0.5;\n"]);return H=function(){return n},n}function Q(){var n=Object(x.a)(["\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    width: 32px;\n    height: 32px;\n    ::after {\n        position: absolute;\n        left: 15px;\n        content: ' ';\n        height: 33px;\n        width: 2px;\n        background-color: #333;\n        transform: rotate(-45deg);\n    }\n    ::before {\n        position: absolute;\n        left: 15px;\n        content: ' ';\n        height: 33px;\n        width: 2px;\n        background-color: #333;\n        transform: rotate(45deg);\n    }\n"]);return Q=function(){return n},n}function R(){var n=Object(x.a)(["\n    margin: 10px;\n    padding: 10px;\n    width: calc(100% - 40px);\n    border-radius: 10px;\n    border: 1px solid #c5c5c5;\n    cursor: move;\n    position: relative;\n"]);return R=function(){return n},n}function V(){var n=Object(x.a)(["\n    width: auto;\n    height: calc(100% - 40px);\n    display: flex;\n    overflow: scroll;\n"]);return V=function(){return n},n}function Z(){var n=Object(x.a)(["\n    width: calc(400px - 20px);\n    min-height: 100px;\n    height: auto;\n    border-radius: 10px;\n    border: 1px solid #fff;\n    margin: 20px 10px;\n    padding: 10px;\n"]);return Z=function(){return n},n}function _(){var n=Object(x.a)(["\n    min-width: 400px;\n    height: 100px;\n    line-height: 100px;\n    background: #000;\n    opacity: 0.5;\n    border-radius: 10px;\n    border: 1px solid #fff;\n    font-size: 40px;\n    text-align: center;\n    margin: 20px 10px;\n    color: #fff;\n    cursor: pointer;\n"]);return _=function(){return n},n}function nn(){var n=Object(x.a)(["\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%);\n    top: 50%;\n    width: 400px;\n    height: auto;\n    min-height: 150px;\n    background: #fff;\n    border-radius: 10px;\n    z-index: 1;\n"]);return nn=function(){return n},n}function tn(){var n=Object(x.a)(["\n    background : ",";\n    width: 100%;\n    height: 100%;\n"]);return tn=function(){return n},n}var en=b.a.div(tn(),function(n){return n.boardBgColor||"#0079bf"}),rn=b.a.div(nn()),an=b.a.div(_()),on=(b.a.div(Z()),b.a.div(V())),cn=b.a.div(R()),un=b.a.div(Q()),dn=b.a.div(H()),ln=b.a.div(G()),sn=b.a.input($()),fn=b.a.button(P()),pn=b.a.button(K()),hn=(b.a.form(Y()),b.a.div(F())),mn=b.a.span(q()),xn=b.a.div(X()),bn=b.a.div(U()),gn=b.a.div(T()),wn=b.a.input(W()),vn=b.a.span(z()),Cn=b.a.div(J()),yn=e(15),kn=function(){return{type:"loadDataSuccess"}},En=function(n){return{type:"newListSucces",data:n}},On=function(n,t){return{type:"newCardSuccess",data:{id:n,value:t}}},jn=function(n,t){return{type:"updateCardSuccess",data:{id:n,value:t}}},Mn=function(n,t,e){return{type:"addCommentSuccess",data:{listId:n,cardId:t,value:e}}},Ln=function(n,t){return{type:"deleteCardSuccess",data:{listId:n,cardId:t}}},Sn=function(n){return{type:"deleteListSuccess",data:{id:n}}},Nn=e(29),Dn=e.n(Nn),An=function(n){var t=n.items,e=n.onUpdateCard,r=n.parentId,i=n.addComment,o=n.deleteCard;return t=t.map(function(n){return a.a.createElement(cn,{key:n.id,"data-id":n.id},a.a.createElement(Cn,{onClick:function(){return o(r,n.id)}}),a.a.createElement(bn,null,n.cardName),a.a.createElement(gn,null,n.comments.length?n.comments.map(function(n){return a.a.createElement(vn,{key:n.id},n.text)}):null,a.a.createElement(wn,{placeholder:"Add Comment",onKeyPress:function(t){return i(t,r,n.id)}})))}),a.a.createElement(Dn.a,{options:{group:"shared",pull:!0,put:!0},onChange:function(n){e(r,n)}},t)},In=function(n){function t(n){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this,n))).setTheme=function(n){e.setState({boardBgColor:n})},e.showAddListModel=function(n){n?e.setState({showModel:"block",newList:!0}):e.setState({showModel:"none",newList:!1})},e.openMenu=function(n){"none"===e.state.displayMenu?e.setState({displayMenu:"block",menuWidth:"0px"}):e.setState({displayMenu:"none",menuWidth:"-300px"})},e.addNewList=function(n){var t=document.getElementsByClassName("NewList")[0];(t="undefined"!=typeof t?t.value:"")&&(e.props.onNewList(t.toLowerCase()),document.getElementsByClassName("NewList")[0].value=""),e.showAddListModel(!1)},e.addNewCard=function(n,t){var r=document.getElementsByClassName("NewList")[0];(r="undefined"!=typeof r?r.value:"")&&(e.props.onNewCard(t,r.toLowerCase()),document.getElementsByClassName("NewList")[0].value=""),e.showCardModel("")},e.showCardModel=function(n){n?e.setState({newCard:n,showModel:"block"}):e.setState({newCard:"",showModel:"none"})},e.onCardDrag=function(n,t){e.props.onUpdateCard(n,t)},e.addComment=function(n,t,r){13===(n.keyCode||n.which)&&""!==n.target.value&&(e.props.onAddComments(t,r,n.target.value),n.target.value="")},e.deleteList=function(n){n&&e.props.onDeleteList(n)},e.deleteCard=function(n,t){t&&e.props.onDeleteCard(n,t)},e.state={boardBgColor:"#0079bf",displayMenu:"none",menuWidth:"-300px",showModel:"none",newList:!1,newCard:"",listData:[]},e}return Object(m.a)(t,n),Object(f.a)(t,[{key:"loadData",value:function(){var n=Object(l.a)(d.a.mark(function n(){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.props.onLoad();case 2:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var n=this,t=r.createElement(ln,null,r.createElement(un,{onClick:function(){return n.showAddListModel(!1)}}),r.createElement(sn,{className:"NewList",placeholder:"Add List Title",maxLength:"30",required:!0}),r.createElement(on,null,r.createElement(fn,{onClick:function(t){return n.addNewList(t)}},"Add"),r.createElement(pn,{onClick:function(){return n.showAddListModel(!1)}},"Cancel"))),e=r.createElement(ln,null,r.createElement(un,{onClick:function(){return n.showCardModel("")}}),r.createElement(sn,{className:"NewList",placeholder:"Add Card",maxLength:"30",required:!0}),r.createElement(on,null,r.createElement(fn,{onClick:function(t){return n.addNewCard(t,n.state.newCard)}},"Add"),r.createElement(pn,{onClick:function(){return n.showCardModel("")}},"Cancel")));return r.createElement(en,{boardBgColor:this.state.boardBgColor},r.createElement(B,{themeSetter:this.setTheme,menuWidth:this.state.menuWidth,displayMenu:this.state.displayMenu,openMenu:this.openMenu}),this.props.listData.length?r.createElement(on,null,this.props.listData.map(function(t){return r.createElement(hn,{key:t.id},r.createElement(Cn,{onClick:function(){return n.deleteList(t.id)}}),r.createElement(mn,null,t.title),t.cards.length?r.createElement(r.Fragment,null,r.createElement(An,{items:t.cards,onUpdateCard:n.onCardDrag,parentId:t.id,addComment:n.addComment,deleteCard:n.deleteCard})):null,r.createElement(xn,{onClick:function(){return n.showCardModel(t.id)}},"Add Card +"))}),r.createElement(an,{onClick:function(){return n.showAddListModel(!0)}},"+")):r.createElement(on,null,r.createElement(an,{onClick:function(){return n.showAddListModel(!0)}},"+")),r.createElement(rn,{style:{display:this.state.showModel}},this.state.newList?t:this.state.newCard?e:null),r.createElement(dn,{style:{display:this.state.showModel}}))}}]),t}(r.Component),Bn=Object(yn.b)(function(n){return{listData:n.card.listData,loading:n.card.loading}},function(n){return{onLoad:function(){return n(function(n){n(kn())})},onNewList:function(t){return n(function(n){var t={listData:[{title:n,id:n+Math.floor(Math.random()*Math.pow(10,10)),cards:[]}]};return function(n){n(En(t))}}(t))},onNewCard:function(t,e){return n(function(n,t){return function(e){e(On(n,t))}}(t,e))},onUpdateCard:function(t,e){return n(function(n,t){return function(e){e(jn(n,t))}}(t,e))},onAddComments:function(t,e,r){return n(Mn(t,e,r))},onDeleteCard:function(t,e){return n(function(n,t){return function(e){e(Ln(n,t))}}(t,e))},onDeleteList:function(t){return n(function(n){return function(t){t(Sn(n))}}(t))}}})(In);var Jn=function(){return a.a.createElement(c.d,null,a.a.createElement(c.c,{path:"/",exact:!0,component:Bn}),a.a.createElement(c.b,{to:"/"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var zn=e(8),Wn=e(32),Tn={listData:[],loading:!1,allCards:[]},Un=function(n,t){return function(n,t){var e=Object(Wn.a)({},n,t);return e.listData=n.listData.concat(t.listData),e}(n,t.data)},Xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loadDataSuccess":return function(n){return n}(n);case"newListSucces":return Un(n,t);case"newCardSuccess":return function(n,t){var e=JSON.parse(JSON.stringify(n)),r=e.listData.filter(function(n){return n.id===t.data.id});if(r.length){var a={cardName:t.data.value,id:t.data.value+Math.floor(Math.random()*Math.pow(10,10)),comments:[]};r[0].cards.push(a),e.allCards.push(a)}return e}(n,t);case"updateCardSuccess":return function(n,t){var e=JSON.parse(JSON.stringify(n)),r=t.data.value.map(function(n){var t=e.allCards.filter(function(t){return t.id===n});return t[0]?t[0]:null});return e.listData.filter(function(n){return n.id===t.data.id})[0].cards=r.filter(function(n){return null!==n}),e}(n,t);case"deleteCardSuccess":return function(n,t){var e=JSON.parse(JSON.stringify(n)),r=e.listData.filter(function(n){return n.id===t.data.listId});if(r[0]){var a=r[0].cards.filter(function(n){return n.id!==t.data.cardId}),i=e.allCards.filter(function(n){return n.id!==t.data.cardId});a&&i&&(e.allCards=i,r[0].cards=a)}return e}(n,t);case"deleteListSuccess":return function(n,t){var e=JSON.parse(JSON.stringify(n)),r=e.listData.filter(function(n){return n.id!==t.data.id});return e.listData=r,e}(n,t);case"addCommentSuccess":return function(n,t){var e=JSON.parse(JSON.stringify(n)),r=e.listData.filter(function(n){return n.id===t.data.listId});if(r[0]){var a=r[0].cards.filter(function(n){return n.id===t.data.cardId}),i=e.allCards.filter(function(n){return n.id===t.data.cardId});a[0]&&i[0]&&(i[0].comments.push({text:t.data.value,id:t.data.value+Math.floor(Math.random()*Math.pow(10,10))}),a[0].comments=i[0].comments)}return e}(n,t);default:return n}},qn=e(31),Fn=Object(zn.c)({card:Xn}),Yn=Object(zn.e)(Fn,Object(zn.d)(Object(zn.a)(qn.a))),Kn=a.a.createElement(yn.a,{store:Yn},a.a.createElement(c.a,null,a.a.createElement(Jn,null)));o.a.render(Kn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.7a684885.chunk.js.map