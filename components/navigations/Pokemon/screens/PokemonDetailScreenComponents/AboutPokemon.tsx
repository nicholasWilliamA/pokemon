import { HomeNavigationStackParams } from '@Components/navigations/Home/HomeNavigationStackParams';
import { TTCommonsMedium } from '@Constants/general';
import { capitalizeFirstCharacter } from '@Functions/capitalizedFirstCharacter';
import { PokemonDetails } from '@Interfaces/PokemonDetails';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface AboutPokemonNavigationProps {
    navigation: NativeStackNavigationProp<HomeNavigationStackParams, 'PokemonDetailScreen', undefined>;
    route: RouteProp<HomeNavigationStackParams, 'PokemonDetailScreen'>;
    data?: PokemonDetails;
}

const AboutPokemon: React.FC<AboutPokemonNavigationProps> = ({ navigation, route, data }) => {

    const formatAbilities = (abilities?: PokemonDetails['abilities']) => {
        if (abilities) {
            const abilityNames = abilities.map((ability) => capitalizeFirstCharacter(ability.ability.name));
            return abilityNames.join(', ');
        }
        return '';
    };

    return (
        <ScrollView style={styles.container}>
            <View className="ml-7">
                <View className="mt-4 flex-row">
                    <Text style={styles.text} className="text-gray-500 w-[100]">Species</Text>
                    <Text style={styles.text} className="">{capitalizeFirstCharacter(data?.species.name)}</Text>
                </View>
                <View className="mt-4 flex-row">
                    <Text style={styles.text} className="text-gray-500 w-[100]">Height</Text>
                    <Text style={styles.text} className="">{data && data?.height / 10 + ' m'}</Text>
                </View>
                <View className="mt-4 flex-row">
                    <Text style={styles.text} className="text-gray-500 w-[100]">Weight</Text>
                    <Text style={styles.text} className="">{data && data.weight / 10 + ' kg'}</Text>
                </View>
                <View className="mt-4 flex-row">
                    <Text style={styles.text} className="text-gray-500 w-[100]">Abilities</Text>
                    <Text style={styles.text} className="">{formatAbilities(data?.abilities)}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontFamily: TTCommonsMedium,
        fontSize: 16,
        lineHeight: 24,
    },
});

export default AboutPokemon;
