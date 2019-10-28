import React, { useState } from 'react';
import { resolve } from 'upath';
import ReactDOM from 'react-dom';

class Modal extends React.Component {

    onOk(){
        alert(this.props.message)
        this.props.resolve(true)
    }
    ondelete(){
        alert(this.props.message)
        this.props.resolve(false)
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.onOk()}}>确认</button>
                <button onClick={()=>{this.ondelete()}}>取消</button>
            </div>
        )
    }
}


function confirm(message){

    if(Object.prototype.toString.call(message) === "[Object String]"){

        // 空
    }

    let promise = new Promise((resolve,reject)=>{
        let modaldiv = document.createElement("div")
        modaldiv.className = "ant-modal-mask"
        document.body.appendChild(modaldiv)
        ReactDOM.render(<Modal resolve={resolve} message={message}/>, document.getElementsByClassName('ant-modal-mask')[0]);
    })
    


    return promise
}

export default confirm;