import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieTrailer({ trailer, index }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="showcase-trailer btn btn-red" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlay} className="icon icon-play" />
        Watch Trailer {index + 1}
      </div>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title>{trailer.name}</Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieTrailer;
