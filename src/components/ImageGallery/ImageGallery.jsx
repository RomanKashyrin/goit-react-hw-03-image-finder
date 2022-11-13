import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        bigPic: null,
    };

    handleModal = (e) => {
        let picture = this.props.images.filter(obj => {
            return obj.id === parseInt(e.target.alt);
        });
        this.setState({ bigPic: picture[0].largeImageURL });
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    render() {
        const { showModal, bigPic } = this.state;
        return (
            <>
                <ul className="ImageGallery"  onClick={this.handleModal}>
                    {this.props.images.map(img => {
                        return (
                            <ImageGalleryItem
                               
                                key={nanoid()}
                                smallImgURL={img.webformatURL}
                                id={img.id}
                            />
                        );
                    })}
                </ul>
                {showModal && bigPic && (
                    <Modal onClose={this.toggleModal} pic={bigPic} />
                )}
            </>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
};