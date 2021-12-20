import { useState } from "react";
import { NotificationContext } from './notification-context.js'

function NotificationProvider({value, children}){
    const [notification, updateNotification] = useState(value);
    return(
        <NotificationContext.Provider value={[notification, updateNotification]}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;