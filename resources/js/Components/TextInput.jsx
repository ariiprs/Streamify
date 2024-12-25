import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

//ini adalah validasi properti yang diterima oleh komponen TextInput
//forwardRef karena nama functionnya itu yang di export default
forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    // isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};


export default forwardRef(function TextInput(
    { type = 'text',
        className = '',
        placeholder,
        defaultValue,
        autoComplete,
        isError,
        handleChange,
        variant = 'primary',
        isFocused , ...props
    },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            type={type}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className}`}
            placeholder={placeholder}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            ref={localRef}
            {...props}
        />
    );
});
