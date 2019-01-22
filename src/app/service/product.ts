export class Product {

   constructor (public name: string, public ingredient: string, public Calorieen: number, public Tijd: number) {}

   toForm(): string {
      return `name=${this.name}&description=${this.ingredient}&price=${this.Calorieen}&Tijd=${this.Tijd}`;
   }
}
