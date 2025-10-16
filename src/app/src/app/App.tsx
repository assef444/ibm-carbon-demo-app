import { 
    Header, 
    HeaderName, 
    SideNav, 
    SideNavItems,
    SideNavMenu,
    SideNavDivider,
    SideNavMenuItem,
    SideNavLink, 
    Content,
    Theme,
    HeaderGlobalBar,
    HeaderGlobalAction,
 } from '@carbon/react';
import {
    Home,
    Bee,
    UserAvatar, 
    Notification, 
    LetterAa, 
    LetterBb, 
    LetterCc,
    LetterDd
} from '@carbon/icons-react';
import { Outlet } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Theme theme="white">
                <Header>
                    <HeaderName href="/" prefix="IBM">
                        Carbon Demo App
                    </HeaderName>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction
                            aria-label="Notifications"
                            onClick={() => { }}
                            tooltipAlignment="center"
                        >
                            <Notification size={20} />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="Profile"
                            onClick={() => { }}
                            tooltipAlignment="end"
                        >
                            <UserAvatar size={20} />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
                <SideNav 
                    isFixedNav 
                    expanded={true} 
                    isChildOfHeader={false} 
                    aria-label="Side navigation">
                    <SideNavItems>
                        <SideNavLink renderIcon={Home} href="/">
                            Home
                        </SideNavLink>
                        <SideNavLink renderIcon={Bee} href="/repos">
                            Repos
                        </SideNavLink>
                        <SideNavMenu renderIcon={LetterAa} title="Collapsable Section A">
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page A-0
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page A-1
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page A-2
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu renderIcon={LetterBb} title="Collapsable Section B">
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page B-0
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page B-1
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page B-2
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page B-3
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavLink renderIcon={LetterCc} href="https://cassia.solutions">
                            Page C
                        </SideNavLink>
                        <SideNavDivider />
                        <SideNavMenu renderIcon={LetterDd} title="Collapsable Section D">
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page D-0
                            </SideNavMenuItem>
                            <SideNavMenuItem href="https://cassia.solutions">
                                Page D-1
                            </SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavItems>
                </SideNav>
                <Content>
                    <Outlet /> {/* this is where app routes get loaded */}
                </Content>
            </Theme>
        </>
    );
}