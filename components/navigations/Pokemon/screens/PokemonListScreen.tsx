import { NormalSearchbar } from '@Components/NormalSearchBar';
import { HomeNavigationStackScreenProps } from '@Components/navigations/StackScreenProps';
import { useDebouncedQuery } from '@Functions/useDebouncedQuery';
import { View, StyleSheet, Text } from 'react-native';
import { PokemonList } from '../components/PokemonList';

export const PokemonListScreen: React.FC<HomeNavigationStackScreenProps<'PokemonListScreen'>> = ({ navigation, route }) => {
    const { onChangeText, query, visibleQueryText } = useDebouncedQuery();

    return (
        <View style={style.container}>
            <NormalSearchbar className="w-[290px] self-center"
                placeholder="Search"
                value={visibleQueryText}
                onChangeText={onChangeText}/>
            <View className="mt-1" >
                <PokemonList navigation={navigation} route={route} query={query}/>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
});
