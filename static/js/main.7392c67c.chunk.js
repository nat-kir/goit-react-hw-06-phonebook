(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={List:"ContactList_List__20gyh",ListItem:"ContactList_ListItem__vxGfb",button:"ContactList_button__1RuFy"}},15:function(e,t,n){e.exports={label:"Filter_label__3DcZT",labelName:"Filter_labelName__3VI7p",input:"Filter_input__2DoVp"}},26:function(e,t,n){e.exports={Container:"Container_Container__3tQ9A"}},29:function(e,t,n){e.exports={enter:"ContactListItem-fade_enter__3L9LC",enterActive:"ContactListItem-fade_enterActive__3juOu",exit:"ContactListItem-fade_exit__2OvWU",exitActive:"ContactListItem-fade_exitActive__1R0L4"}},32:function(e,t,n){e.exports={Notification:"Notification_Notification__2vzo1"}},39:function(e,t,n){e.exports=n(56)},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),i=n(26),l=n.n(i),u=function(e){var t=e.children;return c.a.createElement("div",{className:l.a.Container},t)},s=n(27),m=n(13),b=n.n(m),f=n(5),d=n(6),p=n(59),_={addContact:Object(d.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{contact:{id:Object(p.a)(),name:t,number:n}}}})),deleteContact:Object(d.b)("contacts/delete"),filterContacts:Object(d.b)("contacts/filter")},h=Object(f.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(s.a)({},n)}),(function(e,t){return{onDeleteContact:function(){return e(_.deleteContact(t.id))}}}))((function(e){var t=e.id,n=e.name,a=e.number,o=e.onDeleteContact;return c.a.createElement("li",{className:b.a.ListItem,key:t},c.a.createElement("p",null,n," : ",a),c.a.createElement("button",{className:b.a.button,type:"button",onClick:o},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})),C=n(60),E=n(58),N=n(29),v=n.n(N),O=Object(f.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))}}))((function(e){var t=e.contacts;return t.length>0&&c.a.createElement(C.a,{component:"ul",className:b.a.List},t.map((function(e){var t=e.id;return c.a.createElement(E.a,{key:t,timeout:250,classNames:v.a},c.a.createElement(h,{id:t}))})))})),j=n(9),y=n(30),L=n(31),g=n(37),x=n(36),I=n(7),A=n.n(I),w=n(32),F=n.n(w),S=function(e){var t=e.message;return c.a.createElement("div",{className:F.a.Notification},c.a.createElement("p",null,t))},k=(n(48),function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",notification:"",notificationIsVisible:!1},e.handleInputChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(j.a)({},a,c))},e.handleSubmit=function(t){var n=e.state,a=n.name,c=n.number,o=e.props.contacts;t.preventDefault(),""!==a?""!==c?o.some((function(e){return a.toLowerCase()===e.name.toLowerCase()}))?e.setState({notification:'Contact "'.concat(a,'" is already exist'),notificationIsVisible:!0}):o.some((function(e){return c===e.number}))?e.setState({notification:'Number "'.concat(c,'" is already exist'),notificationIsVisible:!0}):(e.props.onAddContact({name:a,number:c}),e.reset()):alert("Please, add a number"):alert("Please, give a name for new contact")},e.reset=function(){e.setState({name:"",number:""})},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.notification,a=t.notificationIsVisible;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{in:a,timeout:3e3,classNames:"Notification-slideIn",unmountOnExit:!0,onEntered:function(){return e.setState({notificationIsVisible:!1})}},c.a.createElement(S,{message:n}))," ",c.a.createElement("form",{className:A.a.form,autoComplete:"off",onSubmit:this.handleSubmit},c.a.createElement("label",{className:A.a.label},c.a.createElement("p",{className:A.a.labelName},"Name:*"),c.a.createElement("input",{required:!0,className:A.a.input,type:"text",placeholder:"ex. Anne Hathaway",value:this.state.name,name:"name",onChange:this.handleInputChange})),c.a.createElement("label",{className:A.a.label},c.a.createElement("p",{className:A.a.labelName},"Number:*"),c.a.createElement("input",{required:!0,className:A.a.input,type:"number",placeholder:"ex. 0532455678",value:this.state.number,name:"number",onChange:this.handleInputChange})),c.a.createElement("button",{className:A.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component)),V={onAddContact:_.addContact},D=Object(f.b)((function(e){return{contacts:e.contacts.items}}),V)(k),P=n(15),T=n.n(P),q={onChange:_.filterContacts},G=Object(f.b)((function(e){return{value:e.contacts.filter}}),q)((function(e){var t=e.value,n=e.onChange;return c.a.createElement("label",{className:T.a.label},c.a.createElement("p",{className:T.a.labelName},"Find contact by name"),c.a.createElement("input",{className:T.a.input,type:"text",placeholder:"Name",value:t,onChange:function(e){return n(e.target.value)}}))})),J=(n(49),function(){return c.a.createElement(E.a,{in:!0,appear:!0,timeout:250,classNames:"AppName-slideIn",unmountOnExit:!0},c.a.createElement("h2",null,"Phonebook"))});n(50);function M(){return c.a.createElement(u,null,c.a.createElement(J,null),c.a.createElement(D,null),c.a.createElement(G,null),c.a.createElement("h2",null,"Contacts"),c.a.createElement(O,null))}n(51);var R,z=n(34),B=n(35),H=n(3),Q=Object(d.c)([],(R={},Object(j.a)(R,_.addContact,(function(e,t){return[].concat(Object(B.a)(e),[t.payload.contact])})),Object(j.a)(R,_.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),R)),U=Object(d.c)("",Object(j.a)({},_.filterContacts,(function(e,t){return t.payload}))),W=Object(H.c)({items:Q,filter:U}),Z=Object(d.a)({reducer:{contacts:W}});r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z.a,null,c.a.createElement(f.a,{store:Z},c.a.createElement(M,null)))),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",labelName:"Form_labelName__2L7Gh",button:"Form_button__243jh"}}},[[39,1,2]]]);
//# sourceMappingURL=main.7392c67c.chunk.js.map