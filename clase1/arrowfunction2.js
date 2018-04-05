function Car(model, color){
    this.color = color;
    this.model = model;

    this.printModelAndColor = () => {
        console.log("El auto es " + this.model + " y el color es " + this.color);
    };

    // printModelAndColor = printModelAndColor.bind(this);

    // printModelAndColor();
}

let car = new Car('Ford', 'Azul');
let car2 = new Car('BWM', 'Gris');

car.printModelAndColor();
car2.printModelAndColor();