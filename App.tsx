import { useNavigationContainerRef } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppState, AppStateStatus, Platform, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeNavigationStack } from './components/navigations/Home/HomeNavigationStack';
import { HomeNavigationStackParams } from './components/navigations/Home/HomeNavigationStackParams';
import { QueryClient, focusManager, onlineManager, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useFonts } from 'expo-font';
import { TTCommonsBold, TTCommonsMedium } from '@Constants/general';
import AppLoading from 'expo-app-loading';

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
    const navigationRef = useNavigationContainerRef<HomeNavigationStackParams>();

    function onAppStateChange(status: AppStateStatus) {
        // React Query already supports in web browser refetch on window focus by default
        if (Platform.OS !== 'web') {
            focusManager.setFocused(status === 'active');
        }
    }

    // https://tanstack.com/query/v4/docs/react-native
    // https://tanstack.com/query/v4/docs/examples/react/react-native
    useEffect(() => {
        // https://tanstack.com/query/v4/docs/react-native#online-status-management
        onlineManager.setEventListener(setOnline => {
            return NetInfo.addEventListener(state => {
                setOnline(!!state.isConnected);
            });
        });

        // https://tanstack.com/query/v4/docs/react-native#refetch-on-app-focus
        const subscription = AppState.addEventListener('change', onAppStateChange);
        return () => subscription.remove();
    }, []);

    const [loaded] = useFonts({
        [TTCommonsMedium]: require('./assets/fonts/TTCommonsMedium.ttf'),
        [TTCommonsBold] : require('./assets/fonts/TTCommonsBold.ttf'),
    });

    if (!loaded) {
        return <AppLoading />;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    primary: 'black',
                    background: 'white',
                },
            }}>
                <SafeAreaProvider>
                    <NavigationContainer ref={navigationRef}>
                        <View style={styles.container}>
                            <HomeNavigationStack/>
                            <StatusBar animated={true} style="auto"/>
                        </View>
                    </NavigationContainer>
                </SafeAreaProvider>
            </PaperProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
