(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=a(7),i=a(6),m=a(16),l=a.n(m),u=a(30),p=a(10),v=a(11),d=a(13),E=a(12),h=a(14),y=a(31),f=a.n(y);a(57);var b=function(e){e.id;var t=e.year,a=e.title,n=e.summary,o=e.poster,c=e.genres;return r.a.createElement(s.b,{to:{pathname:"/movie-detail",stat:{year:t,title:a,summary:n,poster:o,genres:c}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:o,alt:a,title:a}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,140),"..."))))},g=(a(63),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(64);var N=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,"Go ahead, make my day."),r.a.createElement("span",null,"- Sudden Impact, 1983"))},_=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){return r.a.createElement("span",null,"hello")}}]),t}(r.a.Component);a(65);var j=function(){return r.a.createElement("div",{className:"menu"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};var O=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:N}),r.a.createElement(i.a,{path:"/movie-detail",component:_}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b93b30c1.chunk.js.map