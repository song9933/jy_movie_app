(this.webpackJsonpjy_movie_app=this.webpackJsonpjy_movie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),c=a(9),i=a(1);a(37);var l=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},m=a(11),u=a.n(m),v=a(25),p=a(26),d=a(27),E=a(31),f=a(30),_=a(28),g=a.n(_);var y=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},h=(a(56),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(57);var b=function(){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};a(63);var N=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(i.a,{path:"/",exact:!0,component:h}),r.a.createElement(i.a,{path:"/about",component:l}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2be74e0e.chunk.js.map