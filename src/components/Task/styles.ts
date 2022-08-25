import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 10,
        padding: 24,
        flexDirection: 'row',
        borderRadius: 10
      },
      name: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16,
      },
      nameSeleted: {
        flex: 1,
        fontSize: 16,
        color: '#f2f2f2',
        marginLeft: 16,
      },
      checkboxOff: {
        borderRadius: 10,
        borderColor: '#4EA8DE',
        justifyContent: 'center'
      },
      checkboxOn: {
        borderRadius: 10,
        borderColor: '#5E60CE',
      },
      button: {
      },
      icon: {
        justifyContent: 'center'
      }
  });