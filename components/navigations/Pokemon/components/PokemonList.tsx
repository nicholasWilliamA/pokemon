import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { pokemonApiUri } from '@Constants/apiUri';
import { Fetcher } from '@Functions/SwrFetcher';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PokemonLists } from '@Interfaces/Pokemon';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { useRefreshOnFocus } from '@Functions/useRefreshOnFocus';
import { HomeNavigationStackParams } from '@Components/navigations/Home/HomeNavigationStackParams';
import { useCallback } from 'react';
import { PokemonCard } from './PokemonCard';

interface PokemonListProps {
    navigation: NativeStackNavigationProp<HomeNavigationStackParams, 'PokemonListScreen', undefined>;
    route: RouteProp<HomeNavigationStackParams, 'PokemonListScreen'>;
    query: string;
}

export const PokemonList: React.FC<PokemonListProps> = ({ navigation, query }) => {
    const isFocus = useIsFocused();

    const fetchDataWithBearer = async ({ pageParam = 0 }) => {
        const response = await Fetcher(pokemonApiUri,
            {
                params: {
                    'limit': 10,
                    'offset': pageParam,
                },
            });
        return response;
    };

    const {
        data,
        refetch,
        isFetching,
        fetchNextPage,
        error,
        isLoading,
     } = useInfiniteQuery<PokemonLists[]>({
        queryKey: ['pokemon', query, isFocus],
        queryFn: fetchDataWithBearer,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length !== 0){
                const nextPage = 10 * (pages.length + 1);
                return nextPage;
            }
            return undefined;
        },
        enabled: isFocus,
    });

    useRefreshOnFocus(refetch);

    const renderFooter = useCallback(() => {
        if (isFetching && !isLoading) {
            return (
                <View className="items-center mb-8">
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            );
        } else {
            return null;
        }
    }, [isFetching, isLoading]);

    const renderItem = useCallback(
        ({ item, index }) => (
            <View className="flex-row flex-wrap justify-evenly" key={'_pokemon' + index}>
                {item.results.map((q, innerIndex) =>
                {
                    return (<PokemonCard
                    onPress={() => navigation.navigate('PokemonDetailScreen', {url: q.url})}
                    key={'pokemonCard_' + index + '_' + innerIndex}
                    pokemonName={q.name}
                    query={q.url}
                    />);
                }
                )}
            </View>
        ),
        [navigation]
    );

    const getItemKey = useCallback((_, index) => 'pokemon' + index, []);

    return (
        <View className="">
            {isFetching && isLoading ? (
                <View className="items-center">
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            ) : null}
            {error ? (
                <View>
                    <Text className="self-center mt-[50%]">
                        {'Something wrong with the Database :('}
                    </Text>
                </View>
            ) : null}
            <FlatList
                className="mb-10"
                data={data?.pages.flat()}
                refreshing={isFetching}
                onEndReached={() => fetchNextPage()}
                initialNumToRender={6}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                keyExtractor={getItemKey}
            />
        </View>
    );
};
