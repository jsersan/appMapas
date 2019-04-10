import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  data: Object;
  
  constructor() {}
    

  ngOnInit(){
    this.initMap();
  }

  addInfoWindowToMarker( marca, texto ) {
    var infoWindow = new google.maps.InfoWindow({
      content: texto
    });
    marca.addListener('click', () => {
      infoWindow.open(this.map, marca);
    });
  }

  initMap(){   
    let coords = new google.maps.LatLng(42.837151,-2.677154);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords,
      title: "Localización"
    })

    var contenido = '<div id="content"><b>CIFPS Ciudad Jardin LHII</b><p>Araba Kalea, 19<br>01006 Vitoria-Gasteiz<br>Alava</div>';

    this.addInfoWindowToMarker( marker, contenido);
  }
}
