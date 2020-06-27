/* 
 Add instructions; hey Classes! If you want to use this
 CustomMap addMarker function; here's what you need to do:
 Class must have a location property, 
 with lat (number) and lng (number)
 To document this: use an Interface!
*/
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
// Ideal things we can do with the map in index.ts
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapID), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // addMarker(mappable: User | Company): void {
  // Instead of maintaing list types, we can use the Mappable type
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
