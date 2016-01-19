import {expect} from "chai"
import {MarsRover} from "../../src/mars-rover/marsRover.js"

describe("first test", ()=> {
  it("should pass when 1+1=2", ()=> {
    expect(1 + 1).to.equal(2)
  })
})


describe("MarsRover TDD Dojo", ()=> {
  describe("#received single command", ()=> {

    const TEST_DATA = [
      [new MarsRover(), "L", "00W"],
      [new MarsRover(), "R", "00E"]
    ]

    TEST_DATA.forEach(([marsRover, command, status])=> {
      it("should return " + status + " when given MarsRover with" + marsRover + " received" + command + " command", ()=> {
        marsRover.execute(command);
        expect(marsRover.status()).to.equal(status);
      })
    })
  })

  describe("#received multiple commands", ()=> {

  })

})
