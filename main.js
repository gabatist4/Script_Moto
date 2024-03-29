function copyPageContent() {
    var pageText = "";
    var formElements = document.querySelectorAll("form textarea");
    
    formElements.forEach(function(element) {
        pageText += element.previousElementSibling.innerText + "\n";
        pageText += element.value + "\n\n";
    });
    
    var copyText = document.createElement("textarea");
    copyText.value = pageText;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
    alert('Copiado com sucesso!');
}