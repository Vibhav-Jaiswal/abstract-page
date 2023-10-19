const hiddenDiv = document.getElementById("hidden");
const btnOne = document.getElementById('btn-one')  
const btnTwe = document.getElementById('btn-two')  

function showHiddenDiv() {
    hiddenDiv.style.display = "flex";
    btnOne.style.display = 'none'
    btnTwe.style.display = 'flex'
}

function hideHiddenDiv() {
    hiddenDiv.style.display = "none";
    btnOne.style.display = 'flex'
    btnTwe.style.display = 'none'
}