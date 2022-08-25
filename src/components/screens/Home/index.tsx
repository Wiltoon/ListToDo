import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { Task } from '../../Task';
import { InfoList } from '../../InfoList';
import { Logo } from '../Logo';

import IconClipBoard from '../../../imgs/Clipboard.png';
import IconLogo from '../../../imgs/rocket.png';
import IconPlus from '../../../imgs/plus.png';

import { styles } from './styles';

export default function Home() {
    const [tasks, setTasks] = useState<Task>([]);
    const [nameTask, setNameTask] = useState('');
    const [countDone, setCountDone] = useState(0);
    const [toggleCheckBoxes, setToggleCheckBoxes] = useState([false])

    function handleTaskAdd(){
        if(tasks.includes(nameTask)){
            return Alert.alert('Tarefa Anotada!', 'Já existe essa tarefa')
        }
        const newTask: Task = {
            name: nameTask,
            done: false
        }
        setTasks(prevState => [...prevState, newTask]);
        setNameTask('')
    }

    function countDoneTasks(item: Task, newValue: boolean) {
        const setTask: Task = {
            name: item.name,
            done: newValue
        }
        // setTasks(prevState => prevState.filter(task => task.name !== item.name))
        setTasks(prevState => [...prevState.filter(task => task.name !== item.name), setTask])
        if(newValue){
            setCountDone(countDone+1)
        } else {
            setCountDone(countDone-1)
        }
        // percorre a lista de task e verifica qual esta fechada
    }

    function decrementDones(item: Task) {
        if(item.done){
            setCountDone(countDone-1)
        }
        setTasks(prevState => tasks.filter(task => task.name !== item.name))
    }

    function handleParticipantRemove(item: Task){
        // console.log(tasks.filter(task => task.name !== item.name));
        Alert.alert('Remover', `Deseja remover a tarefa ${item.name}`, [
        {
          text: 'Sim',
          onPress: () => decrementDones(item)
        },
        {
          text: 'Não',
          style: 'cancel'
        }]);
      }

    return (
        <>
            <View style={styles.container}>
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
            
            <View style={styles.baseContainer}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        onChangeText = {text => setNameTask(text)}
                        value = {nameTask}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Image
                            source={IconPlus} 
                            style={styles.buttonText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.selections}>
                    <InfoList 
                        name = 'Criadas'
                        stylesBoard = {styles.criadas}
                        count = {tasks.length}
                    />
                    <InfoList 
                        name = "Concluídas"
                        stylesBoard = {styles.concluidas}
                        count = {countDone}
                    />
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                    <Task 
                        key = {item.name}
                        name = {item.name}
                        done = {item.done}
                        onRemove={() => handleParticipantRemove(item)}
                        onChange={(newValue) => countDoneTasks(item, newValue)}
                    />
                    )}
                    showsVerticalScrollIndicator = {false}
                    ListEmptyComponent = {() => (
                    <View >
                        <Image 
                            source={IconClipBoard} 
                            style={
                                {   
                                    marginLeft: '40%',
                                    marginTop: 20,
                                    marginBottom: 20,
                                    width: 80, 
                                    height: 80
                                }
                            }
                            />
                        <Text style={styles.listEmptyText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.subTitleEmpty}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                    )}
                />
            </View>
        </>
    )
}