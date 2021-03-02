import React from "react";


const ProductCatogoryRow = (props) => {
    return (
        <tr>
            <th colSpan="2">{props.catogory}</th>
        </tr>
    );

}

export default ProductCatogoryRow;