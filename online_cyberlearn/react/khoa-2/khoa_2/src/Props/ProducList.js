import React, { Component } from "react"
import ProducItem from "./ProducItem"

export default class ProducList extends Component {
	renderProductItem = () => {
		return this.props.ArrayProduct.map((item, index) => {
			return (
				<div className='col-4 mt-3 w3-animate-zoom card-hover' key={index}>
					<ProducItem item={item}/>
				</div>
			)
		})
	}
	render() {
		// console.log("data",this.props.ArrayProduct)

		return <div className='row'>{this.renderProductItem()}</div>
	}
}
