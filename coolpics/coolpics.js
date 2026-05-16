const pics = document.querySelector(".imgs");
const modal= document.querySelector("dialog");
const modalImage = modal.querySelector('.fullimg');
const closeButton = modal.querySelector(".close");

pics.addEventListener('click', openModal);
function openModal(e){
    modalImage.src = e.target.src.replace('sm','full');
    modal.showModal();
}
closeButton.addEventListener('click',closeModal);
function closeModal(e){
    modal.close();
}

const menu = document.querySelector("#menu");
const ul = document.querySelector("ul");

menu.addEventListener('click', (e)=>{
    ul.classList.toggle('hide');
});