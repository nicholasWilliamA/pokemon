import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { PokemonDetails } from '@Interfaces/PokemonDetails';
import { Fetcher } from '@Functions/SwrFetcher';
import { capitalizeFirstCharacter } from '@Functions/capitalizedFirstCharacter';
import { pokemonTypesColors } from '@Constants/pokemonTypesColors';

export const PokemonCard: React.FC<{
    pokemonName: string;
    query: string
    onPress?: ()=> void;
}> = ({ pokemonName, onPress, query }) => {

    const { data, isFetching, isLoading, error } = useQuery<PokemonDetails>({
        queryKey: ['pokemonDetails', query],
        queryFn: async () =>
            await Fetcher(query),
    });

    const imageUri = data?.sprites.front_default;

    const renderPokemonTypes = (arrayNumber: number) => {
        if (data){
            const pokemonTypes = data.types.map((q) => q.type.name);
            const capitalizeFirstCharacterPokemonTypes = capitalizeFirstCharacter(pokemonTypes[arrayNumber]);
            return capitalizeFirstCharacterPokemonTypes;
        }
    };

    const dataNotAvailable = () => {
        const errorMessage = 'Something wrong with the Database :(';
        if (error){
            return (
                <View>
                    <Text className="self-center mt-[50%] font-ttCommonsBold text-lg">
                        {errorMessage}
                    </Text>
                </View>
            );
        }
    };

    function fetching() {
        if (isFetching && isLoading){
            return (
            <View className="items-center">
                <ActivityIndicator size="large" color="#000000" />
            </View>
            );
        }
    }
    const color = pokemonTypesColors(renderPokemonTypes(0)).backgroundColor;

    return (
    <View className="mt-10">
        {dataNotAvailable()}
        <TouchableOpacity onPress={onPress}>
            <View
                style={[styles.iconContainer, { backgroundColor: color }]}
                className="rounded-2xl self-center">
                <Text className="text-white flex-1 ml-3 mt-6 font-ttCommonsBold text-lg">
                    {capitalizeFirstCharacter(pokemonName)}
                </Text>
                <View className="bg-slate-50/25 rounded-xl w-[42%] ml-2">
                    <Text className="text-white font-ttCommonsBold text-center text-xs">{renderPokemonTypes(0)}</Text>
                </View>
                {renderPokemonTypes(1) && <View className="bg-slate-50/25 rounded-xl w-[42%] ml-2 mt-2">
                    <Text className="text-white font-ttCommonsBold text-center text-xs">{renderPokemonTypes(1)}</Text>
                </View>}
                <View className="flex-1 justify-end items-end">
                    {fetching()}
                    {imageUri && <Image className="w-[100] h-[100] mb-2" source={{uri: imageUri}}/>}
                </View>
            </View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        height: 150,
        width: 160,
    },
});
