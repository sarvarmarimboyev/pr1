import React, { Component } from "react";
import GenericCard from '../components/cards/Card.jsx'
import rasm from '../components/assets/rasm.jpg'
import rasm2 from '../components/assets/rasm2.png'
import rasm3 from '../components/assets/rasm3.png'


let data = [{
    id: 1, img: rasm, detail: { title: 'France pizza', desc: 'Extra cheese and toping' },
    price: 873
},

{
    id: 2, img: rasm2, detail: { title: 'italy pizza', desc: 'Extra cheese and toping' },
    price: 550
},

{
    id: 3, img: rasm3, detail: { title: 'German pizza', desc: 'Extra cheese and toping' },
    price: 658
},

];






export default class Card extends Component {
    render() {
        return (
            <div>
                {
                    data.map((item) => (
                        <GenericCard img={item.img} price={item.price} detail={item.detail} Delete={item.Delete} />
                    ))}

            </div>
        );
    }
}