import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { InnovaBotTab } from "../InnovaBotTab";

describe("InnovaBot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<InnovaBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<InnovaBotTab />);
        const divResult = component.containsMatchingElement(<Header content="Welcome to the InnovaBot Bot bot page" />);
        expect(divResult).toBeTruthy();
    });
});
