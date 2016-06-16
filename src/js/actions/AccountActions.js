import AppDispatcher from "../dispatcher/AppDispatcher"
import AccountConstants from "../constants/AccountConstants"

export default AccountActions = {
    signUp : function (email, password) {
        AppDispatcher.handleViewAction({
            actionType: AccountConstants.SIGN_UP,
            email,
            password
        })
    }
}