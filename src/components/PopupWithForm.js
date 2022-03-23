import React from 'react';

class PopupWithForm extends React.Component {

    render() {
        return (
            <section className={`popup popup_type_${this.props.name}`}>
                <div className="popup__container">
                    <button className="popup__close-icon" type="button"></button>
                    <form className="popup-form" name={`popup_form_${this.props.name}`} novalidate>
                        <h2 className="popup-form__heading">{this.props.title}</h2>
                        {this.props.children}
                    </form>
                </div>
            </section>
        );
    }
}

export default PopupWithForm;