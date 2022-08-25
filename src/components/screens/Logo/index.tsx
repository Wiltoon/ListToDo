import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

import { styles } from './styles';

import { IconLogo } from '../../../imgs/rocket.png';

type Props = {
    styleDef: StyleSheet;
}

export function Logo(styleDef: Props) {
    return (
        <View style={styleDef}>
            <Image 
                source={IconLogo}
                style={styles.iconlogo}
                />
            <Text style={styles.to}>
                to
            </Text>
            <Text style={styles.do}>
                do
            </Text>
        </View>
    )
};