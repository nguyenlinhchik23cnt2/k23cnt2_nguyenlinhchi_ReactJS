import React from 'react';
import { Link } from 'react-router-dom';

export default function NlcNavBar() {
    return (
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <Link to="/" className="btn btn-light">Home</Link>
            <Link to="/ListUser" className="btn btn-light">Danh sách</Link>
            <Link to="/CreateUser" className="btn btn-light">Thêm mới</Link>
        </div>
    );
}
