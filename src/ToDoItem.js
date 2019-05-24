import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //指向修改
  }

  render() { //重新渲染
    const { content, test } = this.props;
    return (
      <li onClick={this.handleClick}>
        { test }{ content }
      </li>
    );
  }

  handleClick() {
    const { deleteItem, index } = this.props; //简化写法
    deleteItem(index)  //子组件像父组件 接收方法
  }

  //当组件从父组件接受参数
  //只要父组件的renter函数执行了componentWillReceiveProps就会执行
  //如果这个组件第一次存在于父组件中，不会执行
  //如果这个组件之前已经存在于父组件中，才会执行
	componentWillReceiveProps() {
		console.log('children componentWillReceiveProps')
	}

  //当这个组件被移除时执行
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

ToDoItem.propTypes = { //写在最外面  定义类型
  content: PropTypes.string.isRequired, //isRequired 必须传递
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  //test: PropTypes.oneOfType([PropTypes.string, PropTypes.array])  //或者语法oneOfType（）
}

ToDoItem.defaultProps = { //默认
  test: 'hello word'
}

export default ToDoItem;