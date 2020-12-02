import React, { Component } from 'react'
import UserService from '../service copy/UserService'

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/checkout/_add');
    }

    render() {
        return (
            <div className="ml-5 mr-5">
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Full Name</th>
                                    <th>  User Name</th>
                                    <th>  EmailAddress</th>
                                    <th>  Password</th>
                                    <th>  Address</th>
                                    <th>  PhoneNo</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> { user.fullName} </td>   
                                             <td> {user.userName}</td>
                                             <td> {user.emailaddress}</td>
                                             <td> {user.password}</td>
                                             <td> {user.address}</td>
                                             <td> {user.phoneNo}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default UserList
