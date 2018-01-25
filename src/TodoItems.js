import React, { Component } from "react";

class TodoItems extends Component {
	constructor(props, context) {
		super(props, context);

		this.createTasks = this.createTasks.bind(this);
	}

	createTasks(item) {
		var del = String.fromCharCode(10006);
		return <li
			key={item.key}>
			{item.text}
			<span id="delbtn" onClick={() => this.delete(item.key)}>{" "+del}</span>
		</li>
	}
	delete(key) {
		this.props.delete(key);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;