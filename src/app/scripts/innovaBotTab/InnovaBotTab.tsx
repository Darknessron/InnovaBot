import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
/**
 * State for the innovaBotTabTab React component
 */
export interface IInnovaBotTabState extends ITeamsBaseComponentState {
    entityId?: string;
}

/**
 * Properties for the innovaBotTabTab React component
 */
export interface IInnovaBotTabProps {

}

/**
 * Implementation of the InnovaBot Tab content page
 */
export class InnovaBotTab extends TeamsBaseComponent<IInnovaBotTabProps, IInnovaBotTabState> {

    public async componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));


        if (await this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
            microsoftTeams.getContext((context) => {
                microsoftTeams.appInitialization.notifySuccess();
                this.setState({
                    entityId: context.entityId
                });
                this.updateTheme(context.theme);
            });
        } else {
            this.setState({
                entityId: "This is not hosted in Microsoft Teams"
            });
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
                        <Header content="This is your tab" />
                    </Flex.Item>
                    <Flex.Item>
                        <div>

                            <div>
                                <Text content={this.state.entityId} />
                            </div>

                            <div>
                                <Button onClick={() => alert("It worked!")}>A sample button</Button>
                            </div>
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
