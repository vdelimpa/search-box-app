import React from "react"
import { shallow } from "enzyme"
import App from "./App"

test("Should render h1", () => {
  const wrapper = shallow(<App/>)

  expect(wrapper.find("h1").text()).toEqual("Hello")
})


