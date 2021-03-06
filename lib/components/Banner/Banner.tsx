import { Paper } from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import React from "react";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles = makeStyles((theme: Theme) => ({
  notificationContainer: {
    borderRadius: "4px",
    padding: "1rem"
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 40,
    color: "#fff"
  },
  iconVariant: {
    opacity: 0.9
  },
  message: {
    color: "#fff"
  }
}));

export interface Props {
  variant: keyof typeof variantIcon;
  onClose?: () => void;
  paper?: boolean;
}

export const Banner: React.FC<Props> = props => {
  const classes = useStyles(props);
  const Icon = variantIcon[props.variant];

  return (
    <div className="row center-xs">
      <div className="col-xs">
        <div
          className={`${classes.notificationContainer} ${
            classes[props.variant]
          } margin-2`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div>
              <Icon className={`${classes.icon} ${classes.iconVariant}`} />
            </div>
            <div>
              <div className={classes.message}>
                {props.paper ? (
                  <Paper style={{ padding: "2rem" }}>{props.children}</Paper>
                ) : (
                  props.children
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
