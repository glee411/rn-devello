import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo'

import Board from '../Board';
import Button from '../Button';

const BOARDS = [{ name: 'Bootcamp' }];
const USERS = { name: 'Admin' };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: BOARDS,
      users: USERS,
      boardInput: '',
    };
  }

  createBoard = () => {
    this.setState(s => ({ boards: [...s.boards, { name: s.boardInput }] }));
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <TextInput
          style={styles.inputs}
          onChangeText={boardInput => {
            this.setState({ boardInput });
          }}
          value={this.state.boardInput}
        />
        <Button onClick={this.createBoard} text="Create Board" />

        <View>{this.state.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
