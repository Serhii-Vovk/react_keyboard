(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),r=s(4),c=s(5),o=s(7),i=s(6),u=s(1),l=s(0),p=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={lastPressKey:"Nothing was pressed yet"},e.lastPressKey=function(t){e.setState({lastPressKey:"The last pressed key is [".concat(t.key,"]")})},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.lastPressKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.lastPressKey)}},{key:"render",value:function(){var e=this.state.lastPressKey;return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("p",{className:"App__message",children:e})})}}]),s}(u.Component);s(13);a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.086fc4ba.chunk.js.map