(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),s=(n(14),n(8)),i=n(1),l=n(2),u=n(4),d=n(3),m=n(5),p=(n(16),n(18),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"tasks"},o.a.createElement("p",{className:"ToDoItem-Text"},this.props.item),o.a.createElement("button",{className:"ToDoItem-Delete",onClick:this.props.deleteItem},"-"))}}]),t}(a.Component)),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleInput=function(e){n.setState({todo:e.target.value})},n.handleKeyPress=function(e){""!==e.target.value&&"Enter"===e.key&&n.createNewToDoItem()},n.createNewToDoItem=function(e){""!==n.state.todo?n.setState(function(e){var t=e.list,n=e.todo;return{list:[].concat(Object(s.a)(t),[{todo:n}]),todo:""}}):console.log("oopsie")},n.deleteItem=function(e){n.setState(function(t){return{list:t.list.filter(function(t,n){return n!==e})}})},n.state={list:[{todo:"clean the house"},{todo:"pay bills"}],todo:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",{className:"todo-wrapper"},o.a.createElement("div",{className:"ToDo-Container"},o.a.createElement("div",{className:"ToDo-Content"},this.state.list.map(function(e,n){return o.a.createElement(p,{key:n,item:e.todo,deleteItem:t.deleteItem.bind(t,n)})}))),o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{type:"text",value:this.state.todo,placeholder:"Your task..",onChange:this.handleInput,onKeyPress:this.handleKeyPress}),o.a.createElement("button",{className:"add-button",onClick:this.createNewToDoItem},"+")))}}]),t}(a.Component);r.a.render(o.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.d32621da.chunk.js.map