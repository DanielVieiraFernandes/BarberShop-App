import React from "react";
import {
  AlertNotificationRoot,
  ALERT_TYPE,
  Toast,
} from "react-native-alert-notification";

export const showToast = (
  type:  "success" | "error",
  title: string,
  message: string,
  
) => {
    Toast.show({
        type: type === "success" ? ALERT_TYPE.SUCCESS : ALERT_TYPE.DANGER,
        title,
        textBody: message,
      
    })
};

export const AlertNotification: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  return <AlertNotificationRoot>{children}</AlertNotificationRoot>;
};
