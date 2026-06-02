// create a class called bank account...A user shold be able get their balance and deposit money
// it should have two properties ; balance and account holder
// also have a private method that logs transaction

class bankAccount{ 
    #balance
    #accountHolder
    constructor(accountHolder, balance){
        this.#balance = balance 
        this.#accountHolder = accountHolder  < 0 ? 0 : accountHolder;
    } 
    
    getBalance(){
        return this.#balance;
    }
    
    deposit(amount){
        if (amount) {
            this.#balance += amount
            this.#logTransaction(`Deposited ${amount}`)
            
        }
    }
    #logTransaction (mess){
        console.log(`[LOG]: ${mess}`)

    }
}


const jonh = new bankAccount("Amina", 10000)


console.log(jonh.getBalance());
jonh.deposit(30000)
console.log(jonh.getBalance());