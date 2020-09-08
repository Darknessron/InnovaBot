import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { InnovaBotTabRemove } from "../InnovaBotTabRemove";

describe("InnovaBotTabRemove Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<InnovaBotTabRemove />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<InnovaBotTabRemove />);
        const divResult = component.containsMatchingElement(<Header content="You're about to remove your tab..." />);

        expect(divResult).toBeTruthy();
    });
});
