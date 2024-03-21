import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { PingEditorComponent } from './componenti-mappa/ping-editor/ping-editor.component';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate } from '@angular/animations';
import { HttpService } from '../../servizi/http.service';
import { GestioneUtentiComponent } from './componenti-mappa/gestione-utenti/gestione-utenti.component';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
  imports: [
    GoogleMapsModule,
    PingEditorComponent,
    NgIf,
    MatDividerModule,
    CommonModule,
    GestioneUtentiComponent,
  ],
})
export class MapComponent {

  constructor(private http:HttpService){

  }
  bottoneStateGestione!: boolean;
  bottoneStateEditor!: boolean;

  mostraGestore() {
    this.bottoneStateGestione = !this.bottoneStateGestione;
    console.log('Mimmo');
  }
  mostraEditor() {
    this.bottoneStateEditor = !this.bottoneStateEditor;
  }

  maxBounds = { east: -0.1, north: 51.55, west: -0.2, south: 51.45 }; // Esempio di limiti della mappa

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 40.8522,
    lng: 14.2681,
  };

  zoom = 6;

  ngOnInit(): void {
    this.http.inviaRichiesta().subscribe((dati:any)=>{
      console.log(dati);
    })
  
}

  moveMap(event: google.maps.MapMouseEvent) {
    const latLng = event.latLng;
    if (latLng && this.isInBounds(latLng)) {
      this.center = latLng.toJSON(); // Converte LatLng in LatLngLiteral
    }
  }

  isInBounds(latLng: google.maps.LatLng): boolean {
    // Verifica se la posizione è all'interno dei limiti
    return (
      latLng.lat() >= this.maxBounds.south &&
      latLng.lat() <= this.maxBounds.north &&
      latLng.lng() >= this.maxBounds.west &&
      latLng.lng() <= this.maxBounds.east
    );
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
