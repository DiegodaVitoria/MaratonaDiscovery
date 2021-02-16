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

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("dev.finances:transactions", "key.login:logins")) || []
  
    },

    set(transactions, logins) {
        localStorage.setItem("dev.finances:transactions", "dev.finances:transactions", JSON.stringify(transactions, logins))
    }
}

const Transaction = {
    all: Storage.get(),

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    }
}


const Form = {
    name: document.querySelector('input#name'),
    emailogin: document.querySelector('input#emailogin'),
    keylogin: document.querySelector('input#keylogin'),

    getValues() {
        return {
            name: Form.name.value,
            emailogin: Form.emailogin.value,
            keylogin: Form.keylogin.value
        }
    },

    validateFields() {
        const { name, emailogin, keylogin } = Form.getValues()
        
        if( name.trim() === "" || 
            emailogin.trim() === "" || 
            keylogin.trim() === "" ) {
                throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let { name, emailogin, keylogin } = Form.getValues()
        

        return {
            name,
            emailogin,
            keylogin
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
            Form.validateFields()
            const transaction = Form.validateFields()
            Transaction.add(transaction)
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

