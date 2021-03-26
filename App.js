/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragnent, Component} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Rudy extends Component {
    render() {
        let Img = '';
        if(this.props.type === 'one'){
            Img = require('./assets/sample_image1.jpg');
        }else if(this.props.type === 'two'){
            Img = require('./assets/sample_image2.jpg')
        }
        return (
            <View>
                <Image source = {Img} style={{width: 300, height: 200}} />
            </View>
        )
    }
}

const App = () => {
  return (
    <View style = {styles.container}>
        {/* <Text>Isn't she lovely?</Text> */}
        <Text>First-Project</Text>
        <Rudy type = 'one'></Rudy>
        <Rudy type = 'two'></Rudy>
        {/* <Image source = {require('./assets/Useop.jpg')} style={{width: 300, height: 500}} /> */}
        <Text>Rudy</Text>
        {/* <Text>U_seop</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
});

export default App;