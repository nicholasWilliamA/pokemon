import { useNavigationContainerRef } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeNavigationStack } from './components/navigations/Home/HomeNavigationStack';
import { HomeNavigationStackParams } from './components/navigations/Home/HomeNavigationStackParams';

export default function App() {
    const navigationRef = useNavigationContainerRef<HomeNavigationStackParams>();
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
