function changeText() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = 'Text changed dynamically by JavaScript!';
}

function toggleStyle() {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.toggle('highlight');
}

function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added!';
    newElement.id = 'new-element';
    document.getElementById('content').appendChild(newElement);
}

function removeElement() {
    const element = document.getElementById('new-element');
    if (element) {
        element.remove();
    } else {
        alert('No added element to remove!');
    }
}
