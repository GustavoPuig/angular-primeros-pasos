import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public readonly g_defaultName: string = 'iroman';
  public readonly g_defaultAge: number = 45;
  public name:  string = this.g_defaultName;
  public age:   number = this.g_defaultAge;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  public changeName():void {
    this.name = 'spiderman';
  }

  public changeAge() : void {
    this.age = 33;
  }
}
