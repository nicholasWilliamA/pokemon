import { HomeNavigationStackParams } from '@Components/navigations/Home/HomeNavigationStackParams';
import { capitalizeFirstCharacter } from '@Functions/capitalizedFirstCharacter';
import { PokemonDetails } from '@Interfaces/PokemonDetails';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface PokemonDetailProps {
    navigation: NativeStackNavigationProp<HomeNavigationStackParams, 'PokemonDetailScreen', undefined>;
    route: RouteProp<HomeNavigationStackParams, 'PokemonDetailScreen'>;
    data?: PokemonDetails,
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({ navigation, data }) => {
    const renderPokemonTypes = (arrayNumber: number) => {
        if (data){
            const pokemonTypes = data.types.map((q) => q.type.name);
            const capitalizeFirstCharacterPokemonTypes = capitalizeFirstCharacter(pokemonTypes[arrayNumber]);
            return capitalizeFirstCharacterPokemonTypes;
        }
    };

    const formatId = () => {
        let formattedId = '';
        if (data){
            const pokemonId = data.id;
            if (pokemonId < 10){
                formattedId = '#00' + pokemonId;
                return formattedId;
            }
            if (pokemonId < 100){
                formattedId = '#0' + pokemonId;
                return formattedId;
            }
            if (pokemonId > 100){
                formattedId = '#' + pokemonId;
                return formattedId;
            }
        }
    };

    const imageUri = data?.sprites.front_default;

    return (
        <View className="mt-12" >
            <TouchableOpacity onPress={() => navigation.goBack()} className="ml-[18px]">
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text className="font-ttCommonsBold text-white text-2xl mt-4 ml-6">{capitalizeFirstCharacter(data?.name)}</Text>
            <Text className="font-ttCommonsBold text-white text-right w-[90%]">{formatId()}</Text>
            <View className="flex-row ml-6">
                <View className="bg-slate-50/25 rounded-xl ml-2 w-[21%]">
                    <Text className="text-white font-ttCommonsBold text-center text-xs">{renderPokemonTypes(0)}</Text>
                </View>
                {renderPokemonTypes(1) && <View className="bg-slate-50/25 rounded-xl ml-[6px] w-[21%]">
                    <Text className="text-white font-ttCommonsBold text-center text-xs">{renderPokemonTypes(1)}</Text>
                </View>}
            </View>
            <View className="">
                {imageUri && <Image className="w-[280] h-[280] self-center" source={{uri: imageUri}}/>}
            </View>
        </View>
    );
};
