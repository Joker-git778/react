import React,{ Component, Fragment } from 'react';
import './style.css';
import ToDoItem from './ToDoItem'

class TodoList extends Component {
	// 定义数据
	constructor(props){
		super(props);
		this.state = {
			inputValue: '123', //input数据
			list:['学习react', 'helloWord'] //列表中的数据
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handBtnClick = this.handBtnClick.bind(this); //优化
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	
	render() {
		return ( 
			<Fragment>
				<div>
					todolist 
					<label htmlFor="insterAttr">输入内容</label>
					<input
						id="insterAttr" 
						type="text" 
						className="input"
						value={this.state.inputValue} 
						onChange={this.handleInputChange}	//定义事件
					/>
					<button onClick={this.handBtnClick}>提交</button>
					<p>{this.state.inputValue}</p>

					<ul>
						{this.getTodoItem()} {/* 精简写法 拆分为方法 */}
					</ul>

				</div>
			</Fragment>
    	)
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<ToDoItem 
					key={index}
					content={item} //父组件传值 定义属性
					index={index}
					deleteItem={this.handleItemDelete}/> //向子组件传递方法
					
				// <li 
				// 	key={index} //不建议使用index
				// 	onClick={this.handleItemDelete.bind(this, index)}  //事件传参
				// 	dangerouslySetInnerHTML={{__html: item}} //不解析标签  下面的{item}可不写
				// >
				// 	{/* {item} */}
				// </li>
			)
		})
	}


	handleInputChange(e) {
		//旧版本
		// this.setState({
		// 	inputValue: e.target.value
		// })

		//新版本
		const value = e.target.value;
		// this.setState(() => {
		// 	return {
		// 		inputValue: value
		// 	}
		// })
		//或者
		this.setState(() => ({
			inputValue: value
		}))
	}

	handBtnClick() {
		this.setState((prevState) => ({  //prevState修改之前的数据等同于this.state
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
	}

	handleItemDelete(index) { //接收参数
		//immutable原则
		//state 不允许我们做任何的改变
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list} //list: list es6键值一样 省略
		})
		console.log(index)
	}
}

export default TodoList;