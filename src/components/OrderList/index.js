import React, {Component} from 'react';
import OrderItem from '../OrderItem'
import './style.css';

class OrderList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('/mock/order.json').then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    data.goods_list.map((item) => {
                        if (typeof item.isComment == 'undefined') {
                            item.isComment = Math.random() > 0.5
                        }
                        return item
                    })
                    this.setState({
                        list: data.goods_list
                    })
                })
            }
        })
    }

    render() {
        return (
            <div className="orderList">
                {
                    this.state.list.map((item) => {
                        return <OrderItem key={item.goods_id} data={item}></OrderItem>
                    })
                }
            </div>
        );
    }
}

export default OrderList;
