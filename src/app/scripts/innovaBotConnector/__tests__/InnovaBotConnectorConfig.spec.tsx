import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { InnovaBotConnectorConfig } from "../InnovaBotConnectorConfig";

describe("InnovaBotConnectorConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        window.alert = jest.fn();
        const wrapper = shallow(<InnovaBotConnectorConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<InnovaBotConnectorConfig />);
        const divResult = component.containsMatchingElement( <Header content="Configure your Connector" />);

        expect(divResult).toBeTruthy();
    });
});

