import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  //  API_URL = 'http://localhost/AceWine/public/api/';
  //  IMG_URL = 'http://localhost/AceWine/public/api/';

  //  API_URL = 'http://192.168.0.135/AceWine/public/api/';
  //  IMG_URL = 'http://192.168.0.135/AceWine/public/api/';

   API_URL = 'https://wine.geoalgo.in/api/';
   IMG_URL = 'https://wine.geoalgo.in/api/';

  constructor() { }
}
