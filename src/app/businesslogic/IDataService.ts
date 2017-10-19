import { Observable } from "rxjs/Observable";
import { Celebrity } from "../celebrity";



export interface IDataService {
    celebs: Observable<Celebrity[]>;
    add(celeb: Celebrity);
}