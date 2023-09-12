import React, { Component } from 'react'

export default class ProducItem extends Component {
  
  render() {
    
    return (
      <div className='card text-left'>
						<img className='card-img-top' src={this.props.item.image} alt={this.props.item.image} />
						<div className='card-body'>
							<h4 className='card-title'>{this.props.item.name}</h4>
							<p className='card-text'>{this.props.item.price}</p>
							<button id='btnt' className='btn btn-dark text-white'>View detail</button>
						</div>
					</div>
    )
  }
}
