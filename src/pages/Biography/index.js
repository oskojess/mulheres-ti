import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css'

class Biography extends Component {
  state = {
    biography: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/biography/${id}`)
    console.log(response)

    this.setState({ biography: response.data })
  }
  render() {
    const { biography } = this.state;
    console.log(biography)
    return (
      <div className="biography-info">
        <h1>{biography.nome}</h1>
        <p>{biography.description}</p>
        <p>
          <a href={biography.url}>Saiba mais</a>
        </p>

      </div>
    )
  }
}

export default Biography;