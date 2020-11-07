import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  type: PropTypes.oneOf(['textarea', 'text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local']),
  name: PropTypes.string,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  formGroup: PropTypes.string,
  hasIcon: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  hint: PropTypes.string
}

const defaultProps = {
  children: null,
  label: '',
  labelHidden: false,
  type: 'text',
  name: undefined,
  status: '',
  disabled: false,
  value: undefined,
  formGroup: null,
  hasIcon: null,
  size: '',
  placeholder: '',
  rows: 3,
  hint: null
}

const inputStyles = {
  background: 'none',
  color: 'white',
  border: 'none',
  float: 'right',
  cursor: 'pointer',
  padding: '10px',
  fontWeight: 'bold',
}

const Input = ({
  className,
  children,
  label,
  labelHidden,
  type,
  name,
  status,
  disabled,
  value,
  formGroup,
  hasIcon,
  size,
  placeholder,
  rows,
  hint,
  ...props
}) => {

  const wrapperClasses = classNames(
    (formGroup && formGroup !== '') && (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
    (hasIcon && hasIcon !== '') && 'has-icon-' + hasIcon
  );

  const classes = classNames(
    'form-input',
    size && `form-input-${size}`,
    status && `form-${status}`,
    className
  );

  const [input, setInput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Email ${input}`)
  }


  //classes and wrapperClasses
  //const Component = type === 'textarea' ? 'textarea' : 'input';
  //setInput('Your best email');

  return (
    <>
    </>
    // <form
    //   action="https://gmail.us10.list-manage.com/subscribe/post?u=2912d4a9170f382e05ec606b2&amp;id=9166f40196"
    //   method="post"
    //   id="mc-embedded-subscribe-form"
    //   name="mc-embedded-subscribe-form"
    //   class="validate"
    //   target="_blank"
    //   noValidate
    // >
    //   <div>
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={e => setInput(e.target.value)}
    //       className={classes}
    //     />
    //   </div>
    // </form>
    // <form
    //   action="https://gmail.us10.list-manage.com/subscribe/post?u=2912d4a9170f382e05ec606b2&amp;id=9166f40196"
    //   method="post"
    //   id="mc-embedded-subscribe-form"
    //   name="mc-embedded-subscribe-form"
    //   target="_blank"
    //   noValidate
    //   //onSubmit={handleSubmit}
    //   className={wrapperClasses}
    // >
    //   <label>
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={e => setInput(e.target.value)}
    //       className={classes}
    //     />
    //     {/* <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" type="submit" value="submit">
    //       <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
    //     </svg> */}
    //   </label>
    //   <input type="submit" value="Submit" style={inputStyles} />
    // </form>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
