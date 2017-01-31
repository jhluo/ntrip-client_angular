import { Component } from '@angular/core';
import { Client }    from './client';
@Component({
  moduleId: module.id,
  selector: 'client-form',
  //host: //mark up for this  element
  templateUrl: 'client-form.component.html'
})

export class ClientFormComponent {
  //powers = ['Really Smart', 'Super Flexible',
  //          'Super Hot', 'Weather Changer'];
  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  client: Client;
  submitted = false;
  onSubmit() { this.submitted = true; }
  getMountPt(host: HTMLInputElement, port: HTMLInputElement, user?: HTMLInputElement, password?:HTMLInputElement): void {
    console.log(`Getting mount points from ${host.value} at ${port.value}`);
    alert(`Getting mount points from ${host.value} at ${port.value}`);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.client); }
}