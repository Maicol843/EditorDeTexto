function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

//función para descargar un archivo
function downloadFile() {
    const editorContent = document.getElementById('editor').innerHTML;
    const filename = 'texto.txt';
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(editorContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

//Función para abrir un archivo
function openFile() {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
}


document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            // Aquí puedes realizar acciones con el contenido del archivo, como mostrarlo en el editor de texto
            document.getElementById('editor').innerHTML = content;
        };
        reader.readAsText(file);
    }
});