import faker from 'faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
  nameCompany: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.nameCompany = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.nameCompany}</h1>
    <h3>CatchPhrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
