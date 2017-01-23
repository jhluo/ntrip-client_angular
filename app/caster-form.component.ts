import { Component } from '@angular/core';
import { Caster }    from './caster';
@Component({
  moduleId: module.id,
  selector: 'caster-form',
  templateUrl: 'caster-form.component.html'
})

export class CasterFormComponent {
  //powers = ['Really Smart', 'Super Flexible',
  //          'Super Hot', 'Weather Changer'];
  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  caster: Caster;
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.caster); }
}