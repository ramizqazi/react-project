import React from "react";
import ProductCatogoryRow from "./productCategoryRow"
import ProductRow from "./ProductRow";


const ProductTable = (props) => {
    const sportArr = props.data.filter((item) => {
        if (item.category === "Sporting Goods") {
            return true
        }
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCatogoryRow />
                <ProductRow />
            </tbody>
        </table>
    );
}


export default ProductTable;