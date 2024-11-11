import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { HomeServiceService } from "../../services/home-service.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  imageUrl: string =
    "https://angular.io/assets/images/logos/angular/angular.png";

  count = signal(0);

  handleClick() {
    this.count.update((count) => count + 1);
  }

  catFacts: any[] = [];

  constructor(private service: HomeServiceService) {
    this.service.getCatFacts().subscribe((data) => {
      this.catFacts = data;
      console.log(this.catFacts);
    });
  }
}
