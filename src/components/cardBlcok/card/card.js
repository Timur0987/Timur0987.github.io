import { Component } from "react";
import './card.css'
class Card extends Component{
    constructor(props) {
        super(props)
        this.state={
            select: false
        }
    }
    onSelect = () =>{
        this.setState(({select})=>({
            select: !select
        }))
    }
    render() {
        const {select} = this.state
        const {src, SelectCard} = this.props

        let classNames = "card"
        if(select){
            classNames += " selectMode"
        }
        return (
            <div className={classNames}>
               <div onClick={this.onSelect}>
               <img className='img'  src={src} alt="" />
               </div>
                <div className="btnBlock">
                    <button className="btn" onClick={SelectCard}>удалить</button>
                </div>
            </div>
        );
    }
}
export default Card