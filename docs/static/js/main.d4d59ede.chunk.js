(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(403)},403:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(24),o=a.n(r),c=a(195),i=a(196),s=a(211),m=a(197),p=a(212),f=a(411),E=a(204),u=a.n(E),d=a(413),b=a(199),g=a(407),x=a(408),C=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",progressColor:"black",controlColor:"black"},n.a.createElement("img",{src:"assets/images/logo-cut.svg",alt:"Teamstarter logo",className:"fixed",style:{top:100,right:100,width:"30%",opacity:"0.2"}}),n.a.createElement(b.a,null,n.a.createElement("p",null,"ASK QUESTION ABOUT SERVER SIDE CODE"),n.a.createElement("p",null,"Due to the graph behavior of graphQ, writting server side code for a GraphQL schema can be more tedious than for a basic REST API"),n.a.createElement("p",null," ","In the talk, through the story of graphql-sequelize-generator, we will see what challenges you could face, and some thumb rules to deal with them."),n.a.createElement("p",null,"No need to be JS/Node/Express expert."),n.a.createElement("p",null,n.a.createElement("li",null,n.a.createElement("ul",null,"1) Server side GraphQL VS REST"),n.a.createElement("ul",null,"2) What GSG solves"),n.a.createElement("ul",null,"3) What is still up to you"),n.a.createElement("ul",null,"4) New trends & conclusion")))),n.a.createElement(g.a,{size:1,caps:!0,fit:!0,textColor:"black"},"STARTUPS"),n.a.createElement(g.a,{size:1,caps:!0,fit:!0,textColor:"black"},"AND GRAPHQL"),n.a.createElement("div",{style:{height:50}}," "),n.a.createElement(x.a,{textColor:"pink",fit:!0,bold:!0},"Benefits & Drawbacks"),n.a.createElement("div",{style:{height:50}}," "),n.a.createElement(x.a,{textColor:"blue",fit:!0,bold:!0},"A postmortem from teamstarter.co")),h=(a(222),n.a.createElement(d.a,{transition:["fade"],bgColor:"white",progressColor:"black",controlColor:"black"},n.a.createElement("style",null,".pyro >.before,\n.pyro>.after {\n  position: absolute;\n  z-index: 10;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  box-shadow: 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9;\n  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;\n}\n\n.pyro>.after {\n  animation-delay: 1.25s, 1.25s, 1.25s;\n  animation-duration: 1.25s, 1.25s, 6.25s;\n}\n\n@keyframes bang {\n  to {\n    box-shadow: 65px -166.66667px #f2ff00, -66px -110.66667px #b300ff, -195px -12.66667px #a6ff00, -229px -141.66667px #0009ff, 191px 80.33333px #55ff00, -188px -415.66667px #00aaff, -194px -276.66667px #c800ff, 39px -175.66667px #ff9900, 110px -64.66667px #ff6200, 202px -297.66667px #ff0026, -203px -28.66667px #00c4ff, 233px -63.66667px #00ddff, -128px -145.66667px #00fff7, -216px -386.66667px #00d0ff, -152px -372.66667px #ff8000, 8px 61.33333px #2bff00, 49px -388.66667px #0066ff, 114px -243.66667px #00e6ff, -224px -382.66667px #003cff, -101px -224.66667px #00d0ff, 92px -255.66667px #51ff00, 207px -272.66667px #2bff00, 225px -244.66667px #00d0ff, -13px -189.66667px #33ff00, 200px -278.66667px #3c00ff, -225px -101.66667px #f700ff, 53px -292.66667px #000dff, 84px -340.66667px #ff1a00, -72px -72.66667px #ff5500, 111px 9.33333px #00ff6a, -206px -74.66667px #04ff00, 98px -14.66667px #77ff00, 241px -106.66667px #00ffa6, 69px -361.66667px #4400ff, 242px 7.33333px #00ff40, -102px -76.66667px #7700ff, 11px -84.66667px #44ff00, -104px -128.66667px #ff7700, -244px -223.66667px #ff00e6, 97px -127.66667px #88ff00, -115px -272.66667px #ff006f, -66px 74.33333px #aa00ff, 125px 65.33333px #00ffee, -202px -239.66667px #bf00ff, -25px -242.66667px #ff2600, -144px -177.66667px #0055ff, 215px -152.66667px #ffb700, 132px -66.66667px #5900ff, 135px -241.66667px #00ff33, -236px 55.33333px #ff5e00, 73px -30.66667px #6fff00;\n  }\n}\n\n@keyframes gravity {\n  to {\n    transform: translateY(200px);\n    opacity: 0;\n  }\n}\n\n@keyframes position {\n  0%,\n  19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%,\n  39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%,\n  59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%,\n  79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%,\n  99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}"),n.a.createElement(g.a,{size:2,textColor:"pink",caps:!0},"We're done!"),n.a.createElement(x.a,{bold:!0,textColor:"blue"},"Questions?"),n.a.createElement(x.a,{textSize:30,style:{marginTop:50}},n.a.createElement("a",{className:"dib",href:"https://github.com/vincentdesmares/talk-startups-and-graphql-benefits-and-drawbacks"},"https://github.com/vincentdesmares/talk-startups-and-graphql-benefits-and-drawbacks")),n.a.createElement("div",{className:"pyro",style:{zIndex:2,position:"absolute",top:0,width:"100%",height:"100%"}},n.a.createElement("div",{className:"before"}),n.a.createElement("div",{className:"after"})))),k=n.a.createElement(d.a,{transition:["slide"],bgColor:"white",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Matters: product studio (+100 produits) / startup studio (Teamstarter)"),n.a.createElement("p",null,"Link: what's teamstarter?")),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,textColor:"black"},"I'm Vincent DESMARES"),n.a.createElement(x.a,{textColor:"pink",fit:!0,style:{marginTop:50}},"Working @",n.a.createElement("b",null,"Matters.tech")," for 8 years! ",n.a.createElement("br",null),"As Dev, Lead Dev and Project Manager."),n.a.createElement(x.a,{textColor:"blue",style:{marginTop:50}},"Now CTO @ Teamstarter for 1 year.")),y=n.a.createElement(d.a,{transition:["zoom"],bgColor:"pink",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Organization allow monthly funds"),n.a.createElement("p",null,"Each person received it continuously"),n.a.createElement("p",null,"Anyone can create a and back a project"),n.a.createElement("p",null,"Arcade box / Christmas decorations / Raclette party / Board games / Conferences"),n.a.createElement("p",null,"Starting a new project: know your priorities")),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,textColor:"white",fit:!0},"What's teamstarter?"),n.a.createElement(x.a,{textColor:"black",fit:!0,bold:!0},"It's like kickstarter in your organization."),n.a.createElement(x.a,{textColor:"white",bold:!0,fit:!0},"Your budget, your project, your culture."));function w(){return n.a.createElement("div",null,n.a.createElement("style",null,"\n  @keyframes resetPosition {\n  0% {\n    transform: translateX(100px) translateY(100px);\n  }\n  100% {\n    transform: translateX(0px) translateY(0px);\n  }\n}\n  "),n.a.createElement("img",{className:"absolute z-0 o-20",alt:"warning",style:{width:600,right:-100,bottom:-60,animation:"resetPosition 1s ease-out"},src:"assets/images/warning.svg"}))}var O=n.a.createElement(d.a,{transition:["zoom"],bgColor:"blue",progressColor:"black",controlColor:"black"},n.a.createElement(w,null),n.a.createElement(g.a,{fit:!0,textColor:"black",caps:!0},"STARTING A STARTUP"),n.a.createElement(x.a,null,"NO RESOURCES = NO LACK OF CHALLENGES"),n.a.createElement(x.a,null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NO PAST = EVERYTHING TO SETUP")),T=a(412),v=n.a.createElement(d.a,{transition:["zoom"],bgColor:"yellow",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"If you have a good idea, it's only a matters of time until your competitors try to race you.")),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"black"},"LIMITED ... EVERYTHING"),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"red"},"TIME, MONEY, SUPPORT, MENTAL SPACE"),n.a.createElement(T.a,null,n.a.createElement(x.a,{fit:!0,bold:!0,textColor:"pink"},"Delivering value is priority N1"))),A=a(409),S=a(410),N=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement("img",{className:"absolute z-0",alt:"warning",style:{width:300,right:100,bottom:100},src:"assets/images/box.svg"}),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"Not just a RFC"),n.a.createElement(g.a,{size:6,textColor:"black",caps:!0,fit:!0},"it comes with a bunch of stuff"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"A good documentation"),n.a.createElement(S.a,null,"A server"),n.a.createElement(S.a,null,"A client"),n.a.createElement(S.a,null,"And a debug tool (GraphiQL)"))),z=n.a.createElement(d.a,{transition:["fade"],bgColor:"blue",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement("img",{className:"absolute z-0",alt:"warning",style:{width:300,right:100,bottom:100},src:"assets/images/learning.svg"}),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"NICE LEARNING CURVE"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"FOR SUCCESSFUL ONBOARDINGS"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Well documented https://graphql.org/learn"),n.a.createElement(S.a,null,"Intuitive"),n.a.createElement(S.a,null,"Visual"),n.a.createElement(S.a,null,"IMHO Being able to grow a team is N2 prio."))),I=n.a.createElement(d.a,{transition:["fade"],bgColor:"purple",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement("img",{className:"pt5",src:"assets/images/graphiql.png",alt:"graphiql"})),R=n.a.createElement(d.a,{transition:["zoom"],bgColor:"red",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(w,null),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"WE'VE SEEN SHORTER"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},'"HELLO WORLD"'),n.a.createElement(g.a,{size:6,textColor:"BLACK",caps:!0,fit:!0},"RESOLVERS CAN BE A PAIN"),n.a.createElement(A.a,{textColor:"white"},n.a.createElement(S.a,null,"With types comes type definition..."),n.a.createElement(S.a,null,"No more \".get('/foo')\""),n.a.createElement(S.a,null,"Spend time setting up good toolings"),n.a.createElement(S.a,null,"Generate the basics!"))),H=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"GENERATE YOUR SCHEMA"),n.a.createElement(g.a,{size:6,textColor:"black",caps:!0,fit:!0},"CRUD operations are a solved problem"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"graphql-sequelize-generator"),n.a.createElement(S.a,null,"graphql-code-generator"),n.a.createElement(S.a,null,"graphql-cli"),n.a.createElement(S.a,null,"json-graphql-server"))),L=n.a.createElement(d.a,{transition:["fade"],bgColor:"blue",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"OPEN SOURCE"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"WE'RE NOT HERE TO SELL YOU THE VACUUM2000"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Facebook backed"),n.a.createElement(S.a,null,"Yet not facebook centric"),n.a.createElement(S.a,null,"Kickstart your project with a SaaS"))),P=n.a.createElement(d.a,{transition:["fade"],bgColor:"pink",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"black",caps:!0,fit:!0},"EVOLUTION READY"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"PIVOT PIVOT PIVOT"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,'"ask-what-you-need" for each call'),n.a.createElement(S.a,null,"No versioning, field deprecation"),n.a.createElement(S.a,null,"Reduce the needs for custom endpoints"))),W=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"ADAPTABLE"),n.a.createElement(x.a,null,"File upload, even on GraphQL!"),n.a.createElement(x.a,null,"(and it's not that hard)")),G=n.a.createElement(d.a,{transition:["fade"],bgColor:"blue",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"BLACK",caps:!0,fit:!0},"WITH DELIVERING A LOT"),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"COMES A LOT OF BUGS"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Everybody has bugs"),n.a.createElement(S.a,null,"The question is how they impact your app?"),n.a.createElement(S.a,null,"Partial errors are one of my favorite feature"),n.a.createElement(S.a,null,"Only some nodes can be in error"),n.a.createElement(S.a,null,"Allows nice error management"))),U=n.a.createElement(d.a,{transition:["fade"],bgColor:"blue",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"BLACK",caps:!0,fit:!0},"HEAVY TYPING"),n.a.createElement(g.a,{size:6,textColor:"pink",caps:!0,fit:!0},"Can have unattended benefits"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Fine client side caching mechanism"),n.a.createElement(S.a,null,"Refresh related components on fetch"))),D=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement("img",{className:"absolute z-0",alt:"warning",style:{width:"25%",right:150,bottom:100},src:"assets/images/team.svg"}),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"blue",caps:!0,fit:!0},"Taking the market in account"),n.a.createElement(A.a,{style:{marginBottom:200}},n.a.createElement(S.a,null,"A tech is nothing without developers"),n.a.createElement(S.a,null,"Check your local market"))),Y=n.a.createElement(d.a,{transition:["fade"],bgColor:"pink",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"EVERYTHING IS AN API"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Avoid client-specific code"),n.a.createElement(S.a,null,"Subscriptions allows for real-time notice"),n.a.createElement(S.a,null,"Kind-of replace the webhooks"))),M=n.a.createElement(d.a,{transition:["fade"],bgColor:"white",progressColor:"black",controlColor:"black"},n.a.createElement("img",{className:"absolute z-0",alt:"warning",style:{width:"25%",right:150,bottom:100},src:"assets/images/blocks.svg"}),n.a.createElement(g.a,{fit:!0,textColor:"pink",caps:!0},"They said to use APIs"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,"Schema stitching"),n.a.createElement(S.a,null,"Regroup your microservices APIs"),n.a.createElement(S.a,null,"Include other SaaS APIs in yours"),n.a.createElement(S.a,null,"AWS Appsync"),n.a.createElement(S.a,{textColor:"red",bold:!0},"Yet, it's a bit early for it"))),V=n.a.createElement(d.a,{transition:["zoom"],bgColor:"red",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(w,null),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"PERFORMANCES ISSUES"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"ARE GRAPHQL BIGGEST PROBLEM"),n.a.createElement(A.a,{textColor:"white"},n.a.createElement(S.a,null,"Yes it avoids overfetch, but..."),n.a.createElement(S.a,null,'"Infinite" query complexity'),n.a.createElement(S.a,null,"Query time issues"),n.a.createElement(S.a,null,'Rights must be "smart"'),n.a.createElement(S.a,null,"Query batching ? Facebook dataloader"),n.a.createElement(S.a,null,"Keep performances in mind at all times"))),q=n.a.createElement(d.a,{transition:["zoom"],bgColor:"yellow",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"If you have a good idea, it's only a matters of time until your competitors try to race you.")),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"black"},"USE WHAT YOU LIKE"),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"pink"},"LET'S TONE DOWN THE RHETORIC"),n.a.createElement(x.a,null,"\u2018Great developers\u200a\u2014\u200anot programming languages\u200a\u2014\u200abuild great products.\u2019\xa0",n.a.createElement("italic",null,n.a.createElement("small",null,"Kevin Dewalt")))),B=n.a.createElement(d.a,{transition:["zoom"],bgColor:"red",textColor:"black",progressColor:"black",controlColor:"black"},n.a.createElement(w,null),n.a.createElement(b.a,null,n.a.createElement("p",null,"Only on type of entity")),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"SOME CHANGES FROM REST"),n.a.createElement(g.a,{size:6,textColor:"WHITE",caps:!0,fit:!0},"ARE HARDER THAN OTHERS"),n.a.createElement(A.a,{textColor:"white"},n.a.createElement(S.a,null,"No full use of HTTP (* is a POST)"),n.a.createElement(S.a,null,"Difficult to cache without proper tooling"),n.a.createElement(S.a,null,"Setup your logs correctly (* is a 200)"))),j=n.a.createElement(d.a,{transition:["zoom"],bgColor:"pink",progressColor:"black",controlColor:"black"},n.a.createElement(b.a,null,n.a.createElement("p",null,"We did not choose GraphQL just by reading blog posts.")),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"white"},"YOU DO NOT HAVE TO"),n.a.createElement(g.a,{size:1,caps:!0,lineHeight:1,fit:!0,textColor:"blue"},"CHOOSE ALONE"),n.a.createElement(A.a,null,n.a.createElement(S.a,null,'"city-o", the CTO club'),n.a.createElement(S.a,null,"Find a startup studio (we're part of Matters)"),n.a.createElement(S.a,null,"Go to meetups! (You got this one already)")));a(374);var F=u()({white:"white",black:"#1F2022",pink:"#ff00ac",blue:"#00dade",yellow:"#ffe400",grey:"#888888",red:"#eb5757"},{primary:"Montserrat",secondary:"Helvetica"}),Q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(f.a,{transition:["fade"],transitionDuration:500,theme:F},C,k,y,O,v,N,z,I,R,H,L,P,V,W,G,B,U,D,Y,M,q,j,h)}}]),t}(n.a.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(n.a.createElement(Q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("https://vincentdesmares.github.io/talk-startups-and-graphql-benefits-and-drawbacks",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("https://vincentdesmares.github.io/talk-startups-and-graphql-benefits-and-drawbacks","/service-worker.js");K?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):J(e)})}}()}},[[213,2,1]]]);
//# sourceMappingURL=main.d4d59ede.chunk.js.map