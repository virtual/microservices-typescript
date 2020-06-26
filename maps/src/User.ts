import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // generate random info using faker
    this.name = faker.name.firstName();
    // this.location.lat -- this is undefined!
    this.location = {
      lat: parseFloat(faker.address.latitude()), // return a number to match definition above
      lng: parseFloat(faker.address.longitude())
    };
  }
}
