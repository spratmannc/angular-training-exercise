import { Celebrity } from "../celebrity";
import { IDataService } from "./IDataService";



export class CelebForm {

    celeb: Celebrity;
    
      constructor(private dataService: IDataService) { 
        this.reset();
      }
    
      ngOnInit() {
      }
    
      submit() {
        this.dataService.add(this.celeb);
        this.reset();
      }
    
      reset() {
        this.celeb = {
          name: undefined,
          sing: false,
          act: false,
          dance: false
        };
      }

}