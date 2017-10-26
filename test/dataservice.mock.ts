import { IDataService } from "../src/app/businesslogic/IDataService";
import { Celebrity } from "../src/app/celebrity";
import { Observable } from "rxjs/Observable";
import { Subject, BehaviorSubject } from "rxjs";



export class DataServiceMock implements IDataService {
       

    celebs: BehaviorSubject<Celebrity[]> = new BehaviorSubject<Celebrity[]>([]);

    add(celeb: Celebrity) {
        let list = this.celebs.value;

        list.push(celeb);

        this.celebs.next(list);
    }
    
}