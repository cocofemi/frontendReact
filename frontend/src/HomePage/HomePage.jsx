import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstname',
        },
        {
            title: 'Surname',
            dataIndex: 'surName',
            key: 'surname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Occupation',
            dataIndex: 'occupation',
            key: 'occupation',
          }
    ]
    return (
        <div className="form-border col-lg-8 offset-lg-2">
            <h3>Welcome ({user.email})!</h3>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items && 
                <Table columns={columns} 
                dataSource={users.items.users} 
                rowKey="id"/>
            }
            <p>
                <Link to="/login" style={{ fontSize: '20px'}}>Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };