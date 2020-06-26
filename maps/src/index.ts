// import { User } from './User';
import { Company } from './Company';
/// <reference types="@types/googlemaps" />
// anything we export something from a file, we use curly braces
// this allows us to export mulitple items with diff names
// different from `export default` as that will be the default
// export default is rarely used in TS
// const user = new User();
const company = new Company();

// Instead of creating and calling this directly in index.ts, let's
// create a map class to limit the functionality allowed in index.ts
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: {
    lat: 0,
    lng: 0
  }
  // lat: company.location.lat,
  //   lng: company.location.lng
});
