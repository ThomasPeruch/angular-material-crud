import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Client } from "./client";

@Component({
  selector: 'app-insert',
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatFormField, 
    MatLabel, 
    MatInputModule, 
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.scss'
})
export class InsertComponent {
  client: Client = Client.newClient();

  logObject(){
    console.log(this.client)
  }
}
