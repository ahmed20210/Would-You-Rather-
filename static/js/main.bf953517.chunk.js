(this["webpackJsonpWould-You-Rather-"]=this["webpackJsonpWould-You-Rather-"]||[]).push([[0],{83:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(34),o=n(9),c=n(23),i=n.n(c),u=(n(83),n(6)),j=n(2),d=n(14),h={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},l={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function b(e){return new Promise((function(t,n){var r=e.author,s=function(e){var t=e.optionOneText,n=e.optionTwoText,r=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:r,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){l=Object(j.a)(Object(j.a)({},l),{},Object(u.a)({},s.id,s)),h=Object(j.a)(Object(j.a)({},h),{},Object(u.a)({},r,Object(j.a)(Object(j.a)({},h[r]),{},{questions:h[r].questions.concat([s.id])}))),t(s)}),1e3)}))}function O(e){return function(e){var t=e.authedUser,n=e.qid,r=e.answer;return new Promise((function(e,s){setTimeout((function(){h=Object(j.a)(Object(j.a)({},h),{},Object(u.a)({},t,Object(j.a)(Object(j.a)({},h[t]),{},{answers:Object(j.a)(Object(j.a)({},h[t].answers),{},Object(u.a)({},n,r))}))),l=Object(j.a)(Object(j.a)({},l),{},Object(u.a)({},n,Object(j.a)(Object(j.a)({},l[n]),{},Object(u.a)({},r,Object(j.a)(Object(j.a)({},l[n][r]),{},{votes:l[n][r].votes.concat([t])}))))),e()}),500)}))}(e)}var p=n(25),m=n.n(p),x="RECEIVE_QUESTIONS",v="ADD_QUESTION",f="ADD_ANSWER";function y(e,t){return function(n,r){var s,a=r().authedUser;return n(Object(p.showLoading)()),(s={optionOneText:e,optionTwoText:t,author:a},b(s)).then((function(e){return n(function(e){return{type:v,question:e}}(e))})).then((function(){return n(Object(p.hideLoading)())}))}}function w(e){return function(t){return O(e).then((function(){return t(function(e){var t=e.authedUser,n=e.qid,r=e.answer;return{type:f,answerInfo:{authedUser:t,qid:n,answer:r}}}(e))}))}}var g="RECEIVE_USERS";var q="AUTHED_USER",T="REST_AUTHED_USER";var k=Object(a.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return t.id;case T:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)(Object(j.a)({},e),t.users);case f:var n=t.answerInfo,r=n.qid,s=n.answer,a=n.authedUser;return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,Object(j.a)(Object(j.a)({},e[a]),{},{answers:Object(j.a)(Object(j.a)({},e[a].answers),{},Object(u.a)({},r,s))})));case v:return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.question.author,Object(j.a)(Object(j.a)({},e[t.question.author]),{},{questions:e[t.question.author].questions.concat([t.question.id])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(j.a)(Object(j.a)({},e),t.questions);case f:var n=t.answerInfo,r=n.authedUser,s=n.qid,a=n.answer;return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},s,Object(j.a)(Object(j.a)({},e[s]),{},Object(u.a)({},a,Object(j.a)(Object(j.a)({},e[s][a]),{},{votes:e[s][a].votes.concat([r])})))));case v:return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.question.id,t.question));default:return e}},loadingBar:p.loadingBarReducer}),C=n(66),U=n(67),S=n.n(U),N=Object(a.a)(C.a,S.a),R=n(10),L=n(11),D=n(13),E=n(12),A=n(22),z=n(103),I=n(96),H=n(73),B=n(97),P=n(98),W=n(1),F=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this,t=this.props.author,n=t.name,r=t.avatarURL;t.id;return console.log(this.props.author.id),Object(W.jsx)(z.a,{bg:"light",expand:"lg",children:Object(W.jsxs)(I.a,{children:[Object(W.jsx)(z.a.Brand,{href:"#home",children:"Would You Rather?"}),Object(W.jsx)(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(W.jsx)(z.a.Collapse,{id:"basic-navbar-nav",children:Object(W.jsxs)(H.a,{className:"me-auto",children:[Object(W.jsxs)(H.a.Link,{as:A.c,to:"/",exact:!0,children:[" ","Home"," "]}),Object(W.jsxs)(H.a.Link,{as:A.c,to:"/add",children:[" ","New Question"," "]}),Object(W.jsxs)(H.a.Link,{as:A.c,to:"/leaderboard",children:[" ","Leaderboard"]}),Object(W.jsxs)(z.a.Text,{className:"text-end mx-5",children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:r,roundedCircle:!0})," ",n]}),Object(W.jsxs)(P.a,{className:"mx-0",onClick:function(){(0,e.props.dispatch)({type:T})},children:[" ","logout"]})]})})]})})}}]),n}(r.Component);var Q=Object(o.connect)((function(e){return{author:e.users[e.authedUser]}}))(F),Y=n(15);n(92);function M(){return function(e){return e(Object(p.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(j.a)({},h))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(j.a)({},l))}),1e3)}))]).then((function(e){var t=Object(d.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,r=t.questions;e(function(e){return{type:g,users:e}}(n)),e(function(e){return{type:x,questions:e}}(r)),e(Object(p.hideLoading)())}))}}var _=n(100),G=n(105),J=n(99),V=n(72),K=n(104);function $(e){var t=new Date(e),n=t.toLocaleTimeString("en-US");return n.substr(0,5)+n.slice(-2)+" | "+t.toLocaleDateString()}var X=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(W.jsxs)(r.Fragment,{children:[Object(W.jsx)("h1",{children:"404 PAGE NOT FOUND"}),Object(W.jsx)("h3",{children:"We are sorry but the page you are looking for does not exist"})]})}}]),n}(r.Component),Z=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){if(null===this.props.question)return Object(W.jsx)(X,{});var e=this.props.question,t=e.author,n=e.optionOne,r=e.timestamp;return Object(W.jsx)(J.a,{className:"justify-content-center m-1",children:Object(W.jsx)(V.a,{className:" text-center",xs:12,md:6,children:Object(W.jsxs)(K.a,{className:"m-2",children:[Object(W.jsxs)(K.a.Header,{children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:this.props.users[t].avatarURL,roundedCircle:!0})," ",t,Object(W.jsxs)(K.a.Text,{children:[" ",Object(W.jsxs)("small",{children:[" Created : ",$(r)," "]})," "]})]}),Object(W.jsxs)(K.a.Body,{children:[Object(W.jsxs)(K.a.Text,{children:[" ",n.text]}),Object(W.jsx)(A.b,{to:"questions/".concat(this.props.id),children:Object(W.jsx)(P.a,{children:"View Question"})})]})]})})})}}]),n}(r.Component);var ee=Object(o.connect)((function(e,t){var n=e.questions,r=e.users,s=t.id,a=n[s];return{question:a||null,users:r,id:s}}))(Z),te=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){if(null===this.props.questions)return Object(W.jsx)(X,{});var e=this.props.question,t=e.author,n=e.optionOne,r=e.timestamp;return Object(W.jsx)(J.a,{className:"justify-content-center",children:Object(W.jsx)(V.a,{className:" text-center",xs:12,md:6,children:Object(W.jsxs)(K.a,{className:"m-2",children:[Object(W.jsxs)(K.a.Header,{children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:this.props.users[t].avatarURL,roundedCircle:!0})," ",t,Object(W.jsxs)(K.a.Text,{children:[" ",Object(W.jsxs)("small",{children:[" Created : ",$(r)," "]})," "]})]}),Object(W.jsxs)(K.a.Body,{children:[Object(W.jsxs)(K.a.Text,{children:[" ",n.text," "]}),Object(W.jsx)(A.b,{to:"/questions/".concat(this.props.id),children:Object(W.jsx)(P.a,{children:"View Question"})})]})]})})})}}]),n}(r.Component);var ne=Object(o.connect)((function(e,t){var n=e.questions,r=e.users,s=t.id;return{question:n[s],users:r,id:s}}))(te),re=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(W.jsx)(r.Fragment,{children:Object(W.jsxs)(_.a,{defaultActiveKey:"UnAnswered",transition:!1,id:"noanim-tab-example",className:"mb-3",children:[Object(W.jsx)(G.a,{eventKey:"UnAnswered",title:"UnAnswered",children:this.props.unAnsweredQuestion.map((function(e){return Object(W.jsx)(ne,{className:"m-1",id:e},e)}))}),Object(W.jsx)(G.a,{eventKey:"Answered",title:"Answered",children:this.props.answeredQuestion.map((function(e){return Object(W.jsx)(ee,{className:"m-1",id:e},e)}))})]})})}}]),n}(r.Component);var se=Object(o.connect)((function(e){var t=e.questions,n=e.users,r=e.authedUser,s=Object.keys(t).sort((function(e,n){return t[n].timestamp-t[e].timestamp}));return{answeredQuestion:s.filter((function(e){return n[r].answers.hasOwnProperty(e)})),unAnsweredQuestion:s.filter((function(e){return!n[r].answers.hasOwnProperty(e)}))}}))(re),ae=n(102),oe=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(R.a)(this,n),(e=t.call(this)).state={optionOne:"",optionTwo:"",toHome:!1},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this;return!0===this.state.toHome?Object(W.jsx)(Y.a,{to:"/"}):Object(W.jsx)(r.Fragment,{children:Object(W.jsx)(J.a,{className:"justify-content-center m-5",children:Object(W.jsxs)(K.a,{bg:"light",className:" text-center",style:{width:"30rem"},children:[Object(W.jsx)(K.a.Header,{children:Object(W.jsx)("h1",{children:"Would You Rather?"})}),Object(W.jsxs)(ae.a,{onSubmit:function(t){t.preventDefault();var n=e.props.dispatch,r=e.state;n(y(r.optionOne,r.optionTwo)),e.setState({optionOne:"",optionTwo:"",toHome:!0})},children:[Object(W.jsx)("p",{children:" test"}),Object(W.jsxs)(ae.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(W.jsx)(ae.a.Label,{children:"option one "}),Object(W.jsx)(ae.a.Control,{placeholder:"First option",onChange:function(t){var n=t.target.value;e.setState({optionOne:n})}})]}),Object(W.jsx)("h3",{children:" OR "}),Object(W.jsxs)(ae.a.Group,{className:"mb-3",onChange:function(t){var n=t.target.value;e.setState({optionTwo:n})},controlId:"formBasicEmail",children:[Object(W.jsx)(ae.a.Label,{children:"option two "}),Object(W.jsx)(ae.a.Control,{placeholder:"Second option"})]}),Object(W.jsx)(P.a,{variant:"primary",disabled:""===this.state.optionOne||""===this.state.optionTwo,type:"submit",children:"Submit"})]})]})})})}}]),n}(r.Component);var ce=Object(o.connect)((function(e){return{authedUser:e.authedUser}}))(oe),ie=n(101),ue=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props.id;if(console.log(this.props.question[e].id),null==this.props.question[e])return Object(W.jsx)(X,{});var t=this.props.question[e],n=t.author,r=t.optionOne,s=t.optionTwo,a=t.timestamp,o=r.votes.length+s.votes.length,c=Math.round(r.votes.length/o*100),i=Math.round(s.votes.length/o*100);return Object(W.jsxs)(J.a,{className:"justify-content-center",children:[Object(W.jsx)("h2",{children:"Would You Rather "}),Object(W.jsxs)(K.a,{style:{width:"18rem"},children:[Object(W.jsxs)(K.a.Header,{children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:this.props.users[n].avatarURL,roundedCircle:!0})," ",n,Object(W.jsxs)(K.a.Text,{children:["Created : ",$(a)," "]})]}),Object(W.jsxs)(K.a.Body,{children:[Object(W.jsx)(K.a.Title,{children:"Rusults:"}),Object(W.jsx)(K.a.Text,{children:r.text}),Object(W.jsx)(ie.a,{now:c,label:"".concat(c,"%")}),Object(W.jsxs)("small",{children:[" ",r.votes.length," of 3 chosed this"]}),Object(W.jsx)("h2",{children:"OR "}),Object(W.jsx)(K.a.Text,{children:s.text}),Object(W.jsx)(ie.a,{now:i,label:"".concat(i,"%")}),Object(W.jsxs)("small",{children:[" ",s.votes.length," of 3 chosed this"]})]})]})]})}}]),n}(r.Component);var je=Object(o.connect)((function(e){var t=e.questions;return{question:t||null,users:e.users}}))(ue),de=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(R.a)(this,n),(e=t.call(this)).state={answer:"",toHome:!1},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this,t=this.props.id;if(null==this.props.questions[t])return Object(W.jsx)(X,{});var n=this.props.questions[t],r=n.author,s=n.optionOne,a=n.optionTwo,o=n.timestamp,c=this.state.answer,i=this.props,u=i.dispatch,j=i.authedUser;return!0===this.state.toHome?Object(W.jsx)(Y.a,{to:"/questions/".concat(t)}):Object(W.jsx)(J.a,{className:"justify-content-center m-5",children:Object(W.jsxs)(K.a,{style:{width:"25rem"},children:[Object(W.jsxs)(K.a.Header,{children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:this.props.users[r].avatarURL,roundedCircle:!0})," ",r,Object(W.jsxs)(K.a.Text,{children:[" ",Object(W.jsxs)("small",{children:[" ","Created : ",$(o),console.log(this.state.answer)," "]})," "]})]}),Object(W.jsxs)(K.a.Body,{children:[Object(W.jsx)(K.a.Title,{children:"Would You Rather"}),Object(W.jsxs)(ae.a,{onChange:function(t){var n=t.target.value;e.setState({answer:n})},onSubmit:function(n){return function(t,n){e.setState({toHome:!0,answer:""}),t.preventDefault(),u(w({authedUser:j,qid:n,answer:c}))}(n,t)},children:[Object(W.jsx)("fieldset",{children:Object(W.jsx)(ae.a.Group,{as:J.a,className:"mb-3",children:Object(W.jsxs)(V.a,{sm:10,children:[Object(W.jsx)(ae.a.Check,{type:"radio",label:s.text,name:"answer",value:"optionOne"}),Object(W.jsx)(ae.a.Check,{type:"radio",label:a.text,name:"answer",value:"optionTwo"})]})})}),Object(W.jsx)(P.a,{disabled:""===this.state.answer,variant:"primary",type:"submit",children:"Submit"})]})]})]})})}}]),n}(r.Component);var he=Object(o.connect)((function(e,t){var n=e.questions,r=e.users;return{questions:n,authedUser:e.authedUser,users:r,id:t.id}}))(de),le=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;if(null==this.props.questions[e])return Object(W.jsx)(X,{});var t=!!this.props.authedAnswer.hasOwnProperty(e);return Object(W.jsx)(r.Fragment,{children:t?Object(W.jsx)(je,{id:e}):Object(W.jsx)(he,{id:e})})}}]),n}(r.Component);var be=Object(o.connect)((function(e){var t=e.authedUser,n=e.users,r=e.questions;return{authedAnswer:n[t].answers,questions:r}}))(le),Oe=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props.user,t=e.name,n=e.avatarURL,r=e.answers,s=e.questions;return Object(W.jsxs)(K.a,{className:"m-5",children:[Object(W.jsxs)(K.a.Header,{children:[Object(W.jsx)(B.a,{width:"40",height:"40",src:n,roundedCircle:!0})," ",t]}),Object(W.jsxs)(K.a.Body,{children:[Object(W.jsxs)(K.a.Text,{children:["Answered Questions : ",Object.keys(r).length]}),Object(W.jsxs)(K.a.Text,{children:["Created Questions : ",Object.keys(s).length]})]}),Object(W.jsxs)(K.a.Footer,{children:["Score : ",Object.keys(r).length+Object.keys(s).length]})]})}}]),n}(r.Component);var pe=Object(o.connect)((function(e,t){return{user:e.users[t.id]}}))(Oe),me=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props.users;return Object(W.jsx)(J.a,{className:"justify-content-center",children:Object(W.jsx)(V.a,{className:" text-center",xs:12,md:6,children:Object(W.jsx)("ul",{children:e.map((function(e){return Object(W.jsx)(pe,{className:"m-5",id:e},e)}))})})})}}]),n}(r.Component);var xe=Object(o.connect)((function(e){var t=e.users;return{users:Object.keys(t).sort((function(e,n){var r=Object.keys(t[e].answers).length+t[e].questions.length;return Object.keys(t[n].answers).length+t[n].questions.length-r}))}}))(me),ve=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(R.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={userID:""},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this;return Object(W.jsx)("div",{className:" row justify-content-center container m-5",style:{alignItems:"center"},children:Object(W.jsxs)(K.a,{className:"justify-content-center",style:{alignItems:"center",width:"30rem",height:"25rem"},children:[Object(W.jsx)(K.a.Header,{children:"Sign in"}),Object(W.jsx)(K.a.Img,{variant:"top",style:{height:"15rem"},src:"/redux.png"}),Object(W.jsxs)(ae.a,{className:"row justify-content-center",onChange:function(t){e.setState({userID:t.target.value})},onSubmit:function(t){var n=e.state.userID,r=e.props.dispatch;t.preventDefault(),""!==n&&r({type:q,id:n})},children:[Object(W.jsxs)(ae.a.Select,{"aria-label":"Default select example",children:[Object(W.jsx)("option",{children:"Select user"}),this.props.users.map((function(e){return Object(W.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(W.jsx)(P.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(r.Component);var fe=Object(o.connect)((function(e){var t=e.users;return{users:Object.keys(t).map((function(e){return{id:e,name:t[e].name}})),user:t}}))(ve),ye=function(e){Object(D.a)(n,e);var t=Object(E.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(M())}},{key:"render",value:function(){return Object(W.jsxs)("div",{className:"App container justify-content-center",children:[Object(W.jsx)(m.a,{}),!0===this.props.loading?Object(W.jsx)(fe,{}):Object(W.jsxs)(A.a,{children:[Object(W.jsx)(Q,{}),Object(W.jsxs)(Y.d,{children:[Object(W.jsx)(Y.b,{exact:!0,path:"Would-You-Rather-/",component:se}),Object(W.jsx)(Y.b,{path:"Would-You-Rather-/add",component:ce}),Object(W.jsx)(Y.b,{path:"Would-You-Rather-/questions/:id",component:be}),Object(W.jsx)(Y.b,{path:"Would-You-Rather-/leaderboard",component:xe}),Object(W.jsx)(Y.b,{component:X})]})]})]})}}]),n}(r.Component);var we=Object(o.connect)((function(e){return{loading:null===e.authedUser}}))(ye),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},qe=Object(a.c)(k,N);i.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(o.Provider,{store:qe,children:Object(W.jsx)(we,{})})}),document.getElementById("root")),ge()}},[[93,1,2]]]);
//# sourceMappingURL=main.bf953517.chunk.js.map