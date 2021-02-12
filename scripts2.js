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






const Form = {
    emailogin: document.querySelector('input#emailogin'),
    keylogin: document.querySelector('input#keylogin'),


    getValues() {
        return {
            emailogin: Form.emailogin.value,
            keylogin: Form.keylogin.value,

        }
    },

    validateFields() {
        const { emailogin, keylogin, } = Form.getValues()
        
        if( emailogin.trim() === "" || 
            keylogin.trim() === "") {
                throw new Error("Por favor, preencha todos os campos")
        }
    },


    clearFields() {
        Form.emailogin.value = ""
        Form.keylogin.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.validateFields()
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
        
        DOM.updateBalance()

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()