import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 private map; // dit wordt een nieuw leaflet map object

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap(); // have to call the function or it doesn't work
  }
private initMap():void{
    this.map = L.map('map', {
      center: [51.225727, 4.400853],
      zoom: 3
    })
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
    tiles.addTo(this.map);
}
}
