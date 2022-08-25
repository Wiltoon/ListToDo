import { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

import IconTrash from '../../imgs/trash.png'

import { styles } from './styles';

type Props = {
    name: string;
    done: boolean;
    onRemove: () => void;
    onChange: () => boolean;
}

export function Task({ name, done, onRemove, onChange } : Props){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style = {styles.container}>
            <CheckBox 
                value = {done}
                onValueChange={onChange}
                style = {done ? 
                    styles.checkboxOn : styles.checkboxOff}
            />
            <Text style = {
                done ? 
                    styles.name : styles.nameSeleted}>
                {name}
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={onRemove} 
                >
                    <Image 
                        source={IconTrash}
                        style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}