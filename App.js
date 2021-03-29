/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, Component } from 'react';
// import type {Node} from 'react';
import
{
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    Button,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Rudy extends Component
{
    render()
    {
        let Img = '';
        if (this.props.type === 'one') {
            Img = require('./assets/sample_image1.jpg');
        } else if (this.props.type === 'two') {
            Img = require('./assets/sample_image2.jpg')
        }
        return (
            <View>
                <Image source={Img} style={{ width: 300, height: 200 }} />
            </View>
        )
    }
}

// const App = () =>
// {
//     return (
//         <View style={styles.container}>
//             <Text>First-Project</Text>
//             <Rudy type='one'></Rudy>
//             <Rudy type='two'></Rudy>
//             <Text>Rudy</Text>

//             <Button title={"나의 주소출력"}></Button>

//         </View>
//     );
// };

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            address: ''
        }
    }

    writeAddress = () =>
    {
        let name = 'asdf';

        this.setState({
            address: "서울 특별시 "
        }, function ()
        {
            alert("주소 입력 완료.");
        });
    }

    writeReset = () =>
    {
        this.setState({
            address: ""
        }, function ()
        {
            alert("주소 리셋 완료.");
        });
    }


    render()
    {
        return (
            <View style={styles.container} >
                <Text>First-Project</Text>
                <Image source={require('./assets/sample_image1.jpg')} style={{ width: 300, height: 200 }}></Image>

                <Text>{this.state.address}</Text>
                <Button title={"나의 주소출력"} onPress={this.writeAddress}></Button>
                <Button title={"리셋"} onPress={this.writeReset}></Button>

            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;