import { Injectable } from '@angular/core';
import { Celebrity } from '../celebrity';
import { BehaviorSubject, Observable } from "rxjs";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";


@Injectable()
export class DataServiceService {

    private _celebrities: Array<Celebrity> = [];
    celebs: BehaviorSubject<Array<Celebrity>> = new BehaviorSubject<Array<Celebrity>>(this._celebrities);

    constructor(private http: Http) { 
        this.load();
    }

    load() {
        this.http.get("http://localhost:3000/celebrities")
                 .map(response => <Array<Celebrity>>response.json())
                 .subscribe((newCelebs: Array<Celebrity>) => {

                    this._celebrities = newCelebs;
                    this.celebs.next(this._celebrities);

                 });
    }

    add(celeb: Celebrity) {

        celeb.id = this._celebrities.length + 1;

        // post it to the service
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let options: RequestOptionsArgs = {
            headers: headers 
        };

        let request = this.http.post("http://localhost:3000/celebrities", 
                       JSON.stringify(celeb), 
                       options);

        request.subscribe(() => {
            // add it to our internal list
            this._celebrities.push(celeb);

            //notify the world
            this.celebs.next(this._celebrities);
        });       
        
    }

}
