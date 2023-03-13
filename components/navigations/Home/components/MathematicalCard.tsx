import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const MathematicalCard: React.FC<{
    icon?: 'plus' | 'minus' | 'cross';
    divide?: boolean,
    label: string;
    onPress?: () => void;
}> = ({ icon, label, onPress, divide }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View
                    style={styles.iconContainer}
                    className="rounded-2xl bg-[#ffffff] self-center"
                >
                    <View className="flex-1 justify-center items-center">
                        {icon && <Entypo name={icon} size={50} color="black" />}
                        {divide && <FontAwesome5 name="divide" size={45} color="black" />}
                    </View>
                </View>
            </TouchableOpacity>
            <View className="mt-2 items-center">
                <Text className="text-gray-600 text-center font-bold">
                    {label}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        height: 125,
        width: 125,
    },
});
