import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    ScrollView,
    Text
} from 'react-native';

const {width} = Dimensions.get("window")
export default class Banner extends Component {


    state = {
        list: [],
        currentPoint: 0,
        time: 2000 /*轮播定时自动滚动*/
    }

    componentDidMount() {
        fetch('http://tanzhouweb.com/mg/mgData.php?title=banner')
            .then(r => r.json())
            .then((result) => {
                this.setState({
                    list: result
                })
                //自动轮播
                this.handleAutoPlay()
            })
    }

    //创建轮播图片
    generateBanner = () => {
        return this.state.list.length > 0 && this.state.list.map((item, index) => {
            return (
                <View key={index} style={{width, height: 150}}>
                    <Image source={{uri: item}} style={{width, height: 150}}/>
                </View>
            )
        })
    }

    //创建指示器
    generatePoint = () => {
        return (
            this.state.list.map((item, index) => {
                let currentPoint = this.state.currentPoint

                const style = currentPoint === index ? {color: 'red'} : {color: 'white'}
                return (
                    <Text key={index} style={[s.point, style]}>&bull;</Text>
                )
            })
        )
    }

    //滚动的时候获取当前页
    handleMmentumScrollEnd = (e) => {
        // 获取 水平方向的偏移量
        let offsetX = e.nativeEvent.contentOffset.x

        // 获取当前要显示页数
        let currentPoint = Math.ceil(offsetX / width)

        this.setState({currentPoint})
    }
    timer = null
    //自动轮播
    handleAutoPlay = () => {
        const {currentPoint, time} = this.state
        let point = currentPoint
        //创建定时器
        this.timer = setInterval(() => {
            //控制 指示器 滚动
            point = this.state.currentPoint+1 >= this.state.list.length ? 0 : this.state.currentPoint + 1
            this.setState({
                currentPoint: point
            })

            //控制 scrollview 滚动
            let offsetX = point * width
            this.sv.scrollResponderScrollTo({
                x: offsetX,
                y: 0,
                animated: true
            })
        }, time)
    }

    // 拖拽 就清除定时器
    handleBeginDrag = () => {
        clearInterval(this.timer)
    }
    // 拖拽结束 就开起定时器
    handleEndDrag = () => {
        this.handleAutoPlay()
    }

    render() {
        return (
            <View style={s.container}>
                {/*滚动部分*/}
                <ScrollView
                    ref={scv => this.sv = scv} /*命名并将 该对象赋值给sv变量*/
                    horizontal={true}
                    pagingEnabled={true} /*分页启动的时候，滚动的时候会滚动到整数位置上*/
                    showsHorizontalScrollIndicator={false} /*隐藏滚动条*/
                    onMomentumScrollEnd={this.handleMmentumScrollEnd}
                    onScrollBeginDrag={this.handleBeginDrag} /*开始拖拽的时候清除定时器*/
                    onScrollEndDrag={this.handleEndDrag} /*停止拖拽的时候启动定时器*/
                >
                    {this.generateBanner()}
                </ScrollView>
                {/*指示器*/}
                <View style={s.controllPoint}>
                    {this.generatePoint()}
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        position: 'relative',
        width: width,
        height: 150
    },
    controllPoint: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width,
        height: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    point: {
        fontSize: 35,
        color: 'white',
    }
})
