import {Container, Flex, Icon, Text, ThemeProvider} from '@gravity-ui/uikit';

import {Logo} from './Logo';

import './App.scss';

export const App = () => {
    return (
        <ThemeProvider>
            <Container style={{height: '100%'}}>
                <Flex style={{height: '100%'}} justifyContent="center" alignItems="center" gap={2}>
                    <Text style={{fontSize: 24, position: 'relative', top: -2}} as="span">
                        Hello
                    </Text>
                    <Icon data={Logo} width={160} height={32} />
                </Flex>
            </Container>
        </ThemeProvider>
    );
};
