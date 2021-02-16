const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}


function Login() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="admin" && senha=="0000") {
      window.location="/index2.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }



const Form = {
    name: document.querySelector('input#name'),
    emailogin: document.querySelector('input#emailogin'),
    keylogin: document.querySelector('input#keylogin'),


    getValues() {
        return {
            name: Form.name.value,
            emailogin: Form.emailogin.value,
            keylogin: Form.keylogin.value,

        }
    },



    clearFields() {
        Form.name.value = ""
        Form.emailogin.value = ""
        Form.keylogin.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.clearFields()
            Modal.close()
        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        Transaction.all.forEach(DOM.addTransaction)
        

        Storage.set(Transaction.all)
    },
    reload() {

        App.init()
    },
}

App.init()