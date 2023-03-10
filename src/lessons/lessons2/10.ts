{
    class Car {
        private isTurn: boolean
        private speed: number

        constructor(isTurn: boolean, speed: number) {
            this.isTurn = isTurn
            this.speed = speed
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


        public setSpeed(speed: number, state: (() => void)): void {
            if (!this.isTurn) {
                console.log(state, 'нельзя указать скорость')
            }
            else
                speed > 0 && speed <= 100 ? console.log(state, 'скорость автомобиля', speed, 'км/ч') :
                    console.log(car.getState, 'скорость автомобильна должна быть в пределах от 0 до 100 км/ч')
        }
    }
    const car: Car = new Car(true, 0)
    car.setSpeed(80, car.getState)
}
