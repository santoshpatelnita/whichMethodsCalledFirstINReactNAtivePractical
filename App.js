import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class App extends Component {
  constructor(props) {
    super(props);
    console.log('Inside constructor');
    this.state = {
      message: 'This is initial message',
    };
  }
  componentWillMount() {
    this.setState({message: 'This is an updated message'});
    console.log("Inside Component will Mount =====>>>>>>")
  }
  componentDidMount = () => {
    console.log('Inside componentDidMount Methods');
  };
  componentDidUpdate = () => {
    this.setState({message: 'This is an updated1234 message'});
    console.log('Inside componentDidUpdate Methods');
  };

  render() {
    console.log('Inside Render Methods');
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'skyblue',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {' '}
          To Check Which Method Called First{' '}
        </Text>

        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

export default App;
