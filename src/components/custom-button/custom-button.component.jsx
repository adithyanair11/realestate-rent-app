import './custom-button.styles.css';

const BUTTON_TYPES_CLASSES = {
    favourites: 'fav'
}

const Button = ({children,buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}>
            {children}
        </button>
    );
}

export default Button;