{
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

        public setSpeed(speed: number): void {
            if (!this.isTurn) {
                console.log('Автомобиль выключен, нельзя указать скорость')
            }
            else
                speed > 0 && speed <= 100
                    ? console.log('Скорость автомобиля', speed, 'км/ч')
                    : console.log('Cкорость автомобильна должна быть в пределах от 0 до 100 км/ч')
        }
    }
    const car: Car = new Car(true)
    car.setSpeed(10)
}
