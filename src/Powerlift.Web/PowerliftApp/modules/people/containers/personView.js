import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPerson } from '../actions'

export default class PersonView extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }
  render() {
    return (
      <div>PERSON:</div>
      )}
}
