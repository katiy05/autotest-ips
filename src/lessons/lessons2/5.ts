class Car {
    private isTurn: boolean

    constructor(isTurn: boolean) {
        this.isTurn = isTurn
    }

    public turnOn(): void {
        this.isTurn = true
    }

    public turnOff(): void {
        this.isTurn = false
    }

    public getState(): void {
        !this.isTurn ? console.log('Автомобиль выключен') : console.log('Автомобиль включен')
    }
}

const car: Car = new Car(false)
car.getState()
car.turnOn()
car.getState()