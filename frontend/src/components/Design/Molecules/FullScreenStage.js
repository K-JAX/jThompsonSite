import { Modal } from "react-bootstrap";

const FullScreenStage = (props) => {
	const { show, fullscreen, onHide } = props;
	return (
		<Modal show={show} fullscreen={fullscreen} onHide={onHide}>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body className="px-0 d-flex justify-content-center align-items-center">
				{props.children}
			</Modal.Body>
		</Modal>
	);
};

export default FullScreenStage;
