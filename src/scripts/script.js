function openModal(){
    const headerButton = document.querySelector('.header__button')
    const sectionButton = document.querySelector('.third--section__button')
    const modal = document.querySelector('.modalController')

    headerButton.addEventListener('click', () =>{
        modal.showModal();
    })

    sectionButton.addEventListener('click', () =>{
        modal.showModal();
    })
}

openModal();

function closeModal() {
    const closeModalButton = document.querySelector('.closeModal')
    const modal = document.querySelector('.modalController')

    closeModalButton.addEventListener('click', () =>{
        modal.close();
    })
}

closeModal();