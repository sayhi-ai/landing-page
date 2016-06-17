import AppDispatcher from "../dispatcher/AppDispatcher"
import AccountConstants from "../constants/AccountConstants"

class AccountActions {
    signUp(email) {
        AppDispatcher.handleViewAction({
            actionType: AccountConstants.SIGN_UP,
            email
        })
    }

    signIn(email, password) {
        AppDispatcher.handleViewAction({
            actionType: AccountConstants.SIGN_IN,
            email,
            password
        })
    }
}

export default accountActions = new AccountActions()