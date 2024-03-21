import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from '../../../../servizi/http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ping-editor',
  standalone: true,
  imports: [MatPaginatorModule,NgFor,CommonModule,HttpClientModule],
  templateUrl: './ping-editor.component.html',
  styleUrl: './ping-editor.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PingEditorComponent {

  

  constructor(private http:HttpService){}
  datasource: any;

 showImage: boolean = true;
  totalItems: number = 100; // Totale degli elementi nella lista
  pageSize: number = 8; // Numero di elementi per pagina
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Opzioni per il numero di elementi per pagina
  @Input() displayedItems: any = []; // Elementi da visualizzare sulla pagina corrente
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  src:any="/assets/icons8-delete-100.png";
  src2:any="/assets/icons8-edit-64.png";
  data: any = [
    {
    descrizione: '',
    latitudine: '',
    longitudine: '',
    id_ping: '',
    dataCreazione: '',
    idPingType: '',
    immagine: ''}
    
    // Altri dati della tabella...
  ];
  currentPage: number=1;
 // Elementi da visualizzare sulla pagina corrente

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedItems();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedItems();
    }
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalItems);
    this.displayedItems = this.data.slice(startIndex, endIndex);
  }

  loadData() {
    // Carica i dati dalla tua fonte dati
    // Esempio:
    // this.data = ...;
    // this.updateDisplayedItems();
  }

  ngOnInit(){
    this.mostraDati();
  }

  

  eliminaRiga(idPing:number) {
    this.http.deleteData(idPing).subscribe((dati:any)=>{
      console.log(dati, 'eliminato')
    })
  }

  mostraDati() {
    this.http.getData().subscribe((dati: any) => {
      console.log(dati);
      this.data = Object.values(dati);
      console.log(this.data);
      this.updateDisplayedItems()
      console.log(this.displayedItems);
    });
  }
  
}
  // Funzione chiamata quando cambia la pagina
  




