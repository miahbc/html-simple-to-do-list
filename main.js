function addTask(e) {
    e.preventDefault()
    console.log('test test test!')
    let taskInput = document.getElementById('taskInput').value
    let ul = document.getElementById('listOfTasks');
    let li = document.createElement('li')
    let litext = document.createTextNode(taskInput)
    li.appendChild(litext)
    ul.appendChild(li)

    document.getElementById('taskInput').value = ""
}
