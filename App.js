import React, {Component} from 'react';
import {StyleSheet,Button,  View} from 'react-native';
import FlatListView from './src/components/flatlistview'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data : [
                {id:"1",title:'admin'},
                {id:"2",title:'bad'},
                {id:"3",title:'cool'},
                {id:"4",title:'A'},
                {id:"5",title:'B'},
                {id:"6",title:'C'},
                {id:"7",title:'D'},
                {id:"8",title:'E'},
                {id:"9",title:'F'},
                {id:"10",title:'G'},
                {id:"11",title:'H'},
                {id:"11",title:'I'},
                {id:"11",title:'J'},
                {id:"11",title:'K'},
                {id:"11",title:'L'},
                {id:"11",title:'M'},
                {id:"11",title:'N'},
                {id:"11",title:'O'},
            ]
        }

    }

    _onPressLearnMore= ()=>{
        alert('hello')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatListView  data = {this.state.data}></FlatListView>
                </View>

                <Button
                    onPress={this._onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList:{
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor:'blue'
    }

});
