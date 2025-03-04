import React, { Component } from 'react';

class NlcRenderpro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nlcproduct: [
                {
                    NlcproductId: "P001",
                    NlcproductName: "IPhone11",
                    Nlcquantity: 15,
                    Nlcprice: 1000
                },
                {
                    NlcproductId: "P002",
                    NlcproductName: "IPhone12",
                    Nlcquantity: 20,
                    Nlcprice: 1250
                },
                {
                    NlcproductId: "P003",
                    NlcproductName: "IPhone13",
                    Nlcquantity: 10,
                    Nlcprice: 1500
                },
                {
                    NlcproductId: "P004",
                    NlcproductName: "IPhone14",
                    Nlcquantity: 15,
                    Nlcprice: 2000
                }
            ]
        };
    }

    render() {
        let nlcElement = this.state.nlcproduct.map((nlcitem, index) => {
            return (
                <tr key={nlcitem.NlcproductId}>
                    <td>{index + 1}</td>
                    <td>{nlcitem.NlcproductId}</td>
                    <td>{nlcitem.NlcproductName}</td>
                    <td>{nlcitem.Nlcquantity}</td>
                    <td>{nlcitem.Nlcprice}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            );
        });

        return (
            <div className='alert alert-info'>
                <h2>Danh sách sản phẩm</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nlcElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NlcRenderpro;
