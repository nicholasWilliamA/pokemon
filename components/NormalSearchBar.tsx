import React from 'react';
import { Searchbar } from 'react-native-paper';
import { CustomFonts } from './CustomFonts';

export const NormalSearchbar: React.FC<React.ComponentProps<typeof Searchbar>> = (props) => {
    return (
        <Searchbar
            className="rounded-xl"
            icon="magnify"
            style={{
                elevation: 0,
                height: 45,
                backgroundColor: "#ebf3f5",
                borderColor: "#E7E7E7",
                borderWidth: 1,
            }}
            inputStyle={[{ fontSize: 16 }, CustomFonts.ttCommons]}
            {...props} />
    );
};
