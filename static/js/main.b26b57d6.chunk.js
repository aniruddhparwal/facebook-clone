(this["webpackJsonpfacebook-clone"]=this["webpackJsonpfacebook-clone"]||[]).push([[0],{45:function(e,a,t){e.exports=t(68)},50:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(50),t(10));var i=function(){return r.a.createElement("div",{className:"widgets"},r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdevcindore%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}))},s=t(20),m=t.n(s),u=m.a.initializeApp({apiKey:"AIzaSyDCQTPvuYRX-5WDHU6-JymM4XuIpEO8UTM",authDomain:"facebook-clone-ani.firebaseapp.com",databaseURL:"https://facebook-clone-ani.firebaseio.com",projectId:"facebook-clone-ani",storageBucket:"facebook-clone-ani.appspot.com",messagingSenderId:"1066642581601",appId:"1:1066642581601:web:f15ef0182e838ed658e220"}).firestore(),d=m.a.auth(),p=new m.a.auth.GoogleAuthProvider,E=u,g=t(105),v=t(80),f=t(81),h=t(82),_=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,l=e.children;return r.a.createElement(_.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(_)};var w=function(){var e=N(),a=Object(o.a)(e,2),t=a[0].user,l=(a[1],Object(n.useState)("")),c=Object(o.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],_=d[1];return r.a.createElement("div",{className:"messageSender"},r.a.createElement("div",{className:"messageSender__top"},r.a.createElement(g.a,{src:t.photoURL}),r.a.createElement("form",null,r.a.createElement("input",{value:i,onChange:function(e){return m(e.target.value)},className:"messageSender__input",placeholder:"What's on your mind ".concat(t.displayName," ?")}),r.a.createElement("input",{value:p,onChange:function(e){return _(e.target.value)},placeholder:"image URL (optional)"}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),E.collection("posts").add({message:i,timestamp:s.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:p}),m(""),_("")},type:"submit"},"Hidden Button"))),r.a.createElement("div",{className:"messageSender__bottom"},r.a.createElement("div",{className:"messageSender__option"},r.a.createElement(v.a,{style:{color:"red"}}),r.a.createElement("h3",null,"Live Video")),r.a.createElement("div",{className:"messageSender__option"},r.a.createElement(f.a,{style:{color:"green"}}),r.a.createElement("h3",null,"Photo/Video")),r.a.createElement("div",{className:"messageSender__option"},r.a.createElement(h.a,{style:{color:"orange"}}),r.a.createElement("h3",null,"Feeling/Activity"))))},k=t(83),S=t(84),y=t(85),j=t(86),I=t(87);var O=function(e){var a=e.profilePic,t=e.image,n=e.username,l=(e.timestamp,e.message);return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__top"},r.a.createElement(g.a,{src:a,className:"post__avatar"}),r.a.createElement("div",{className:"post__topInfo"},r.a.createElement("h3",null,n))),r.a.createElement("div",{className:"post__bottom"},r.a.createElement("p",null,l)),r.a.createElement("div",{className:"post__image"},r.a.createElement("img",{src:t,alt:"",srcset:""})),r.a.createElement("div",{className:"post__options"},r.a.createElement("div",{className:"post__option"},r.a.createElement(k.a,null),r.a.createElement("p",null,"Like")),r.a.createElement("div",{className:"post__option"},r.a.createElement(S.a,null),r.a.createElement("p",null,"Comment")),r.a.createElement("div",{className:"post__option"},r.a.createElement(y.a,null),r.a.createElement("p",null,"Share")),r.a.createElement("div",{className:"post__option"},r.a.createElement(j.a,null),r.a.createElement(I.a,null))))};var F=function(e){var a=e.image,t=e.profileSrc,n=e.title;return r.a.createElement("div",{className:"story",style:{backgroundImage:"url(".concat(a,")")}},r.a.createElement(g.a,{className:"story__avatar",src:t}),r.a.createElement("h4",null,n))};var C=function(){return r.a.createElement("div",{className:"storyreel"},r.a.createElement(F,{image:"https://i.pinimg.com/originals/15/c7/60/15c76094c4e04f9b7330ff51d96447eb.jpg",profileSrc:"https://avatars2.githubusercontent.com/u/34189674?s=60&v=4",title:"Aniruddh"}),r.a.createElement(F,{image:"https://i.pinimg.com/originals/15/c7/60/15c76094c4e04f9b7330ff51d96447eb.jpg",profileSrc:"https://avatars2.githubusercontent.com/u/34189674?s=60&v=4",title:"Aniruddh"}),r.a.createElement(F,{image:"https://i.pinimg.com/originals/15/c7/60/15c76094c4e04f9b7330ff51d96447eb.jpg",profileSrc:"https://avatars2.githubusercontent.com/u/34189674?s=60&v=4",title:"Aniruddh"}),r.a.createElement(F,{image:"https://i.pinimg.com/originals/15/c7/60/15c76094c4e04f9b7330ff51d96447eb.jpg",profileSrc:"https://avatars2.githubusercontent.com/u/34189674?s=60&v=4",title:"Aniruddh"}))};var P=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),r.a.createElement("div",{className:"feed"},r.a.createElement(C,null),r.a.createElement(w,null),t.map((function(e){return r.a.createElement(O,{key:e.id,profilePic:e.data.profilePic,image:e.data.image,username:e.data.username,timestamp:e.data.timestamp,message:e.data.message})})))},R=t(93),A=t(88),L=t(89),U=t(90),z=t(91),x=t(92),D=t(94),M=t(95),B=t(96),T=t(97),V=t(40),W=t.n(V);var J=function(){var e=N(),a=Object(o.a)(e,2),t=a[0].user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__left"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png",alt:"facebook logo",srcset:""}),r.a.createElement("div",{className:"header__input"},r.a.createElement(W.a,null),r.a.createElement("input",{placeholder:"Search Facebook",type:"text"}))),r.a.createElement("div",{className:"header__center"},r.a.createElement("div",{className:"header__option header__option--active"},r.a.createElement(A.a,{fontSize:"large"})),r.a.createElement("div",{className:"header__option"},r.a.createElement(L.a,{fontSize:"large"})),r.a.createElement("div",{className:"header__option"},r.a.createElement(U.a,{fontSize:"large"})),r.a.createElement("div",{className:"header__option"},r.a.createElement(z.a,{fontSize:"large"})),r.a.createElement("div",{className:"header__option"},r.a.createElement(x.a,{fontSize:"large"}))),r.a.createElement("div",{className:"header__right"},r.a.createElement("div",{className:"header__info"},r.a.createElement(g.a,{src:t.photoURL}),r.a.createElement("h4",null,t.displayName)),r.a.createElement(R.a,null,r.a.createElement(D.a,null)),r.a.createElement(R.a,null,r.a.createElement(M.a,null)),r.a.createElement(R.a,null,r.a.createElement(B.a,null)),r.a.createElement(R.a,null,r.a.createElement(T.a,null))))},H=t(98),X=t(99),G=t(100),K=t(101),Q=t(102),Y=t(103);var $=function(e){var a=e.src,t=e.Icon,n=e.title;return r.a.createElement("div",{className:"sidebarRow"},a&&r.a.createElement(g.a,{src:a}),t&&r.a.createElement(t,null),r.a.createElement("h4",null,n))};var q=function(){var e=N(),a=Object(o.a)(e,2),t=a[0].user;return a[1],r.a.createElement("div",{className:"sidebar"},r.a.createElement($,{src:t.photoURL,title:t.displayName}),r.a.createElement($,{Icon:H.a,title:"COVID-19 Information Center"}),r.a.createElement($,{Icon:X.a,title:"Pages"}),r.a.createElement($,{Icon:G.a,title:"Friends"}),r.a.createElement($,{Icon:K.a,title:"Messenger"}),r.a.createElement($,{Icon:Q.a,title:"Marketplace"}),r.a.createElement($,{Icon:Y.a,title:"Videos"}),r.a.createElement($,{Icon:I.a,title:"Marketplace"}))},Z=(t(67),t(104)),ee=t(32),ae="SET_USER",te=function(e,a){switch(console.log(a),a.type){case ae:return Object(ee.a)(Object(ee.a)({},e),{},{user:a.user});default:return e}};var ne=function(){var e=N(),a=Object(o.a)(e,2),t=(a[0],a[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__logo"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png",alt:"",srcset:""}),r.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})),r.a.createElement(Z.a,{type:"submit",onClick:function(e){e.preventDefault(),d.signInWithPopup(p).then((function(e){t({type:ae,user:e.user}),console.log(e)})).catch((function(e){return alert(e.message)}))}},"Sign In"))};var re=function(){var e=N(),a=Object(o.a)(e,2),t=a[0].user;return a[1],r.a.createElement("div",{className:"app"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("div",{className:"app__body"},r.a.createElement(q,null),r.a.createElement(P,null),r.a.createElement(i,null))):r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,{initialState:{user:null},reducer:te},r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.b26b57d6.chunk.js.map