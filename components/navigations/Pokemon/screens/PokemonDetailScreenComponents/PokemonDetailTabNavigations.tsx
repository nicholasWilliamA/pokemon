import { HomeNavigationStackParams } from '@Components/navigations/Home/HomeNavigationStackParams';
import { MaterialTopTabBarProps, MaterialTopTabNavigationOptions, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AboutPokemon from './AboutPokemon';
import { View, Text, useWindowDimensions, Button } from 'react-native';
import { PokemonDetails } from '@Interfaces/PokemonDetails';
import PokemonStats from './PokemonStats';
import { PokemonDetailTabNavigationsParams } from './PokemonDetailTabNavigationParams';

const Tab = createMaterialTopTabNavigator<PokemonDetailTabNavigationsParams>();

interface PokemonDetailMaterialTabNavigationProps {
    initialRouteName?: 'About' | 'Base Stats' | 'Evolution' | 'Moves';
    navigation: NativeStackNavigationProp<HomeNavigationStackParams, 'PokemonDetailScreen', undefined>;
    route: RouteProp<HomeNavigationStackParams, 'PokemonDetailScreen'>;
    data?: PokemonDetails,
}

const PokemonDetailTabNavigation = ({ navigation, route, data, initialRouteName }: PokemonDetailMaterialTabNavigationProps) => {
    return (
        <Tab.Navigator screenOptions={tabNavigatorScreenOptions} initialRouteName={initialRouteName}>
            <Tab.Screen
                name="About"
                children={() => <AboutPokemon navigation={navigation} route={route} data={data}/>}
                options={aboutOption}
            />
            <Tab.Screen
                name="Base Stats"
                children={() => <PokemonStats navigation={navigation} route={route}/>}
                options={baseStatsOption}
            />
            <Tab.Screen
                name="Evolution"
                children={() => <AboutPokemon navigation={navigation} route={route}/>}
                options={evolutionOption}
            />
            <Tab.Screen
                name="Moves"
                children={() => <AboutPokemon navigation={navigation} route={route}/>}
                options={movesOption}
            />
        </Tab.Navigator>
    );
};

const tabNavigatorScreenOptions: MaterialTopTabNavigationOptions = {
    tabBarScrollEnabled: true,
    tabBarIndicatorStyle: {
        backgroundColor: '#FFFFFF',
    },
    tabBarStyle: {
        // paddingBottom: 10,A
        width: '100%',
        // justifyContent: 'space-evenly',
        elevation: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 }, // change this for more shadow
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    tabBarItemStyle:{
        // marginBottom: 100,
        width: 102,
    },
    tabBarPressColor: '#FFFFFF',
};

const aboutOption: MaterialTopTabNavigationOptions = {
    tabBarLabel: ({ focused }) => {
        if (focused) {
            return (
                <View>
                    <View className="flex-col justify-center rounded">
                        <Text className="font-ttCommonsBold text-center">About</Text>
                    </View>
                        <View className="bg-[#b5bcd8] w-full h-1 rounded-sm mt-2" />
                </View>
            );
        } else {
            return (
                <View className="flex-row justify-center items-center px-1.5 bg-white">
                    <Text className="font-ttCommonsBold text-[#d8d8d9]">About</Text>
                </View>
            );
        }
    },
};

const baseStatsOption: MaterialTopTabNavigationOptions = {
    tabBarLabel: ({ focused }) => {
        if (focused) {
            return (
                <View>
                    <View className="flex-col justify-center rounded">
                        <Text className="font-ttCommonsBold text-center">Base Stats</Text>
                    </View>
                        <View className="bg-[#b5bcd8] w-full h-1 rounded-sm mt-2" />
                </View>
            );
        } else {
            return (
                <View className="flex-row justify-center items-center px-1.5 bg-white">
                    <Text className="font-ttCommonsBold text-[#d8d8d9]">Base Stats</Text>
                </View>
            );
        }
    },
};

const evolutionOption: MaterialTopTabNavigationOptions = {
    tabBarLabel: ({ focused }) => {
        if (focused) {
            return (
                <View>
                    <View className="flex-col justify-center rounded">
                        <Text className="font-ttCommonsBold text-center">Evolution</Text>
                    </View>
                        <View className="bg-[#b5bcd8] w-full h-1 rounded-sm mt-2" />
                </View>
            );
        } else {
            return (
                <View className="flex-row justify-center items-center px-1.5 bg-white">
                    <Text className="font-ttCommonsBold text-[#d8d8d9]">Evolution</Text>
                </View>
            );
        }
    },
};

const movesOption: MaterialTopTabNavigationOptions = {
    tabBarLabel: ({ focused }) => {
        if (focused) {
            return (
                <View>
                    <View className="flex-col justify-center rounded">
                        <Text className="font-ttCommonsBold text-center">Moves</Text>
                    </View>
                        <View className="bg-[#b5bcd8] w-full h-1 rounded-sm mt-2" />
                </View>
            );
        } else {
            return (
                <View className="flex-row justify-center items-center px-1.5 bg-white">
                    <Text className="font-ttCommonsBold text-[#d8d8d9]">Moves</Text>
                </View>
            );
        }
    },
};

export default PokemonDetailTabNavigation;
