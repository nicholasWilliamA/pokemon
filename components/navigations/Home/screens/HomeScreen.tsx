import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { HomeNavigationStackScreenProps } from '@Components/navigations/StackScreenProps';
import { CustomFonts } from '@Components/CustomFonts';

export const HomeScreen: React.FC<HomeNavigationStackScreenProps<'HomeScreen'>> = ({navigation, route}) => {

    return (
        <View style={style.container}>
            <View className="flex-wrap flex-row justify-evenly mt-20">
                <TouchableOpacity className="mt-1 rounded-2xl bg-[#fcdc5b]" style={style.iconContainer}
                    onPress={() => navigation.navigate('PokemonListScreen')}>
                    <Image className="w-[140] h-[140] self-center flex-1" source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}}/>
                    <Text className="mb-6 text-center text-white font-ttCommonsBold text-lg" style={[CustomFonts.ttCommons]}>Pokédex</Text>
                </TouchableOpacity>
                <View className="mt-1 rounded-2xl self-center bg-[#fcdc5b]" style={style.iconContainer}>
                    <Text className="font-ttCommonsBold text-white">tes</Text>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    iconContainer: {
        height: 150,
        width: 160,
    },
});

