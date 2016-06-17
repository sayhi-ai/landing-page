/**
 * Created by renebrandel on 6/16/16.
 */
import {Dispatcher} from "flux";

class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
}
export default appDispatcher = new AppDispatcher();