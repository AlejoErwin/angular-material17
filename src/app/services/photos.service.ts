import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Photo } from '../models/Photo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  // getPhotos() : Observable<HttpResponse<any>>{
  //   // return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  //   return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
  // }

  getPhotos() : Observable<HttpResponse<any>>{
    // return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10',{
      observe: 'response',
    });
  }


}
