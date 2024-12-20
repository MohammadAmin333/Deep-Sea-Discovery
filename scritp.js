document.getElementById('resource-button').addEventListener('click', function () {
    const resourceList = document.getElementById('resource-list');
    if (resourceList.style.display === 'none') {
        resourceList.style.display = 'block';
        this.textContent = 'Hide Resources';
    } else {
        resourceList.style.display = 'none';
        this.textContent = 'Show Resources';
    }
});  