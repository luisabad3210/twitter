(this["webpackJsonptwitter-app"]=this["webpackJsonptwitter-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/bitcoin.298eb8eb.png"},27:function(e,t,a){e.exports=a(47)},32:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),o=(a(32),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),h=(a(33),a(7)),d=a.n(h),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tweets"},r.a.createElement("div",null,r.a.createElement("img",{className:"smallProfilePic",alt:"profile pic",src:d.a,width:"40",height:"40"})," ",r.a.createElement("i",{className:"postName"},"Luis Abad ",this.props.tweets.date)),r.a.createElement("div",{className:"tweetBody"},this.props.tweets.body),this.props.tweets.comments,r.a.createElement("button",{className:"Btn"},"Comment"),r.a.createElement("button",{className:"Btn"},"Retweet"),r.a.createElement("button",{className:"Btn"},"Likes"),r.a.createElement("button",{className:"Btn"},"Share"),r.a.createElement("hr",null))}}]),t}(r.a.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tweet:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"posting"},r.a.createElement("img",{alt:"profile pic",className:"smallProfilePic",src:d.a,width:"40",height:"40"}),r.a.createElement("input",{className:"postInput",type:"text",placeholder:"What`s happening?",onChange:function(t){var a=t.target.value;e.setState({tweet:a})}}),r.a.createElement("button",{className:"tweetBtn",onClick:function(){e.props.transferPost(e.state.tweet)}},"Tweet"))}}]),t}(r.a.Component),b=a(21),E=a.n(b),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={tweets:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6107f6de55684cbab80484c839fbee1e").then((function(e){return e.json()})).then((function(t){e.setState({tweets:t.articles})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.tweets.map((function(e,t){return r.a.createElement("div",{key:t,className:"tweets"},r.a.createElement("img",{className:"bitcoinImg",alt:"bitcoin profile pic",src:E.a,width:"50",height:"50"}),r.a.createElement("i",{className:"postName"}," Bitcoin ",e.publishedAt.slice(0,10)),r.a.createElement("div",{className:"title"},e.title),r.a.createElement("img",{className:"TweetImg",alt:"",src:e.urlToImage}),r.a.createElement("div",{className:"tweetBody"},e.description),r.a.createElement("button",{className:"Btn"},"Comment"),r.a.createElement("button",{className:"Btn"},"Retweet"),r.a.createElement("button",{className:"Btn"},"Like"),r.a.createElement("button",{className:"Btn"},"Share"),r.a.createElement("hr",null))})))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"pageTitle"},"Home"),r.a.createElement("hr",null),r.a.createElement(f,{transferPost:this.props.transferPost}),r.a.createElement("div",{className:"space"}),r.a.createElement("hr",null),this.props.tweets.map((function(e,t){return r.a.createElement(p,{key:t,index:t,tweets:e})})),r.a.createElement("div",null,"Powered by Google News"),r.a.createElement("hr",null),r.a.createElement(v,null))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tweet:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{className:"smallProfilePic",alt:"profile pic",src:d.a,width:"40",height:"40"}),r.a.createElement("input",{className:"postInput",type:"text",placeholder:"What`s happening?",onChange:function(t){var a=t.target.value;e.setState({tweet:a})}}),r.a.createElement("button",{className:"tweetBtn",onClick:function(){e.props.transferPost(e.state.tweet)}},"Tweet"))}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tweets"},r.a.createElement("div",null,r.a.createElement("img",{className:"smallProfilePic",alt:"profile pic",src:d.a,width:"40",height:"40"}),this.props.tweets.date),r.a.createElement("div",{className:"tweetBody"},this.props.tweets.body),this.props.tweets.comments,r.a.createElement("button",{className:"Btn"},"Comment"),r.a.createElement("button",{className:"Btn"},"Retweet"),r.a.createElement("button",{className:"Btn"},"Likes"),r.a.createElement("button",{className:"Btn"},"Share"),r.a.createElement("hr",null))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"Luis Abad",username:"___UrbanLife___",bio:"Self-motivated developer with a passion for product design. With a keen eye for details, proven experience, imagination and who sees solutions and challenges where others see problems. I am also an out of the box thinker, a disciplined and devoted worker and an individual that is good at sticking to deadlines. ",linkedIn:"",portfolio:"",location:"Atlanta, Ga",joined:"November 2019",born:"June 5, 1993"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"pageTitle"},"Profile"),r.a.createElement("hr",null),r.a.createElement("div",{className:"backgroundImg"},r.a.createElement("img",{className:"profilePic",alt:"profile pic",src:d.a})),r.a.createElement("div",{className:"profileInfo"},r.a.createElement("div",{className:"userName"},this.state.name),r.a.createElement("div",null,"@",this.state.username),r.a.createElement("div",{className:"profileBio"},this.state.bio),r.a.createElement("div",{className:"bellowBio"},r.a.createElement("div",null," Location: ",this.state.location,"  | Born: ",this.state.born),r.a.createElement("div",null,"Joined: ",this.state.joined)),r.a.createElement("button",{className:"Btn"},"Tweets"),r.a.createElement("button",{className:"Btn"},"Tweets and replies"),r.a.createElement("button",{className:"Btn"},"Media"),r.a.createElement("button",{className:"Btn"},"Likes")),r.a.createElement("hr",null),r.a.createElement(w,{transferPost:this.props.transferPost}),r.a.createElement("div",{className:"space"}),r.a.createElement("hr",null),this.props.tweets.map((function(e,t){return r.a.createElement(y,{key:t,index:t,tweets:e})})))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.props.isHomePage?r.a.createElement(g,{tweets:this.props.tweets,transferPost:this.props.transferPost}):r.a.createElement(N,{tweets:this.props.tweets,transferPost:this.props.transferPost})))}}]),t}(r.a.Component),k=a(22),O=a.n(k),C=(a(34),a(36),O.a.initializeApp({apiKey:"AIzaSyDQx-evRp3Dr-s1rLikjhbd-kbeUUSvF7k",authDomain:"twitter-18b8d.firebaseapp.com",databaseURL:"https://twitter-18b8d.firebaseio.com",projectId:"twitter-18b8d",storageBucket:"twitter-18b8d.appspot.com",messagingSenderId:"4301696340",appId:"1:4301696340:web:b3eeeab17a1c0e75b96cc1",measurementId:"G-D7T2NPYPGW"})),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={articles:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6107f6de55684cbab80484c839fbee1e").then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"trending-container"},r.a.createElement("div",{className:"trends-for-you"},r.a.createElement("h2",null,"Whats Happening")," ",r.a.createElement("div",null,"Powered by Google News")),r.a.createElement("hr",null),this.state.articles.map((function(e,t){return r.a.createElement("div",{key:t,className:"trending"},r.a.createElement("h5",{className:"trendingTitle"},e.title),r.a.createElement("div",{className:"trendingBody"},e.description),r.a.createElement("form",{action:e.url},r.a.createElement("button",{className:"Btn",type:"submit"},"Read More")),r.a.createElement("hr",null))})))}}]),t}(r.a.Component),P=a(8),S=a.n(P),M=(a(41),function(e){function t(e){var a,n=this;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={dateContext:S()(),today:S()(),showMonthPopup:!1,showYearPopup:!1,selectedDay:null},a.weekdays=S.a.weekdays(),a.weekdaysShort=S.a.weekdaysShort(),a.months=S.a.months(),a.year=function(){return a.state.dateContext.format("Y")},a.month=function(){return a.state.dateContext.format("MMMM")},a.daysInMonth=function(){return a.state.dateContext.daysInMonth()},a.currentDate=function(){return a.state.dateContext.get("date")},a.currentDay=function(){return a.state.dateContext.format("D")},a.firstDayOfMonth=function(){var e=a.state.dateContext;return S()(e).startOf("month").format("d")},a.setMonth=function(e){var t=a.months.indexOf(e),n=Object.assign({},a.state.dateContext);n=S()(n).set("month",t),a.setState({dateContext:n})},a.onSelectChange=function(e,t){a.setMonth(t),a.props.onMonthChange&&a.props.onMonthChange()},a.SelectList=function(e){var t=e.data.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("a",{href:"#",onClick:function(t){a.onSelectChange(t,e)}},e))}));return r.a.createElement("div",{className:"month-popup"},t)},a.onChangeMonth=function(){a.setState({showMonthPopup:!a.state.showMonthPopup})},a.MonthNav=function(){return r.a.createElement("span",{className:"label-month",onClick:function(e){a.onChangeMonth(e,a.month())}},a.month(),a.state.showMonthPopup&&r.a.createElement(n.SelectList,{data:a.months}))},a.showYearEditor=function(){a.setState({showYearNav:!0})},a.setYear=function(e){var t=Object.assign({},a.state.dateContext);t=S()(t).set("year",e),a.setState({dateContext:t})},a.onYearChange=function(e){a.setYear(e.target.value),a.props.onYearChange&&a.props.onYearChange(e,e.target.value)},a.onKeyUpYear=function(e){13!==e.which&&27!==e.which||(a.setYear(e.target.value),a.setState({showYearNav:!1}))},a.YearNav=function(){return a.state.showYearNav?r.a.createElement("input",{defaultValue:a.year(),className:"editor-year",ref:function(e){a.yearInput=e},onKeyUp:function(e){return a.onKeyUpYear(e)},onChange:function(e){return a.onYearChange(e)},type:"number",placeholder:"year"}):r.a.createElement("span",{className:"label-year",onDoubleClick:function(e){a.showYearEditor()}},a.year())},a.width=e.width,a.style=e.style,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.weekdaysShort.map((function(e){return r.a.createElement("td",{key:e,className:"week-day"},e.toUpperCase())})),t=[],a=0;a<this.firstDayOfMonth();a++)t.push(r.a.createElement("td",{key:80*a,className:"emptySlot"},""));for(var n=[],s=1;s<=this.daysInMonth();s++){var l=s==this.currentDay()?"day current-day":"day",o=s==this.state.selectedDay?" selected-day ":"";n.push(r.a.createElement("td",{key:s,className:l+o},r.a.createElement("span",null,s)))}var c=[].concat(t,n),i=[],m=[];c.forEach((function(e,t){if(t%7!==0)m.push(e);else{var a=m.slice();i.push(a),(m=[]).push(e)}if(t===c.length-1){var n=m.slice();i.push(n)}}));var u=i.map((function(e,t){return r.a.createElement("tr",{key:100*t},e)}));return r.a.createElement("div",{className:"calendar-container",style:this.style},r.a.createElement("table",{className:"calendar"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"calendar-header"},r.a.createElement("td",{colSpan:"5"},r.a.createElement(this.MonthNav,null)," ",r.a.createElement(this.YearNav,null)))),r.a.createElement("tbody",null,r.a.createElement("tr",null,e),u)))}}]),t}(r.a.Component));function x(e,t,a,n){return{date:e,body:t,comments:a,likes:n}}var I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logout=function(){C.auth().signOut()},a.changeToProfile=function(){a.setState({isHomePage:!1})},a.changeToHome=function(){a.setState({isHomePage:!0})},a.state={isHomePage:!0,index:null,tweets:[x("Feb 20 2020","Welcome to my twitter project. Feel free to explore around by checking out my profile, what\u2019s trending, and scrolling through bitcoins tweets. Trending section and bitcoin tweets are both powered by googles news api. Btw the tweets in my profile are random tweets by Elon Musk lol.",[]),x("Feb 10 2020","Tesla April company talk will be from our Giga New York factory, where we make SolarGlass & several other products. Will also offer customer & media tours.",[]),x("Feb 9 2020","All things in moderation, especially etymology",[]),x("Feb 6 2020","Late night tweets \u2026 sigh",[]),x("Feb 6 2020","Hard to believe that is high efficiency solar power seamlessly integrated into beautiful roof tiles. Great work by SolarGlass engineering, Giga NY factory & Tesla installation teams!",[]),x("Feb 4 2020","Please let us know what improvements we can make to any aspect of Tesla SolarGlass roof! Critical feedback is much appreciated.",[])]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"twitter"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",null,"Twitter"),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn",onClick:this.changeToHome},"Home")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"Explore")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"Notification")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"Messages")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"Bookmarks")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"List")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn",onClick:this.changeToProfile},"Profile")),r.a.createElement("div",null,r.a.createElement("button",{className:"navBtn"},"More")),r.a.createElement("button",{className:"logoutBtn",onClick:this.logout},"LogOut")))),r.a.createElement(j,{isHomePage:this.state.isHomePage,tweets:this.state.tweets,transferPost:function(t){var a=x((new Date).toDateString(),t,[],0),n=e.state.tweets;n.unshift(a),e.setState({tweets:n})}}),r.a.createElement("div",{className:"right"},r.a.createElement("div",null,r.a.createElement("input",{className:"search-bar",placeholder:"Search Twitter"})),r.a.createElement(M,null),r.a.createElement(B,null)))}}]),t}(r.a.Component),T=a(23),L=(a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.login=function(e){e.preventDefault(),C.auth().signInWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){a.setState({fireErrors:e.message})}))},a.register=function(e){e.preventDefault(),C.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){a.setState({fireErrors:e.message})}))},a.getAction=function(e){"reg"===e?a.setState({formTitle:"Regester New User",logInBtn:!1,fireErrors:""}):a.setState({formTitle:"Login",logInBtn:!0,fireErrors:""})},a.state={email:"",password:"",fireErrors:"",formTitle:"Login",logInBtn:!0,isLoading:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.fireErrors?r.a.createElement("div",null,this.state.fireErrors):null,a=this.state.logInBtn?r.a.createElement("input",{className:"button",type:"submit",onClick:this.login,value:"Log In"}):r.a.createElement("input",{className:"button",type:"submit",onClick:this.register,value:"Sign Up"}),n=this.state.logInBtn?r.a.createElement("button",{className:"button",onClick:function(){return e.getAction("reg")}},"Sign Up"):r.a.createElement("button",{className:"button",onClick:function(){return e.getAction("login")}},"Back Log In");return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",null,this.state.formTitle)),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"error"},t),r.a.createElement("form",{className:"form-container"},r.a.createElement("div",null,"Email:",r.a.createElement("input",{className:"email",type:"text",value:this.state.email,onChange:this.handleChange,name:"email",placeholder:"Email"})),r.a.createElement("div",null,"Password:",r.a.createElement("input",{className:"email",type:"text",value:this.state.password,onChange:this.handleChange,name:"password",placeholder:"Password"}))),a,n)))}}]),t}(r.a.Component)),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={user:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;C.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.user?r.a.createElement(I,null):r.a.createElement(L,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(26);l.a.render(r.a.createElement(D.a,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a.p+"static/media/profile.b3f93697.jpg"}},[[27,1,2]]]);
//# sourceMappingURL=main.eccaa7e2.chunk.js.map