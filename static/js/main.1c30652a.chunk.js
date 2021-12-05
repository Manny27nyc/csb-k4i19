(this.webpackJsonptodomvc=this.webpackJsonptodomvc||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"addTodo",(function(){return w})),n.d(c,"deleteTodo",(function(){return k})),n.d(c,"editTodo",(function(){return E})),n.d(c,"completeTodo",(function(){return N})),n.d(c,"completeAllTodos",(function(){return S})),n.d(c,"clearCompleted",(function(){return D})),n.d(c,"setVisibilityFilter",(function(){return _}));var o,r=n(0),i=n(7),l=n(4),a=n(2),u=n(8),s=n(9),d=n(11),j=n(10),p=n(5),b=n.n(p),f=n(1),h=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={text:e.props.text||""},e.handleSubmit=function(t){var n=t.target.value.trim();13===t.which&&(e.props.onSave(n),e.props.newTodo&&e.setState({text:""}))},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleBlur=function(t){e.props.newTodo||e.props.onSave(t.target.value)},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("input",{className:b()({edit:this.props.editing,"new-todo":this.props.newTodo}),type:"text",placeholder:this.props.placeholder,autoFocus:!0,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})}}]),n}(r.Component),O=function(e){var t=e.addTodo;return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(h,{newTodo:!0,onSave:function(e){0!==e.length&&t(e)},placeholder:"What needs to be done?"})]})},m="ADD_TODO",x="DELETE_TODO",v="EDIT_TODO",C="COMPLETE_TODO",g="COMPLETE_ALL_TODOS",T="CLEAR_COMPLETED",y="SET_VISIBILITY_FILTER",w=function(e){return{type:m,text:e}},k=function(e){return{type:x,id:e}},E=function(e,t){return{type:v,id:e,text:t}},N=function(e){return{type:C,id:e}},S=function(){return{type:g}},D=function(){return{type:T}},_=function(e){return{type:y,filter:e}},A=Object(a.b)(null,{addTodo:w})(O),L=n(6),F=function(e){var t=e.active,n=e.children,c=e.setFilter;return Object(f.jsx)("a",{className:b()({selected:t}),style:{cursor:"pointer"},onClick:function(){return c()},children:n})},I=Object(a.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{setFilter:function(){e(_(t.filter))}}}))(F),B="show_all",M="show_completed",P="show_active",R=(o={},Object(L.a)(o,B,"All"),Object(L.a)(o,P,"Active"),Object(L.a)(o,M,"Completed"),o),J=function(e){var t=e.activeCount,n=e.completedCount,c=e.onClearCompleted,o=1===t?"item":"items";return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[Object(f.jsx)("strong",{children:t||"No"})," ",o," left"]}),Object(f.jsx)("ul",{className:"filters",children:Object.keys(R).map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(I,{filter:e,children:R[e]})},e)}))}),!!n&&Object(f.jsx)("button",{className:"clear-completed",onClick:c,children:"Clear completed"})]})},U=n(3),V=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={editing:!1},e.handleDoubleClick=function(){e.setState({editing:!0})},e.handleSave=function(t,n){0===n.length?e.props.deleteTodo(t):e.props.editTodo(t,n),e.setState({editing:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,c=n.todo,o=n.completeTodo,r=n.deleteTodo;return e=this.state.editing?Object(f.jsx)(h,{text:c.text,editing:this.state.editing,onSave:function(e){return t.handleSave(c.id,e)}}):Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{className:"toggle",type:"checkbox",checked:c.completed,onChange:function(){return o(c.id)}}),Object(f.jsx)("label",{onDoubleClick:this.handleDoubleClick,children:c.text}),Object(f.jsx)("button",{className:"destroy",onClick:function(){return r(c.id)}})]}),Object(f.jsx)("li",{className:b()({completed:c.completed,editing:this.state.editing}),children:e})}}]),n}(r.Component),K=function(e){var t=e.filteredTodos,n=e.actions;return Object(f.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(f.jsx)(V,Object(U.a)({todo:e},n),e.id)}))})},W=n(14),Y=function(e){return e.todos},q=Object(W.a)([function(e){return e.visibilityFilter},Y],(function(e,t){switch(e){case B:return t;case M:return t.filter((function(e){return e.completed}));case P:return t.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+e)}})),z=Object(W.a)([Y],(function(e){return e.reduce((function(e,t){return t.completed?e+1:e}),0)})),G=Object(a.b)((function(e){return{filteredTodos:q(e)}}),(function(e){return{actions:Object(l.a)(c,e)}}))(K),H=function(e){var t=e.todosCount,n=e.completedCount,c=e.actions;return Object(f.jsxs)("section",{className:"main",children:[!!t&&Object(f.jsxs)("span",{children:[Object(f.jsx)("input",{className:"toggle-all",type:"checkbox",checked:n===t,readOnly:!0}),Object(f.jsx)("label",{onClick:c.completeAllTodos})]}),Object(f.jsx)(G,{}),!!t&&Object(f.jsx)(J,{completedCount:n,activeCount:t-n,onClearCompleted:c.clearCompleted})]})},Q=Object(a.b)((function(e){return{todosCount:e.todos.length,completedCount:z(e)}}),(function(e){return{actions:Object(l.a)(c,e)}}))(H),X=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(A,{}),Object(f.jsx)(Q,{})]})},Z=n(16),$=[{text:"Use Redux",completed:!1,id:0}];var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type===y?t.filter:e},te=Object(l.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return[].concat(Object(Z.a)(e),[{id:e.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1,completed:!1,text:t.text}]);case x:return e.filter((function(e){return e.id!==t.id}));case v:return e.map((function(e){return e.id===t.id?Object(U.a)(Object(U.a)({},e),{},{text:t.text}):e}));case C:return e.map((function(e){return e.id===t.id?Object(U.a)(Object(U.a)({},e),{},{completed:!e.completed}):e}));case g:var n=e.every((function(e){return e.completed}));return e.map((function(e){return Object(U.a)(Object(U.a)({},e),{},{completed:!n})}));case T:return e.filter((function(e){return!1===e.completed}));default:return e}},visibilityFilter:ee}),ne=te,ce=(n(28),Object(l.c)(ne));Object(i.render)(Object(f.jsx)(a.a,{store:ce,children:Object(f.jsx)(X,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1c30652a.chunk.js.map