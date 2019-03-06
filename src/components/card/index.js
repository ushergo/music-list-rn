import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default class Card extends Component {
    constructor(props){
        super(props);
        this.state ={
            uri: this.props.uri,
            title: this.props.title,
            desc:this.props.desc
        }
    }


    render() {
        return (
            <View style={s.container}>
                <View style={s.avatar}>
                    <Image source={{
                        uri:this.state.uri
                    }} style={s.img}/>
                </View>
                <View style={s.msg}>
                    <View style={s.title}>
                        <Text>{this.state.title}</Text>
                    </View>
                    <View style={s.desc}>
                        <Text>{this.state.desc}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: "row",
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginTop:10,
        backgroundColor: '#F5FCFF',
    },
    avatar: {
        width: 50,
        height: 50,
    },
    img: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#ddd',
    },
    msg: {
        flex:1,
        marginLeft: 15
    },
    title: {
        height:30,
        fontSize: 18,
        fontWeight: 'bold'
    },
    desc: {

    }

});

