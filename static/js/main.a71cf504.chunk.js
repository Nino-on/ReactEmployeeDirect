(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Raul Nino ","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Manager","location":"Pines "},{"id":2,"name":"Alex Largaespada","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Co-owner","location":"Miami"},{"id":3,"name":"Thad Holmes","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Scheduler","location":"Aventura"},{"id":4,"name":"Red Evers","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Database ","location":"Charlotte"},{"id":5,"name":"Oscar Nunez","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Co-owner","location":"Aventura"},{"id":6,"name":"Annoying Work","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"dumb shit","location":"nowhere"}]')},,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),i=a.n(c),r=(a(14),a(4)),l=a(5),s=a(8),m=a(6);a(15);var u=function(e){return o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"Employee Name"),o.a.createElement("th",{scope:"col"},"Occupation"),o.a.createElement("th",{scope:"col"},"Location"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.occupation),o.a.createElement("td",null,e.location))))},p=a(7);var g=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],i=a[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleSubmit(c)},className:"search"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"language"},"Search Term:"),o.a.createElement("input",{value:c,onChange:function(e){i(e.target.value)},name:"username",list:"term",type:"text",className:"form-control",placeholder:"Type in a search term to begin",id:"term"}),o.a.createElement("div",{className:"mt-4"},o.a.createElement("h3",null," ",c))))},h=a(1),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={employees:h,username:""},e.changeUserName=function(t){e.setState({username:t}),console.log(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(h),o.a.createElement("div",null,o.a.createElement(g,{handleSubmit:this.changeUserName}),this.state.employees.filter((function(t){return!e.state.username||!!t.name.toLowerCase().includes(e.state.username.toLowerCase())})).map((function(e,t){return o.a.createElement(u,{key:t,id:e.id,name:e.name,occupation:e.occupation,location:e.location})})),";")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a71cf504.chunk.js.map