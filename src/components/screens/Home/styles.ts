import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 0.25,
      backgroundColor: '#0D0D0D',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 24,
    },
    baseContainer: {
      flex: 0.75,
      backgroundColor: '#1a1a1a'
    },
    iconlogo: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginTop: 67, 
    },
    to: {
      fontSize: 48,
      color: '#4EA8DE',
      fontWeight: 'bold',
      marginTop: 48,
    },
    do: {
      fontSize: 48,
      color: '#5E60CE',
      fontWeight: 'bold',
      marginTop: 48,
    },
    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#ffffff',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 20,
        marginTop: -50,
        marginLeft: 20,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 24,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 10,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -50,
      marginRight: 20,
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    listEmptyText: {
      color: '#808080',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    subTitleEmpty:{
      color: '#808080',
      fontSize: 16,
      textAlign: 'center'
    },
    selections: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
    criadas: {
      fontSize: 18,
      color: '#4EA8DE',
      fontWeight: 'bold',
    },
    concluidas: {
      fontSize: 18,
      color: '#5E60CE',
      fontWeight: 'bold',
      textAlign: 'right',
    }
  });