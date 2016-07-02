/**
 * Created by renebrandel on 6/16/16.
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import EventEmitter from "events"

class AccountStore extends EventEmitter {
    emitChange() {
        this.emit("change")
    }
}

var accountStore = new AccountStore()

AppDispatcher.register(function (payload) {
    console.log(payload);
    return true;
})


export default accountStore;