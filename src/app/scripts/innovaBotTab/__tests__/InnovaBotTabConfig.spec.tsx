import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { InnovaBotTabConfig } from "../InnovaBotTabConfig";

describe("InnovaBotTabConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<InnovaBotTabConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<InnovaBotTabConfig />);
        const divResult = component.containsMatchingElement(<Header content="Configure your tab" />);

        expect(divResult).toBeTruthy();
    });
});
