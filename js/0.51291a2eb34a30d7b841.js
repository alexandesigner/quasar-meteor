webpackJsonp([0],{25:function(L,M,j){"use strict";function u(L){j(34)}Object.defineProperty(M,"__esModule",{value:!0});var t=j(36),N=j(38),i=j(5),w=u,s=i(t.a,N.a,!1,w,null,null);M.default=s.exports},34:function(L,M,j){var u=j(35);"string"==typeof u&&(u=[[L.i,u,""]]),u.locals&&(L.exports=u.locals);j(23)("0313f445",u,!0)},35:function(L,M,j){M=L.exports=j(22)(void 0),M.push([L.i,".hello{text-align:center}.padding{padding:30px}.margin{margin:20px auto;display:table}.block-field{max-width:480px;margin:0 auto}.block-list{max-width:480px;margin:30px auto}.q-if-label{text-align:left}",""])},36:function(L,M,j){"use strict";var u=j(4),t=j(6),N=(j.n(t),j(37)),i=j(28);j.n(i);M.a={name:"hello",components:{QBtn:u.a,QList:u.h,QListHeader:u.i,QItem:u.e,QItemSide:u.g,QItemMain:u.f,QInput:u.d,QCard:u.b},data:function(){return{tasks:[],newTask:""}},created:function(){var L=this;t.Meteor.subscribe("tasks"),i.Tracker.autorun(function(){L.tasks=N.a.find({},{sort:{createdAt:-1}}).map(function(L){return{_id:L._id,title:L.title}})})},methods:{addTask:function(){if(this.newTask)return t.Meteor.call("tasks.insert",this.newTask)},removeTask:function(L){t.Meteor.call("tasks.remove",L._id)}}}},37:function(L,M,j){"use strict";j.d(M,"a",function(){return i});var u=j(6),t=(j.n(u),j(26)),N=(j.n(t),j(27)),i=(j.n(N),new t.Mongo.Collection("tasks"));u.Meteor.isServer&&u.Meteor.publish("tasks",function(){return i.find()}),u.Meteor.methods({"tasks.insert":function(L){Object(N.check)(L,String),i.insert({title:L,createdAt:new Date})},"tasks.remove":function(L){Object(N.check)(L,String),i.remove(L)}})},38:function(L,M,j){"use strict";var u=function(){var L=this,M=L.$createElement,u=L._self._c||M;return u("div",{staticClass:"hello"},[u("img",{attrs:{src:j(39),alt:"Quasar + Meteor",width:"280"}}),L._v(" "),u("h5",[L._v("Welcome to your Quasar + Meteor")]),L._v(" "),u("div",{staticClass:"padding"},[u("div",{staticClass:"block-field"},[u("q-input",{attrs:{"stack-label":"Add Task"},model:{value:L.newTask,callback:function(M){L.newTask=M},expression:"newTask"}}),L._v(" "),u("q-btn",{attrs:{color:"primary"},on:{click:L.addTask}},[L._v("Add")])],1),L._v(" "),u("q-card",{staticClass:"block-list"},[u("q-list",[0===this.tasks.length?u("div",[u("span",{staticClass:"margin"},[L._v("\n            No registration for tasks\n          ")])]):L._l(L.tasks,function(M,j){return u("q-item",{key:M.id},[u("q-item-main",[L._v("\n            "+L._s(M.title)+"\n          ")]),L._v(" "),u("q-item-side",[u("q-btn",{attrs:{color:"negative"},on:{click:function(j){L.removeTask(M)}}},[L._v("Remove")])],1)],1)})],2)],1)],1)])},t=[],N={render:u,staticRenderFns:t};M.a=N},39:function(L,M){L.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMzU3MCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiIHNvZGlwb2RpOmRvY25hbWU9InF1YXNhci1sb2dvLWZ1bGwuc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5MS4xIDE3OC4zIgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5MS4xIDE3OC4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzI2MzIzODt9Cgkuc3Qxe2ZpbGw6IzE5NzZEMjt9Cgkuc3Qye2ZpbGw6IzQyQTVGNTt9Cgkuc3Qze2ZpbGw6I0RGNEY0Rjt9Cjwvc3R5bGU+Cjxzb2RpcG9kaTpuYW1lZHZpZXcgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIGZpdC1tYXJnaW4tdG9wPSIwIiBpZD0iYmFzZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iZzQ4OTUtNC00IiBpbmtzY2FwZTpjeD0iLTM5Ljc1MzU4OSIgaW5rc2NhcGU6Y3k9IjI3LjcwNjM4OCIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU2IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMjQiIGlua3NjYXBlOnpvb209IjEuOTc5ODk5IiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSI+Cgk8L3NvZGlwb2RpOm5hbWVkdmlldz4KPHBhdGggaWQ9InBhdGgzNDI4IiBjbGFzcz0ic3QwIiBkPSJNMTkuOSwxNzQuOWMtMC4zLDAtMC43LDAtMSwwLjFjLTAuNCwwLTAuNywwLTEuMSwwaC03LjVjLTYuOCwwLTEwLjMtMi4zLTEwLjMtNi44di0xMC44CgljMC00LjQsMy40LTYuNiwxMC4xLTYuNmg3LjhjNi43LDAsMTAuMSwyLjIsMTAuMSw2LjZ2MTAuOGMwLDIuNy0xLjIsNC42LTMuNiw1LjZsMi41LDEuN2MwLjcsMC40LDEuMSwwLjksMS4xLDEuNHMtMC4yLDAuOC0wLjYsMS4xCgljLTAuNCwwLjMtMC45LDAuNC0xLjUsMC40Yy0wLjIsMC0wLjQsMC0wLjYtMC4xYy0wLjIsMC0wLjUtMC4yLTAuOC0wLjRMMTkuOSwxNzQuOUwxOS45LDE3NC45eiBNMjQuMiwxNTcuNWMwLTIuNS0yLjEtMy44LTYuNC0zLjgKCWgtNy43Yy00LjIsMC02LjQsMS4zLTYuNCwzLjh2MTAuN2MwLDIuNiwyLjIsNCw2LjYsNGg3LjFjNC40LDAsNi42LTEuMyw2LjYtNEwyNC4yLDE1Ny41TDI0LjIsMTU3LjV6Ii8+CjxwYXRoIGlkPSJwYXRoMzQzMCIgY2xhc3M9InN0MCIgZD0iTTQ3LjYsMTc1Yy02LDAtOS0xLjgtOS01LjV2LTEwLjJjMC0xLDAuNi0xLjUsMS45LTEuNWMxLjIsMCwxLjksMC41LDEuOSwxLjV2MTAuMgoJYzAsMS44LDEuNywyLjcsNS4yLDIuN2g2LjdjMy41LDAsNS4yLTAuOSw1LjItMi43di0xMC4yYzAtMSwwLjYtMS41LDEuOS0xLjVjMS4zLDAsMS45LDAuNSwxLjksMS41djEwLjJjMCwzLjctMyw1LjUtOSw1LjVINDcuNnoiCgkvPgo8cGF0aCBpZD0icGF0aDM0MzIiIGNsYXNzPSJzdDAiIGQ9Ik04MC4yLDE3NWMtNSwwLTcuNS0xLjYtNy41LTQuN3YtMmMwLTMuMSwyLjUtNC42LDcuNS00LjZoMTQuOXYtMC41YzAtMS42LTEuNC0yLjQtNC4zLTIuNGgtNC45CgljLTEuMiwwLTEuOC0wLjUtMS44LTEuNGMwLTAuOSwwLjYtMS40LDEuOC0xLjRoNC45YzUuMywwLDcuOSwxLjcsNy45LDUuMnY2LjljMCwzLjMtMi41LDQuOS03LjYsNC45SDgwLjJMODAuMiwxNzV6IE05MC45LDE3Mi4zCgljMi44LDAsNC4yLTAuOCw0LjItMi4zdi0zLjhIODAuNWMtMi43LDAtNC4xLDAuNy00LjEsMi4xdjEuOGMwLDEuNCwxLjQsMi4yLDQuMSwyLjJMOTAuOSwxNzIuM0w5MC45LDE3Mi4zeiIvPgo8cGF0aCBpZD0icGF0aDM0MzQiIGNsYXNzPSJzdDAiIGQ9Ik0xMzEuOCwxNzEuMWMwLDIuNi0yLjcsMy45LTgsMy45aC0xMy43Yy0xLjIsMC0xLjgtMC41LTEuOC0xLjRjMC0wLjksMC42LTEuNCwxLjgtMS40aDEzLjcKCWMyLjksMCw0LjMtMC40LDQuMy0xLjJ2LTJjMC0wLjgtMS40LTEuMi00LjMtMS4yaC03LjJjLTUuMywwLTgtMS4zLTgtMy44di0xLjZjMC0zLDIuNy00LjUsOC4yLTQuNWg0LjhjMS4yLDAsMS44LDAuNSwxLjgsMS40CgljMCwwLjUtMC4yLDAuOC0wLjUsMS4xYy0wLjMsMC4yLTAuNywwLjMtMS4zLDAuM2gtNC44Yy0zLjEsMC00LjYsMC42LTQuNiwxLjd2MS41YzAsMSwxLjUsMS40LDQuNiwxLjRoNy4yYzUuMiwwLDcuOCwxLjIsNy44LDMuNgoJVjE3MS4xTDEzMS44LDE3MS4xeiIvPgo8cGF0aCBpZD0icGF0aDM0MzYiIGNsYXNzPSJzdDAiIGQ9Ik0xNDguNSwxNzVjLTUsMC03LjUtMS42LTcuNS00Ljd2LTJjMC0zLjEsMi41LTQuNiw3LjUtNC42aDE0Ljl2LTAuNWMwLTEuNi0xLjQtMi40LTQuMy0yLjRoLTQuOQoJYy0xLjIsMC0xLjgtMC41LTEuOC0xLjRjMC0wLjksMC42LTEuNCwxLjgtMS40aDQuOWM1LjMsMCw3LjksMS43LDcuOSw1LjJ2Ni45YzAsMy4zLTIuNSw0LjktNy42LDQuOUgxNDguNUwxNDguNSwxNzV6IE0xNTkuMiwxNzIuMwoJYzIuOCwwLDQuMi0wLjgsNC4yLTIuM3YtMy44aC0xNC42Yy0yLjcsMC00LjEsMC43LTQuMSwyLjF2MS44YzAsMS40LDEuNCwyLjIsNC4xLDIuMkwxNTkuMiwxNzIuM0wxNTkuMiwxNzIuM3oiLz4KPHBhdGggaWQ9InBhdGgzNDM4IiBjbGFzcz0ic3QwIiBkPSJNMTc3LjYsMTYzLjZjMC0zLjcsMy01LjYsOS01LjZoMi43YzEuMiwwLDEuOCwwLjUsMS44LDEuNGMwLDEtMC42LDEuNC0xLjgsMS40aC0yLjgKCWMtMy41LDAtNS4yLDAuOS01LjIsMi42djEwLjJjMCwxLTAuNiwxLjUtMS45LDEuNWMtMS4yLDAtMS45LTAuNS0xLjktMS41VjE2My42TDE3Ny42LDE2My42eiIvPgo8Zz4KCTxnPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjItNS01LTktMS05LTItNyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNTE0LjA0ODU1IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii00NDQuMDQ2NDkiIGNsYXNzPSJzdDEiIGQ9IgoJCQlNMTM5LjUsMzYuNWMtMi4yLTMuOS01LTcuNC04LjEtMTAuNmwtMTEuOSw2LjljLTMuNy0zLjItNy45LTUuNi0xMi40LTcuMmMtNC4xLDQuMS03LjMsOC43LTkuNiwxMy43YzEzLjItMC45LDI2LjksMy45LDM5LjYsMTMuOAoJCQlsNy41LTQuM0MxNDMuNCw0NC41LDE0MS43LDQwLjQsMTM5LjUsMzYuNUwxMzkuNSwzNi41eiIvPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjQtNC04LTEtMi03LTMtMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNjg5LjYzNzI3IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjI2NS44MDIxNyIgY2xhc3M9InN0MiIgZD0iCgkJCU0xMzkuNSw4OS4zYzIuMi0zLjksMy45LTgsNS4xLTEyLjNsLTExLjktNi45YzAuOS00LjgsMC45LTkuNywwLTE0LjRjLTUuNi0xLjUtMTEuMi0yLTE2LjctMS41YzcuNCwxMSwxMC4xLDI1LjMsNy44LDQxLjIKCQkJbDcuNSw0LjNDMTM0LjUsOTYuNywxMzcuMiw5My4yLDEzOS41LDg5LjNMMTM5LjUsODkuM3oiLz4KCQkKCQkJPHBhdGggaWQ9InBhdGg4ODY2LTctNS01LTAtMy01LTYiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTExNy40OTAwNyIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSI2MzkuMzQwMjkiIGNsYXNzPSJzdDEiIGQ9IgoJCQlNOTMuOCwxMTUuN2M0LjUsMCw4LjktMC42LDEzLjItMS43di0xMy43YzQuNi0xLjYsOC44LTQuMSwxMi40LTcuMmMtMS41LTUuNi0zLjktMTAuNy03LjEtMTUuMmMtNS44LDExLjktMTYuOCwyMS40LTMxLjgsMjcuNAoJCQl2OC42Qzg0LjksMTE1LjEsODkuMywxMTUuNyw5My44LDExNS43eiIvPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjgtNi03LTQtNy01LTctMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI1MTQuMDQ4NTciIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iNDQ0LjA0NjUyIiBjbGFzcz0ic3QyIiBkPSIKCQkJTTQ4LjEsODkuM2MyLjIsMy45LDUsNy40LDguMSwxMC42TDY4LjEsOTNjMy43LDMuMiw3LjksNS42LDEyLjQsNy4yYzQuMS00LjEsNy4zLTguNyw5LjYtMTMuN2MtMTMuMiwwLjktMjYuOS0zLjktMzkuNi0xMy44CgkJCUw0Myw3N0M0NC4yLDgxLjMsNDUuOSw4NS40LDQ4LjEsODkuM0w0OC4xLDg5LjN6Ii8+CgkJCgkJCTxwYXRoIGlkPSJwYXRoODg3MC01LTMtOS0zLTAtMC05IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjY4OS42MzcyOSIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItMjY1LjgwMjIxIiBjbGFzcz0ic3QxIiBkPSIKCQkJTTQ4LjEsMzYuNWMtMi4yLDMuOS0zLjksOC01LjEsMTIuM2wxMS45LDYuOWMtMC45LDQuOC0wLjksOS43LDAsMTQuNGM1LjYsMS41LDExLjIsMiwxNi43LDEuNWMtNy40LTExLTEwLjEtMjUuMy03LjgtNDEuMgoJCQlMNTYuMiwyNkM1My4xLDI5LjEsNTAuMywzMi43LDQ4LjEsMzYuNXoiLz4KCQkKCQkJPHBhdGggaWQ9InBhdGg4ODcyLTYtMy0yLTEtNC0yLTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iMTE3LjQ5MDA1IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii02MzkuMzQwMzIiIGNsYXNzPSJzdDIiIGQ9IgoJCQlNOTMuOCwxMC4yYy00LjUsMC04LjksMC42LTEzLjIsMS43djEzLjdjLTQuNiwxLjYtOC44LDQuMS0xMi40LDcuMmMxLjUsNS42LDMuOSwxMC43LDcuMSwxNS4yQzgxLjEsMzYsOTIsMjYuNiwxMDcsMjAuNnYtOC42CgkJCUMxMDIuNywxMC44LDk4LjIsMTAuMiw5My44LDEwLjJMOTMuOCwxMC4yeiIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTc2LjgsNDYuMmwyOS4yLDMwLjljMCwwLDEsMC43LDEuOC0wLjFjMC44LTAuOCwwLjItMS42LDAuMi0xLjZMNzYuOCw0Ni4yTDc2LjgsNDYuMnogTTg2LDQ5LjFsMjIuMiwyMy45CgkJYzAsMCwxLDAuNywxLjgtMC4xYzAuOC0wLjgsMC4yLTEuNiwwLjItMS42TDg2LDQ5LjF6IE03OS41LDU1LjRsMjIuMiwyMy45YzAsMCwxLDAuNywxLjgtMC4xYzAuOC0wLjgsMC4yLTEuNiwwLjItMS42TDc5LjUsNTUuNHoKCQkgTTkzLjgsNTEuN2wxNS41LDE2LjdjMCwwLDAuNywwLjUsMS4yLTAuMWMwLjUtMC42LDAuMS0xLjEsMC4xLTEuMUw5My44LDUxLjdMOTMuOCw1MS43eiBNODEuNiw2Mi42bDE1LjUsMTYuNwoJCWMwLDAsMC43LDAuNSwxLjItMC4xYzAuNS0wLjYsMC4xLTEuMSwwLjEtMS4xTDgxLjYsNjIuNnogTTEwMS44LDU1LjNsNyw3LjZjMCwwLDAuMywwLjIsMC42LDBjMC4zLTAuMywwLjEtMC41LDAuMS0wLjVMMTAxLjgsNTUuMwoJCXogTTg1LjUsNzAuM2w3LDcuNmMwLDAsMC4zLDAuMiwwLjYsMGMwLjMtMC4zLDAuMS0wLjUsMC4xLTAuNUw4NS41LDcwLjN6Ii8+CjwvZz4KPC9zdmc+Cg=="}});