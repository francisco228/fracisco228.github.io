document.getElementById('misterioButton').addEventListener('click', function() {
    const misterioText = "me debes una bolsa de dulces ";
    const misterioPara = document.getElementById('misterio');
    misterioPara.textContent = misterioText;
    misterioPara.classList.remove('oculto');
});
