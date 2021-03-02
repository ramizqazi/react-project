import React from "react";
import ProductCatogoryRow from "./productCategoryRow"
import ProductRow from "./ProductRow";


const ProductTable = (props) => {
    const filteredData = props.data.filter(function (item) {
        if (item.category === "Sporting Goods") {
            return true
        } else {
            return false
        }
    })

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <ProductCatogoryRow data={filteredData} />
            <ProductRow data={filteredData} />
        </table>
    );
}
export default ProductTable;