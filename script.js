// DOM 요소를 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// addButton이 클릭되면 이벤트가 발생하는 리스너를 추가
addButton.addEventListener('click', addTask);

// addTask 함수 생성
function addTask() {
  // input창에 입력된 텍스트가 있어야 한다. taskText
  // trim() : 문자열 조정 가능
  const taskText = taskInput.value.trim();

  // li 태그 생성 taskItem
  const taskItem = document.createElement('li');
  // taskItem 텍스트(taskText)를 대입(=)
  taskItem.textContent = taskText;
  // ul 태그 밑에 자식 태그로 추가(append)
  taskList.appendChild(taskItem);
  // 추가되고 난 이후 input창 값을 비워 줌
  taskInput.value = '';
  // 생성한 taskItem에 이벤트 리스너를 추가(click -> completeTask)
  taskItem.addEventListener('click', comploeteTask);
  // 할일을 완료했을 때 사용하는 함수
  function comploeteTask(event) {
    const taskItem = event.target;
    // 할 일을 완료 시
    // CSS seletor.complete
    taskItem.classList.toggle('completed');
    taskItem.addEventListener('click', remokeTask);
  }
  // 할 일 삭제
  function remokeTask(event) {
    const taskItem = event.target;
    taskItem.parentNode.removeChild(taskItem);
  }
}
