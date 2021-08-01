import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  textarea: {
    padding: 10,
    lineHeight: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colorQuaternary,
    boxShadow: [[1, 1, 1, theme.colorPrimary]],
  },
}));

const CustomTextArea = (props) => {
  const theme = useTheme();
  const classes = useStyles({...props, theme});

  return (
    <textarea
      className={classes.textarea}
      id={props.id}
      disabled={props.disabled}
      style={props.overrideStyle}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      rows='10'
      cols='100'
    />
  );
};

export default CustomTextArea;
