// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import cx from "classnames";

// Instruments
import Styles from "./styles.m.css";

import { store } from "../../init/store";
import { showNextPhoto, showSelectedPhoto, showPreviousPhoto } from "../../bus/gallery/actions";

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate();
    };

    _showPreviousPhoto = () => {
        store.dispatch(showPreviousPhoto());
        this.forceUpdate();
    };

    _showSelectedPhoto = (ev) => {
        store.dispatch(showSelectedPhoto(ev.target.value));
        this.forceUpdate();
    };

    render () {
        // const url = photo1;
        const {
            gallery: { photos, selectedPhotoIndex },
        } = store.getState();
        const photo = photos.find((_, index) => index === selectedPhotoIndex);

        const buttonActiveStyle0 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 0,
        });
        const buttonActiveStyle1 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 1,
        });
        const buttonActiveStyle2 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 2,
        });
        const buttonActiveStyle3 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 3,
        });

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button onClick = { this._showPreviousPhoto }>←</button>
                    <button
                        className = { buttonActiveStyle0 }
                        value = '0'
                        onClick = { this._showSelectedPhoto }>
                        1
                    </button>
                    <button
                        className = { buttonActiveStyle1 }
                        value = '1'
                        onClick = { this._showSelectedPhoto }>
                        2
                    </button>
                    <button
                        className = { buttonActiveStyle2 }
                        value = '2'
                        onClick = { this._showSelectedPhoto }>
                        3
                    </button>
                    <button
                        className = { buttonActiveStyle3 }
                        value = '3'
                        onClick = { this._showSelectedPhoto }>
                        4
                    </button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}
