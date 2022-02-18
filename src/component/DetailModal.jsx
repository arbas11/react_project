import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';
const Detail = ({ data, setOpenModal }) => {
    return (
        <Card className="modal-card-detail">
            <div className="modal-back">
                <CardBody >
                    <CardTitle className="detail-name">{data.name}</CardTitle>
                </CardBody>
                <img className="detail-img" width="100%" src={data.pictureURL} alt="Card" />
                <CardBody>
                    <CardSubtitle className="detail-category">{data.category}</CardSubtitle>
                    <CardText className="detail-description">{data.description}</CardText>
                    <CardText className="detail-price">Rp {data.price},-</CardText>
                    <div className="modal-detail-btn">
                        <Button className="btn-submit" onClick={() => setOpenModal(false)} >Add to cart</Button>
                        <Button className="btn-action-cancel" onClick={() => setOpenModal(false)}> Cancel </Button>
                    </div>
                </CardBody>
            </ div>
        </Card >)
}

export default Detail;