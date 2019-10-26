import React from 'react'
import { connect } from 'react-redux'

const Account = props => {
    return <div>
        <h1>Account</h1>
        <label>UserName: {props.userInfo.userName} </label>
        <label>Password: {props.userInfo.password} </label>
    </div>
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.login.user
    }
}

export default connect(mapStateToProps, null)(Account);