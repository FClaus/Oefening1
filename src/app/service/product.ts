export class Product {

   constructor (public name: string, public ingredient: string, public Calorieen: number, public Tijd: number) {}

   toForm(): string {
      return `name=${this.name}&ingredient=${this.ingredient}&Calorieen=${this.Calorieen}&Tijd=${this.Tijd}`;
   }
}
