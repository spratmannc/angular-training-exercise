import { CelebForm } from "../src/app/businesslogic/CelebForm";
import { DataServiceMock } from "./dataservice.mock";
import { assert, expect } from "chai";


describe("Celeb Form Component", () => {

    let dataServiceMock = new DataServiceMock();

    it("can be loaded", () => {
        
        assert.doesNotThrow(() => {
            let form = new CelebForm(dataServiceMock);
        });
        
    });

    it("can submit", () => {
        let form = new CelebForm(dataServiceMock);
        form.celeb.name = "Roger";
        form.submit();

        let list = dataServiceMock.celebs.value;
        let [first] = list;

        expect(first.name).to.equal("Roger");

    });

    it("resets after submit", () => {
        let form = new CelebForm(dataServiceMock);
        form.celeb.name = "Roger";
        form.submit();
        expect(form.celeb.name).to.equal(undefined);

    });

    it("can reset", () => {
        // arrange
        let form = new CelebForm(dataServiceMock);
        form.celeb.name = "Roger";

        // act
        form.reset();
        
        // assert
        expect(form.celeb.name).to.equal(undefined); 

    });


});