const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const likeButton = document.querySelector(".like");
//돔 불러오기


todoInput.addEventListener("keypress",(e) => {
  if(e.keyCode === 13){
    generateTodo(todoInput.value);
    todoInput.value = "" //인풋창초기화
  }
});

const generateTodo = (todo)=>{
  const li = document.createElement("li"); //createElement: js를 통해 html코드를 만드느 메서드 엘리먼트 이름을 변수로 받아서 해당 노드를 생성
  const likeSpan = generateLike(); 
  const itemSpan = generateItem(todo); //todo를 넘겨주고
  const manageSpan = generateManage();
  li.appendChild(likeSpan); //appendChild: 자식 요소를 추가하는 메서드
  li.appendChild(itemSpan); //li의 자식요소로 'itemSpan'을 추가한다
  li.appendChild(manageSpan);
  todoList.appendChild(li);
}

const generateLike = () =>{
  const span = document.createElement("span");
  span.classList.add("todo-like")
  const icon = document.createElement("i");
  icon.classList.add("material-icons");//icon에 'material-icons'라는 클래스를 추가해준다
  icon.classList.add("like")//icon에 'like'라는 스타일 추가
  icon.innerText = "favorite_border"
  span.appendChild(icon);
  console.log(span);
  return span;
};

const generateItem = (todo) =>{ //위에서 넘겨준 todo를 받기위해 todo를 넣어준다
      const span = document.createElement("span");
      span.classList.add("todo-item");
      span.innerText = todo;
      return span;
};

const generateManage = () =>{
  const span = document.createElement("span");
  span.classList.add("todo-manage")
  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");
  icon1.classList.add("material-icons");
  icon1.classList.add("check");
  icon1.innerText = "check"
  icon2.classList.add("material-icons");
  icon2.classList.add("clear");
  icon2.innerText = "clear"
  span.appendChild(icon1);
  span.appendChild(icon2);
  return span;
}