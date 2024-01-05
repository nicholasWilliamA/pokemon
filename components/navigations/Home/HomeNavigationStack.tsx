import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HomeNavigationStackParams } from './HomeNavigationStackParams';
import { HomeScreen } from './screens/HomeScreen';
import { Image, View } from 'react-native';
import { PokemonListScreen } from '../Pokemon/screens/PokemonListScreen';
import { PokemonDetailScreen } from '../Pokemon/screens/PokemonDetailScreen';

const Stack = createNativeStackNavigator<HomeNavigationStackParams>();

export const HomeNavigationStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={imgHeader}/>
            <Stack.Screen name="PokemonListScreen" component={PokemonListScreen} options={imgHeader}/>
            <Stack.Screen name="PokemonDetailScreen" component={PokemonDetailScreen} options={noHeader}/>
        </Stack.Navigator>
    );
};

const noHeader: NativeStackNavigationOptions = {
    headerShown: false,
};

const imgHeader: NativeStackNavigationOptions = {
    header: () => (
        <View>
            <Image
                className="h-10 w-[110px] mt-[40px] mb-[10px] self-center"
                source={require('../../../assets/pokemon-logo.png')}
            />
        </View>
    ),
};
