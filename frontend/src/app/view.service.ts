import { Injectable } from '@angular/core';
import { Headers, Http , RequestOptions, URLSearchParams} from '@angular/http';  
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ViewService {

  constructor(private http: Http) { }

  getHttpTest(): Promise<any> {
    return this.http.get('data/time/Stream_Mel_Time_Output.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}

