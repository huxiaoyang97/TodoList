import React, {Component, Fragment} from 'react';
import  './TodoList.css';
import TodoListItem from './TodoListItem.js';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            list:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
        this.handleDelete= this.handleDelete.bind(this);
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    /*handleChange(e){
        
        this.setState({
            inputValue:e.target.value//target 是event的属性
        })
    }*/
    handleChange(e){
        const value = e.target.value;//e.target.value用于拿到input里面输入的值，built in.
        this.setState((state, props)=>{
            return{inputValue:value}
        })
    }
    
    handleClickItem(){
        console.log("inputValue", this.state.inputValue);
        let listTemp = this.state.list;
        listTemp.push(this.state.inputValue);
        this.setState({
            list:listTemp,
            inputValue:''
        })
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUpdate(){//delete
        console.log("componentWillUpdate")
    }
    /*handleDelete(index){
        const listTemp = this.state.list;
        listTemp.splice(index,1);
        this.setState({
            list:listTemp
        })
    } */
    handleDelete(index){
        this.setState((prestate, props)=>{
            const tem = prestate.list;
            tem.splice(index,1)
            return {list:tem}
        })
    }
    render(){/*render function必须return，每一个component里面必须有render*/
        console.log("render")
        return(/*小括号中只允许1个div,但是可以包div*/
            <Fragment>//这个优点是啥
                <input value={this.state.inputValue} onChange= {this.handleChange}></input>
                <button onClick = {this.handleClickItem}> Submit </button>
                <ul>
                   {this.state.list.map((item,index)=>{
                       return <TodoListItem key={index} number={index} content={item} handleDeleteItem={this.handleDelete}/>
                   })}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;