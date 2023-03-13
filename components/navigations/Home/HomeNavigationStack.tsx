import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AddScreen } from './AddScreen/AddScreen';
import { CalculationScreen } from './AddScreen/CalculationScreen';
import { HomeNavigationStackParams } from './HomeNavigationStackParams';
import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator<HomeNavigationStackParams>();

export const HomeNavigationStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={noHeader}/>
            <Stack.Screen name="AddScreen" component={AddScreen} options={addScreenOption}/>
            <Stack.Screen name="CalculationScreen" component={CalculationScreen} options={calculationScreenOption}/>
        </Stack.Navigator>
    );
};

const noHeader: NativeStackNavigationOptions = {
    headerShown: false,
};

const addScreenOption: NativeStackNavigationOptions = {
    title: 'Pertambahan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const calculationScreenOption: NativeStackNavigationOptions = {
    title: 'Soal Pertambahan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};
