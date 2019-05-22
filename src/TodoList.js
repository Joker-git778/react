import React,{ Component, Fragment } from 'react';
import './style.css';

class TodoList extends Component {
	// 定义数据
	constructor(props){
		super(props);
		this.state = {
			inputValue: '123', //input数据
			list:['学习react', 'helloWord'] //列表中的数据
		}
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
						onChange={this.handleInputChange.bind(this)}	//定义事件
					/>
					<button onClick={this.handBtnClick.bind(this)}>提交</button>
					<p>{this.state.inputValue}</p>

					<ul>
						{
							this.state.list.map((item, index) => {
								return (
									<li 
										key={index} //不建议使用index
										onClick={this.handleItemDelete.bind(this, index)}  //事件传参
										dangerouslySetInnerHTML={{__html: item}} //不解析标签  下面的{item}可不写
									>
										{/* {item} */}
									</li>
								)
							})
						}
					</ul>

				</div>
			</Fragment>
    )
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	handleItemDelete(index) {
		//immutable原则
		//state 不允许我们做任何的改变
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		})
		console.log(index)
	}
}

export default TodoList;