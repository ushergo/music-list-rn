import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Axios from 'axios'
import Card from '../card/index'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musics: [{pic_s210: './img/1.png', name: '测试测试', comment: 'sdfsfsdsdfsdfdsf'}]
        }
    }

    componentDidMount() {
        /*
        https://blog.csdn.net/c__chao/article/details/78573737
        音乐排行榜接口：
        https://api.apiopen.top/musicRankings
        音乐排行榜详情接口：
        https://api.apiopen.top/musicRankingsDetails?type=1
        */
        const REQUEST_URL = "https://api.apiopen.top/musicRankings";
        Axios.get(REQUEST_URL).then((result) => {
            console.log(result);
            this.setState({
                musics: result.data.result //必须加上data，否则获取不到
            })
        })
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载音乐数据……
                </Text>
            </View>
        );
    }

    render() {
        if (!this.state.musics) {
            return this.renderLoadingView();
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>欢迎来到音乐排行榜</Text>
                <View style={styles.cardList}>
                    {
                        this.state.musics && this.state.musics.map((item, index) => {
                            const uri = item.pic_s210;
                            const title = item.name;
                            const desc = item.comment;

                            return (
                                <Card
                                    key={index}
                                    uri={uri}
                                    title={title}
                                    desc={desc}
                                ></Card>
                            )
                        })
                    }

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardList: {
        width: '95%',
        height: 'auto'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
