import { HomeNavigationStackScreenProps } from '@Components/navigations/StackScreenProps';
import { Fetcher } from '@Functions/SwrFetcher';
import { useQuery } from '@tanstack/react-query';
import { PokemonDetails } from '@Interfaces/PokemonDetails';
import { PokemonDetail } from '../components/PokemonDetail';
import { pokemonTypesColors } from '@Constants/pokemonTypesColors';
import { capitalizeFirstCharacter } from '@Functions/capitalizedFirstCharacter';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PokemonDetailTabNavigation from './PokemonDetailScreenComponents/PokemonDetailTabNavigations';

export const PokemonDetailScreen: React.FC<HomeNavigationStackScreenProps<'PokemonDetailScreen'>> = ({ navigation, route }) => {
    const url = route.params.url;

    const { data, isFetching, isLoading, error } = useQuery<PokemonDetails>({
        queryKey: ['pokemonDetails', url],
        queryFn: async () =>
            url && await Fetcher(url),
    });

    const renderPokemonTypes = (arrayNumber: number) => {
        if (data){
            const pokemonTypes = data.types.map((q) => q.type.name);
            const capitalizeFirstCharacterPokemonTypes = capitalizeFirstCharacter(pokemonTypes[arrayNumber]);
            return capitalizeFirstCharacterPokemonTypes;
        }
    };

    const color = pokemonTypesColors(renderPokemonTypes(0)).backgroundColor;

    return (
        <View style={[styles.container, { backgroundColor: color }]} >
            <PokemonDetail navigation={navigation} route={route} data={data}/>
            <PokemonDetailTabNavigation navigation={navigation} route={route} data={data}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});
