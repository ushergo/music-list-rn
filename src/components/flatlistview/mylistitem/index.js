import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default class MyListItem extends React.PureComponent {

    _onPress = ()=>{
        this.props.onPressItem(this.props.id)
    }


    render() {
        const textColor = this.props.selected? 'red' :'black'
        return (
            <TouchableOpacity onPress={this._onPress}>

                <View style={s.container}>
                     <Text style={{color: textColor}}>
                         {
                             this.props.title
                         }
                     </Text>
                </View>

            </TouchableOpacity>

        );
    }
}

const s = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:30,
        color: 'green',
        backgroundColor:'rgba(0,0,0,0.1)',
        marginBottom: 2

    }

});

