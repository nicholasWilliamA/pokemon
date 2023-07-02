import React from 'react';
import { TextInput } from 'react-native';

type TextInputProps = React.ComponentProps<typeof TextInput>;

export const OutlinedTextInput: React.FC<TextInputProps> = (props) => {
    return (
        <TextInput {...props}
            className="w-full h-10 bg-white border-[#C2C2C2] rounded-sm border-[1px] px-3 focus:border-isuzu-red font-univers55"
            selectionColor={'black'} />
    );
};
