import PropTypes from "prop-types";

PrimaryButton.propsTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children : PropTypes.node,
};


export default function PrimaryButton({
    type = 'submit',
    className = '',
    variant = "primary",
    children,
    processing,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center ${processing && "opacity-30"} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
