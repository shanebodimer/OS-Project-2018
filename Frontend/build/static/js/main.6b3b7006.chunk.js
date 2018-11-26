(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{302:function(e,t,a){e.exports=a(697)},516:function(e,t,a){},681:function(e,t,a){},690:function(e,t,a){},695:function(e,t,a){},697:function(e,t,a){"use strict";a.r(t);a(303);var n=a(1),s=a.n(n),i=a(43),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var o=a(28),c=a(29),m=a(32),h=a(30),u=a(31),d=a(705),p=a(708),f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"navigation"},"Mandelbrot Fractal Set Generator"),s.a.createElement("div",{className:"sub-navigation"},s.a.createElement("small",null,s.a.createElement("span",{className:"text-muted"},"RPi Cluster status: "),"192.168.1.47 ",s.a.createElement("span",{className:"text-success mr-2"},"(online)"),"192.168.1.48 ",s.a.createElement("span",{className:"text-success mr-2"},"(online)"),"192.168.1.49 ",s.a.createElement("span",{className:"text-success mr-2"},"(online)"),"192.168.1.50 ",s.a.createElement("span",{className:"text-success mr-2"},"(online)"))),this.props.children)}}]),t}(s.a.Component),b=a(79),g=a(20),E=a(52),v=a(706),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(E.a,null,s.a.createElement("small",null,this.props.title),s.a.createElement(E.b,{type:"select",name:this.props.name,className:"at-select",value:this.props.value,onChange:this.props.handleChange},this.props.options.map(function(e,t){return s.a.createElement("option",{key:t},e)})))}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={size:"100x100",iterations:10,nodes:1,threads:1},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.submitSingleTest=a.submitSingleTest.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"submitSingleTest",value:function(){var e={type:"single",size:this.state.size,iterations:this.state.iterations,nodes:this.state.nodes,threads:this.state.threads};this.props.submitTest(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"w-100 body"},s.a.createElement("h3",null,s.a.createElement("i",{className:"far fa-image"})," Configure single test"),s.a.createElement(j,{name:"size",title:"Image size",handleChange:this.handleChange,value:this.state.size,options:["100x100","250x250","500x500","750x750","1000x1000","5000x5000","10000x10000"]}),s.a.createElement(E.a,null,s.a.createElement("small",null,"Max iterations"),s.a.createElement(E.b,{type:"number",min:0,name:"iterations",className:"at-select number",value:this.state.iterations,onChange:this.handleChange})),s.a.createElement(j,{name:"nodes",title:"Number of worker nodes",handleChange:this.handleChange,value:this.state.nodes,options:[1,2,3]}),s.a.createElement(j,{name:"threads",title:"Threads per node",handleChange:this.handleChange,value:this.state.threads,options:[1,2,3,4,5,6,7,8,9,10]}),s.a.createElement("br",null),s.a.createElement("div",{className:"btn btn-lg btn-primary w-100 text-left",onClick:this.submitSingleTest},"Generate fractal",s.a.createElement("i",{className:"fas fa-arrow-right fa-sm ml-2"})))}}]),t}(s.a.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={size:"100x100",iterations:10,nodes:1,threads:1,modifier:"Number of worker nodes",from:1,to:2},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.submitBatchTest=a.submitBatchTest.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){switch(this.setState(Object(b.a)({},e.target.name,e.target.value)),e.target.value){case"Max iterations":this.setState({from:10,to:20});break;case"Number of worker nodes":case"Threads per node":this.setState({from:1,to:2})}}},{key:"submitBatchTest",value:function(){console.log(this.state.to,this.state.from);var e={type:"batch",modifier:this.state.modifier,from:this.state.from,to:this.state.to,size:this.state.size,iterations:this.state.iterations,nodes:this.state.nodes,threads:this.state.threads};this.props.submitTest(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"w-100 body"},s.a.createElement("h3",null,s.a.createElement("i",{className:"far fa-images"})," Configure batch test"),s.a.createElement(E.a,null,s.a.createElement("small",{className:"modifier"},"Modifier"),s.a.createElement(E.b,{type:"select",name:"modifier",className:"at-select",value:this.state.modifier,onChange:this.handleChange},s.a.createElement("option",null,"Max iterations"),s.a.createElement("option",null,"Number of worker nodes"),s.a.createElement("option",null,"Threads per node"))),s.a.createElement(j,{name:"size",title:"Image size",handleChange:this.handleChange,value:this.state.size,options:["100x100","250x250","500x500","750x750","1000x1000","5000x5000","10000x10000"]}),"Max iterations"!==this.state.modifier&&s.a.createElement(E.a,null,s.a.createElement("small",null,"Max iterations"),s.a.createElement(E.b,{type:"number",min:0,name:"iterations",className:"at-select number",value:this.state.iterations,onChange:this.handleChange})),"Max iterations"===this.state.modifier&&s.a.createElement("div",{className:"row options"},s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"from",title:"From max iterations",handleChange:this.handleChange,value:this.state.from,options:[10,20,50,75,100]})),s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"to",title:"To max iterations",handleChange:this.handleChange,value:this.state.to,options:[10,20,50,75,100]}))),"Number of worker nodes"!==this.state.modifier&&s.a.createElement(j,{name:"nodes",title:"Number of worker nodes",handleChange:this.handleChange,value:this.state.nodes,options:[1,2,3]}),"Number of worker nodes"===this.state.modifier&&s.a.createElement("div",{className:"row options"},s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"from",title:"From # of worker nodes",handleChange:this.handleChange,value:this.state.from,options:[1,2,3]})),s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"to",title:"To # of worker nodes",handleChange:this.handleChange,value:this.state.to,options:[1,2,3]}))),"Threads per node"!==this.state.modifier&&s.a.createElement(j,{name:"threads",title:"Threads per node",handleChange:this.handleChange,value:this.state.threads,options:[1,2,3,4,5,6,7,8,9,10]}),"Threads per node"===this.state.modifier&&s.a.createElement("div",{className:"row options"},s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"from",title:"From threads per node",handleChange:this.handleChange,value:this.state.from,options:[1,2,3,4,5,6,7,8,9,10]})),s.a.createElement("div",{className:"col-md"},s.a.createElement(j,{name:"to",title:"To threads per node",handleChange:this.handleChange,value:this.state.to,options:[1,2,3,4,5,6,7,8,9,10]}))),s.a.createElement("br",null),s.a.createElement("div",{className:"btn btn-lg btn-primary w-100 text-left",onClick:this.submitBatchTest},"Generate fractals",s.a.createElement("i",{className:"fas fa-arrow-right fa-sm ml-2"})))}}]),t}(s.a.Component),N=(a(516),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={size:100,iterations:10,nodes:1,threads:1},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.submitTest=a.submitTest.bind(Object(g.a)(Object(g.a)(a))),a.updateTestType=a.updateTestType.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"submitTest",value:function(e){this.props.runTest(e)}},{key:"updateTestType",value:function(e){this.props.testType(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-md-4 lhs"},s.a.createElement(v.a,{tabs:[{type:"single",label:s.a.createElement("small",null,s.a.createElement("i",{className:"far fa-image mr-1"}),"Single test"),content:s.a.createElement(y,{submitTest:this.submitTest})},{type:"batch",label:s.a.createElement("small",null,s.a.createElement("i",{className:"far fa-images mr-1"}),"Batch test"),content:s.a.createElement(O,{submitTest:this.submitTest})}],onSelect:function(t){return e.updateTestType(t.type)},selected:"single"===this.props.type?0:1}))}}]),t}(s.a.Component)),w=a(294),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={imgHash:Date.now()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row w-100"},s.a.createElement("div",{className:"col-md-8 text-center"},s.a.createElement("center",null,this.props.size&&s.a.createElement(w.a,Object.assign({className:"result-img",enlargedImagePosition:"over",enlargedImageStyle:{backgroundSize:"3000% 3000%"},fadeDurationInMs:0,hoverDelayInMs:0},{smallImage:{isFluidWidth:!0,src:"http://64.251.149.246/api/frac.bmp?".concat(this.state.imgHash)},largeImage:{src:"http://64.251.149.246/api/frac.bmp?".concat(this.state.imgHash),width:1200,height:1800}})),!this.props.size&&s.a.createElement("div",{className:"placeholder"},this.props.running&&s.a.createElement("i",{className:"fas fa-spinner fa-spin fa-5x text-white"})),s.a.createElement("pre",null,this.props.size?this.props.size:s.a.createElement("span",null,this.props.running?"Running":"Waiting...")))),s.a.createElement("div",{className:"col-md-4"},this.props.size&&s.a.createElement("div",{className:"results h-100"},s.a.createElement("div",{className:"speed shine move bg-primary"},s.a.createElement("center",null,"Completed in",s.a.createElement("br",null),s.a.createElement("h1",null,this.props.speed),"seconds")),s.a.createElement("div",{className:"details"},s.a.createElement("pre",null,"Configuration:",s.a.createElement("br",null),s.a.createElement("h6",null,s.a.createElement("b",null,this.props.size)," size"),s.a.createElement("h6",null,s.a.createElement("b",null,this.props.max)," iterations"),s.a.createElement("h6",null,s.a.createElement("b",null,this.props.nodes)," nodes"),s.a.createElement("h6",null,s.a.createElement("b",null,this.props.threads)," threads"))),s.a.createElement("a",{href:"http://64.251.149.246/api/frac.bmp",className:"btn btn-outline-primary btn-sm mt-4"},"Download image ",s.a.createElement("i",{className:"fas fa-download"})))))}}]),t}(s.a.Component),T=a(707),k=a(704),x=a(679),z=a(698),S=a(680),M=a(699),I=a(198),W=a.n(I),B=function(){return W.a.post("http://64.251.149.246/api/results.json",{},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(e){return e.data}).catch(function(e){return console.log("run() error:",e),e})},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={data:!1},B().then(function(e){a.setState({data:e})}),setInterval(function(){return B().then(function(e){a.setState({data:e})})},500),a.fetchNew=a.fetchNew.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"fetchNew",value:function(){var e=this;B().then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("h4",null,this.props.mod?this.props.mod:"Max iterations"," vs. Time"),"in seconds",s.a.createElement("br",null),this.state.data&&s.a.createElement(T.a,{width:730,height:500,data:this.state.data,margin:{top:5,right:20,left:0,bottom:5}},s.a.createElement(k.a,{strokeDasharray:"5 5"}),s.a.createElement(x.a,{dataKey:"name",strokeWidth:2}),s.a.createElement(z.a,null),s.a.createElement(S.a,{dataKey:"time",strokeWidth:2,domain:["auto","auto"]}),s.a.createElement(M.a,{type:"monotone",dataKey:"time",stroke:"#0052cc",strokeWidth:4,animationDuration:100})),s.a.createElement("a",{className:"btn btn-outline-primary btn-sm",href:"http://64.251.149.246/api/results.json",target:"blank"},"View raw data ",s.a.createElement("i",{className:"fas fa-external-link-alt"}))))}}]),t}(s.a.Component),D=(a(681),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={progress:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-8 rhs"},s.a.createElement("div",{className:"title"},s.a.createElement("small",null,"single"===this.props.testType?s.a.createElement("span",null,s.a.createElement("i",{className:"far fa-image fa-fw mr-1 text-primary"}),"Single test"):s.a.createElement("span",null,s.a.createElement("i",{className:"far fa-images fa-fw mr-1 text-primary"}),"Batch test"))),s.a.createElement("div",{className:"inside d-flex align-items-center justify-content-center"},"single"===this.props.testType?s.a.createElement(C,{speed:this.props.speed,size:this.props.size,max:this.props.max,nodes:this.props.nodes,threads:this.props.threads,running:this.props.running}):s.a.createElement(F,{mod:this.props.modifier})))}}]),t}(s.a.Component)),A=(a(683),function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(m.a)(this,Object(h.a)(t).call(this,e)),document.title="Mandelbrot Fractal Set Generator",a.state={testType:"single",running:!1,key:!1,speed:!1,size:!1,max:!1,nodes:!1,threads:!1,modifier:!1},a.runTest=a.runTest.bind(Object(g.a)(Object(g.a)(a))),a.testType=a.testType.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"testType",value:function(e){this.setState({testType:e})}},{key:"runTest",value:function(e){var t=this,a=Math.floor(1e9*Math.random()).toFixed(0);this.setState({running:!0,key:a,speed:!1,size:!1}),function(e,t){return W.a.post("http://64.251.149.246/api/run.php",{key:e,params:t},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(e){return console.log(e.data),e.data.toFixed(4)}).catch(function(e){return console.log("run() error:",e),e})}(a,e).then(function(a){t.setState({speed:a,size:e.size,max:e.iterations,nodes:e.nodes,threads:e.threads,modifier:e.modifier,running:!1})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"single"},s.a.createElement("div",{className:"row"},s.a.createElement(N,{testType:this.testType,type:this.state.testType,runTest:this.runTest,running:this.state.running}),s.a.createElement(D,Object(b.a)({key:this.state.key,running:this.state.running,testType:this.state.testType,speed:this.state.speed,size:this.state.size,max:this.state.max,nodes:this.state.nodes,threads:this.state.threads,modifier:this.state.modifier},"running",this.state.running))))}}]),t}(s.a.Component)),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(f,null,s.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(A,e)}})))}}]),t}(s.a.Component);a(688),a(690),a(695);Object(i.render)(s.a.createElement(G,null),window.document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");r?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):l(e)})}}()}},[[302,2,1]]]);
//# sourceMappingURL=main.6b3b7006.chunk.js.map