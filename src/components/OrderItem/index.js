import React, {Component} from 'react';
import './style.css';

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            editing: false,
        }
    }

    handleComment() {
        this.setState({
            editing: true
        })
    }
    
    render() {
        const {group_price, goods_name, sales_tip, hd_thumb_url, isComment} = this.props.data
        return (
            <div className="orderItem">
                {/*商品模块*/}
                <div className="orderItem__itemBox">
                    <div className="orderItem__picBox">
                        <img className="pic" src={hd_thumb_url} alt=""/>
                    </div>
                    <div className="orderItem__rightBox">
                        <div className="name">{goods_name}</div>
                        <div className="desc">{sales_tip}</div>
                        <div className="detail">
                            <div className="price">￥{group_price}元</div>
                            <div className="comment">
                                {
                                    isComment ? (
                                        <button className="comment_btn comment_btn--gray">已评价</button>
                                    ) : (
                                        <button className="comment_btn comment_btn--red" onClick={this.handleComment.bind(this)}>评价</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/*评论模块*/}
                {this.state.editing ? this.renderEditArea() : null}
            </div>
        );
    }

    renderEditArea() {
        return (
            <div className="orderItem__commentBox">
                <textarea className="orderItem__comment"/>
                {this.renderStars()}
                <button className="orderItem__commentBtn orderItem__commentBtn--red">确定</button>
                <button className="orderItem__commentBtn orderItem__commentBtn--gray">取消</button>
            </div>
        )
    }

    renderStars() {
        return (
            <div>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const light = this.state.stars >= index ? "orderItem__star--light" : ""
                        return (
                            <span key={index} className={`orderItem__star ${light}`}>★</span>
                        )
                    })
                }
            </div>
        )
    }
}

export default OrderItem;
