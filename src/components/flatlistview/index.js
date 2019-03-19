import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MyListItem from "./mylistitem";


export default class FlatListView extends React.PureComponent {
    state = {
        selected: (new Map(): Map<string, boolean>)
    };

    _keyExtractor = (item, index) => item.id

    _onPressItem = (id: string) => {
        // this.setState({
        //     selected: (state) => {
        //         const selected = new Map(state.selected)
        //         selected.set(id, !selected.get(id)) //toggle
        //         return {selected}
        //     }
        // })
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    }

    _renderItem = ({item}) => {

        return ( //必须return才可以的

            <MyListItem
                id={item.id}
                onPressItem={this._onPressItem}
                selected={!!this.state.selected.get(item.id)}
                title={item.title}
            />
        )
    }


    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

const s = StyleSheet.create({
    container: {}

});

