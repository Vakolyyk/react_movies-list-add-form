(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i),s=(a(19),a(12)),r=a(8),c=a(9),o=a(13),l=a(11),m=a(1),d=a.n(m),j=(a(20),a(14)),b=(a(21),a(22),a(0)),u=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:i,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[a,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},h=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(u,Object(j.a)({},e),e.imdbId)}))})},p=a(2),O=a(4),g=a.n(O),f=(a(24),function(e){var t=e.onAdd,a=Object(m.useState)(""),i=Object(p.a)(a,2),n=i[0],s=i[1],r=Object(m.useState)(""),c=Object(p.a)(r,2),o=c[0],l=c[1],d=Object(m.useState)(""),j=Object(p.a)(d,2),u=j[0],h=j[1],O=Object(m.useState)(""),f=Object(p.a)(O,2),v=f[0],_=f[1],x=Object(m.useState)(""),M=Object(p.a)(x,2),w=M[0],N=M[1],y=Object(m.useState)(!1),I=Object(p.a)(y,2),U=I[0],T=I[1],B=Object(m.useState)(!1),S=Object(p.a)(B,2),k=S[0],z=S[1],A=Object(m.useState)(!1),D=Object(p.a)(A,2),V=D[0],Y=D[1],C=Object(m.useState)(!1),F=Object(p.a)(C,2),X=F[0],Z=F[1],E={title:n,description:o,imgUrl:u,imdbUrl:v,imdbId:w};return Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n||T(!0),u||z(!0),v||Y(!0),w||Z(!0),n&&u&&v&&w&&(t(E),s(""),l(""),h(""),_(""),N(""))},children:[Object(b.jsx)("input",{type:"text",className:g()("form__input",{"form__input--error":U}),name:"title",placeholder:"Title",value:n,onChange:function(e){s(e.target.value),T(!1)}}),U&&Object(b.jsx)("p",{className:"form__error",children:"Please enter a title"}),Object(b.jsx)("input",{type:"text",className:"form__input",name:"description",placeholder:"Description",value:o,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("input",{type:"text",className:g()("form__input",{"form__input--error":k}),name:"imgUrl",placeholder:"ImgUrl",value:u,onChange:function(e){h(e.target.value),z(!1)}}),k&&Object(b.jsx)("p",{className:"form__error",children:"Please enter a ImgUrl"}),Object(b.jsx)("input",{type:"text",className:g()("form__input",{"form__input--error":V}),name:"imdbUrl",placeholder:"ImdbUrl",value:v,onChange:function(e){_(e.target.value),Y(!1)}}),V&&Object(b.jsx)("p",{className:"form__error",children:"Please enter a ImdbUrl"}),Object(b.jsx)("input",{type:"text",className:g()("form__input",{"form__input--error":X}),name:"imdbId",placeholder:"ImdbId",value:w,onChange:function(e){N(e.target.value),Z(!1)}}),X&&Object(b.jsx)("p",{className:"form__error",children:"Please enter a ImdbId"}),Object(b.jsx)("button",{type:"submit",disabled:X||V||k||U,children:"Add"})]})}),v=a(10),_=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(h,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(f,{onAdd:this.addMovie})})]})}}]),a}(d.a.Component);n.a.render(Object(b.jsx)(_,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cac24190.chunk.js.map