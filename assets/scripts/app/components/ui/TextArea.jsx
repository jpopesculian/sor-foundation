import React from 'react';

class TextArea extends React.Component {
  constructor() {
    super(props)
  }

  render() {
    return <input {...this.props} />
  }
}
