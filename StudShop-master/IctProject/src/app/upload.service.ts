import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
// tslint:disable-next-line:import-spacing
import { map } from  'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
       SERVER_URL = 'http://localhost:4200/upload';
       constructor(private httpClient: HttpClient) { }

public upload(formData) {
  // tslint:disable-next-line:indent
	return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
}


}
