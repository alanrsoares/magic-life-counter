/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Col, Row, Grid } from 'react-native-easy-grid'

const Rounded = ({ style, size, text }) => {
  const round = {
    width: size,
    height: size,
    borderRadius: size / 2,
  }

  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default class MagicLifeCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      northCounter: 20,
      southCounter: 20,
    }

    this.increaseCounter = this.increaseCounter.bind(this)
    this.decreaseCounter = this.decreaseCounter.bind(this)
  }

  increaseCounter(position) {
    const key = `${position}Counter`

    this.setState({ [key]: this.state[key] + 1 })
  }

  decreaseCounter(position) {
    const key = `${position}Counter`

    this.setState({ [key]: this.state[key] - 1 })
  }

  render() {
    const text = (x, inverted) => (
      <Text style={[styles.counterText, inverted ? styles.inverted : {}]}>{x}</Text>
    )

    return (
      <Grid>
        <Row style={styles.north}>
          <Col>
            <TouchableOpacity onPress={() => this.increaseCounter('north')}>
              {text('+')}
            </TouchableOpacity>
          </Col>
          <Col>
            <View style={styles.counter}>
              {text(this.state.northCounter, true)}
            </View>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => this.decreaseCounter('north')}>
              {text('-')}
            </TouchableOpacity>
          </Col>
        </Row>
        <Row style={styles.south}>
          <Col>
            <TouchableOpacity onPress={() => this.increaseCounter('south')}>
              {text('+')}
            </TouchableOpacity>
          </Col>
          <Col>
            <View style={styles.counter}>
              {text(this.state.southCounter)}
            </View>
          </Col>
          <Col>
            <TouchableOpacity onPress={() => this.decreaseCounter('south')}>
              {text('-')}
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const colors = {
  red: '#c1d7e9',
  blue: '#e49977',
  black: '#00160b',
}

const styles = StyleSheet.create({
  container: {
  },
  north: {
    backgroundColor: colors.red,
    alignItems: 'flex-end',
  },
  south: {
    backgroundColor: colors.blue,
    alignItems: 'flex-start',
  },
  counter: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 10,
  },
  counterText: {
    fontSize: 60,
    textAlign: 'center',
    margin: 20,
    color: colors.black,
  },
  inverted: {
    transform: [{ rotate: '180deg'}],
  },
})

AppRegistry.registerComponent('MagicLifeCounter', () => MagicLifeCounter)
