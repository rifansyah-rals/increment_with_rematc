import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { connect } from "react-redux";

class HomeApp extends Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight onPress={this.props.incrementAsync}>
          <Text>Increase</Text>
        </TouchableHighlight>
        <Text> {this.props.count} </Text>
        <TouchableHighlight onPress={this.props.decrementAsync}>
          <Text>Decrease</Text>
        </TouchableHighlight>
      </View>
    </View>
    )
  }
}

function mapState(state) {
  return {
    count: state.count,
  }
}

function mapDispatch(dispatch) {
  return {
    increment: () => dispatch.count.increment(1),
    incrementAsync: () => dispatch.count.incrementAsync(1),
    decrement: () => dispatch.count.decrement(1),
    decrementAsync: () => dispatch.count.decrementAsync(1),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapState, mapDispatch)(HomeApp);
