import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * State for the innovaBotTab React component
 */
export interface IInnovaBotTabState extends ITeamsBaseComponentState {

}

/**
 * Properties for the innovaBotTab React component
 */
export interface IInnovaBotTabProps {

}

/**
 * Implementation of the innovaBot content page
 */
export class InnovaBotTab extends TeamsBaseComponent<IInnovaBotTabProps, IInnovaBotTabState> {

    public async componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));

        if (await this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
            microsoftTeams.appInitialization.notifySuccess();
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        return (
            <Provider theme={this.state.theme}>
                <Flex fill={true} column styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Flex.Item>
                        <Header content="Welcome to the InnovaBot Bot bot page" />
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <Text content="TODO: Add you content here" />
                        </div>
                    </Flex.Item>
                    <Flex.Item styles={{
                        padding: ".8rem 0 .8rem .5rem"
                    }}>
                        <Text size="smaller" content="(C) Copyright InnovaSolutions" />
                    </Flex.Item>
                </Flex>
            </Provider>
        );
    }
}
