import { Text, View, StyleSheet } from 'react-native';

import { styles } from './styles';

type Props = {
    name: string;
    styleBoard: StyleSheet;
    count: string;
}
export function InfoList({ name, stylesBoard, count }: Props) {
    return (
        <View style={styles.content}>
            <Text style={stylesBoard}>
                {name} 
            </Text>
            <Text style={styles.count}>
                {count}
            </Text>
        </View>
    )
}