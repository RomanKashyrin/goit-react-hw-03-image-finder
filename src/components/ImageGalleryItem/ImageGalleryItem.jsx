import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    render() {
        return (
            <li className="ImageGalleryItem">
                <img className="ImageGalleryItem-image" src={this.props.smallImgURL} alt={this.props.id} />
            </li>
        );
    }
}

ImageGalleryItem.protoType = {
    smallImgURL: PropTypes.string,
    id: PropTypes.number,
}