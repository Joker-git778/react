import React, { Component, Fragment } from "react";
import "./style.css";
import ToDoItem from "./ToDoItem";

import Test from "./Test";

class TodoList extends Component {
  // 定义数据
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: "123", //input数据
      list: ["学习react", "helloWord"] //列表中的数据
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handBtnClick = this.handBtnClick.bind(this); //优化
    this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	
  componentWillMount() { //在组建即将被挂载到页面上时自动执行
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          todolist
          <label htmlFor="insterAttr">输入内容</label>
          <input
            ref={input => {
              this.input = input;
            }}
            id="insterAttr"
            type="text"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange} //定义事件
          />
          <button onClick={this.handBtnClick}>提交</button>
          <p>{this.state.inputValue}</p>
          <ul
            ref={ul => {
              this.ul = ul;
            }}
          >
            {this.getTodoItem()} {/* 精简写法 拆分为方法 */}
          </ul>
          <Test context={this.state.inputValue} />
        </div>
      </Fragment>
    );
  }

	componentDidMount() { //组建被挂载之后执行
		console.log('componentDidMount')
	}

	shouldComponentUpdate() { //组建被更新之前  返回布尔类型的返回结果
		console.log('shouldComponentUpdate'); 
		return true; //返回false 下面的函数不会执行
	}

	componentWillUpdate() { //组建被更新之前 自动执行，但是他会在shouldCompoent之后执行
													//如果shouldComponentUpdate返回false 不执行 
		console.log('componentWillUpdate');
	}

	componentDidUpdate() { //组建被更新之后自动执行，但是他会在shouldCompoent之后执行
												//如果shouldComponentUpdate返回false 不执行 
		console.log('componentDidUpdate');
	}

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <ToDoItem
          key={index}
          content={item} //父组件传值 定义属性
          index={index}
          deleteItem={this.handleItemDelete}
        /> //向子组件传递方法

        // <li
        // 	key={index} //不建议使用index
        // 	onClick={this.handleItemDelete.bind(this, index)}  //事件传参
        // 	dangerouslySetInnerHTML={{__html: item}} //不解析标签  下面的{item}可不写
        // >
        // 	{/* {item} */}
        // </li>
      );
    });
  }

  handleInputChange(e) {
    //旧版本
    // this.setState({
    // 	inputValue: e.target.value
		// })
		
		//const value = e.target.value;
		//ref替換方法
		const value = this.input.value;
		//新版本
    // this.setState(() => {
    // 	return {
    // 		inputValue: value
    // 	}
    // })
    //或者
    this.setState(() => ({
      inputValue: value
    }));
  }

  handBtnClick() {
    this.setState(
      prevState => ({
        //prevState修改之前的数据等同于this.state
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }

  handleItemDelete(index) {
    //接收参数
    //immutable原则
    //state 不允许我们做任何的改变
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }; //list: list es6键值一样 省略
    });
    console.log(index);
  }
}

export default TodoList;
