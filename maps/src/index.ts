import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
/// <reference types="@types/googlemaps" />
// anything we export something from a file, we use curly braces
// this allows us to export mulitple items with diff names
// different from `export default` as that will be the default
// export default is rarely used in TS
// const user = new User();
const company = new Company();
const user = new User();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

// google map declaration moved to CustomMap.ts
