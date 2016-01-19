import {expect} from "chai"
import {MarsRover} from "../../src/mars-rover/marsRover.js"

describe("first test", ()=> {
  it("should pass when 1+1=2", ()=> {
    expect(1 + 1).to.equal(2)
  })
})


describe("MarsRover TDD Dojo", ()=>{
  describe("#received single command", ()=>{
    it("should return 00W when given MarsRover with 00N received L command", ()=>{
      // given
      var marsRover = new MarsRover()

      // when
      marsRover.execute("L")

      // then
      expect(marsRover.status()).to.equal("00W")
    })
  })

  describe("#received multiple commands", ()=>{

  })

})
