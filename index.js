
// document.getElementById('button').addEventListener('click', function () {
//     var list = document.getElementById('displayArea');
//     //list.innerHTML = ''; //resetting the list
//     var todoInput = document.getElementById('myInput').value;
//     todos.push(todoInput)
//     for (var i = 0; i < todos.length; i++) {
//       var listItem = document.createTextNode(todos[i]);
//       var li = document.createElement("li");
//       li.setAttribute("id",setAttr)
//       li.appendChild(listItem);
//       document.getElementById("myInput").value = "";
//       list.append(li);
//       allTodos.push(todoInput)
//       closed.push(todoInput)
//       todos.pop(todoInput);
//     }
//     setAttr++;

//     var span = document.createElement("list");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (var i = 0; i < close.length; i++) {
//       close[i].onclick = function(i) {
//         var div = this.parentElement;
//         getAttr = div.getAttribute('id');
//         deleted.unshift(closed[getAttr]);
//         console.log(deleted);
//         div.style.display = "none";
//         div.className = '';
//         allTodos.pop();
//       }
//     }
//     })