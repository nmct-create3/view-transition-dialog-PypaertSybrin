const init = function(){
    const dialog = document.querySelector('dialog');
    document.getElementById('showModalDialog').addEventListener('click', function(){
        document.startViewTransition(() => dialog.showModal());
    })
    document.getElementById('closeModalDialog').addEventListener('click', function(){
        document.startViewTransition(() => dialog.close());
    })
}

document.addEventListener('DOMContentLoaded', init);