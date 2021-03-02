import React from 'react';


class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.data[0].name}</td>
                <td>{this.props.data[0].price}</td>
            </tr>
        );
    }

}

export default ProductRow;