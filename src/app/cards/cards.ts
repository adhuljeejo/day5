import { Component , Input} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cards',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() item: any;
}
