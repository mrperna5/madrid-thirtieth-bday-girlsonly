import { Component } from '@angular/core';

interface DayDetail {
  title: string;
  details: string[];
  image: string;
}

interface DayDetails {
  [key: string]: DayDetail;
}

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.css']
})
export class ProgrammComponent {

  showDetails: boolean = false;
  selectedDay: any = null;

  dayDetails: DayDetails = {
    montag: {
      title: 'Montag, 30. Oktober',
      details: [
        '18:35 – 20:55 Flug Zürich – Madrid',
        '21:00 – 22:00 Flughafen – Unterkunft',
        '22:45 Abendessen: Caluana',
        'Bar: Sala equis'
      ],
      image: 'assets/montag.png'
    },
    dienstag: {
      title: 'Dienstag, 31. Oktober',
      details: [
        'Frühstück: Pum pum Bakery',
        'Retiro',
        'Gran via, Alcala, Cibelles',
        'Jardin Diana',
        'Callao, Gourmet Experiences',
        'Opera, Plaza Mayor, Plaza del Sol',
        'Mittagessen: Mercado San Miguel',
        'La Latina: El viajero, kleine Gassen, Delic,Tempranillo',
        '- Siesta -',
        'Abendessen: 21:30 La Bodega de los secretos',
        'Bar: Ficus Bar, Viva Madrid, La Venecia'
      ],
      image: 'assets/dienstag.png'
    },
    mittwoch: {
      title: 'Mittwoch, 1. November',
      details: [
        'Frühstück: Eat my trip',
        'Königspalast, Plaza Espana,',
        'Malasana: Bodega de la Ardosa, Mercado Ildefonso',
        'Chueca: Mercado San Anton',
        'Mittagessen: 15:30 Bosco de lobos',
        'Plaza St. Ana, Las Huertas',
        'Stadion',
        '- Siesta -',
        'Predrinks: The hat',
        'Abendessen: 22:00 Raimunda',
        'Bar: Salvador Bachiller'
      ],
      image: 'assets/mittwoch.png'
    },
    donnerstag: {
      title: 'Donnerstag, 2. November',
      details: [
        '8:00 Frühstück to go',
        '8:30 Abfahrt zum Flughafen',
        '11:45 Madrid | 14:10 Zürich | iberia'
      ],
      image: 'assets/donnerstag.png'
    }
  }

  selectDay(day: string): void {
    this.selectedDay = this.dayDetails[day];
    this.showDetails = true
  }

  backToList(): void {
    this.showDetails = false;
    this.selectedDay = null;
  }
}
