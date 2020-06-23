const profile = {
  name: 'Jeanine',
  age: 33,
  coords: {
    lat: -44,
    lng: -111
  },
  // ES6 way of method within an object
  setAge(age: number): void {
    this.age = age;
  }
};

// const age = profile.age;
const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
