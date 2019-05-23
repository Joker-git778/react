import React, { Component } from 'react';

class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //指向修改
  }

  render() {
    const {content} = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  }

  handleClick() {
    const { deleteItem, index } = this.props; //简化写法
    deleteItem(index)  //子组件像父组件 接收方法
  }
}

export default ToDoItem;