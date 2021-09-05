import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import HomePage from "../pages/HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Voting Buttons", () => {
  it("should add ID to liked shoes", () => {
    const wrapper = mount(<HomePage />);
    const upvote = wrapper.find(".bi-arrow-up-circle");
    upvote.simulate("click");
    expect(wrapper.state("likedUsers")).toBe(1);
  });
});
