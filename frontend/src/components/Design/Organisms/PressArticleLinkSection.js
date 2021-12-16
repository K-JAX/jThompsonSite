// components
import SVGLetter from "../Atoms/SVGLetter";
import Button from "../Atoms/Button";

const PressArticleLinkSection = (props) => {
	let { title, link, alignment, image, ctaText } = props;

	return (
		<div
			className={`row position-relative py-5 ${
				alignment === "right" ? "flex-row" : "flex-row-reverse"
			}`}
			style={{ minHeight: "475px" }}
		>
			<div className="col-12 col-md-7 d-flex align-items-center">
				<img src={image?.node.sourceUrl} />
			</div>
			<div className="col-12 col-md-5 d-flex align-content-center flex-wrap">
				<h2 className="w-100">{title}</h2>
				<a href={link} target="_blank">
					<Button hover={alignment}>{ctaText}</Button>
				</a>
			</div>
			<div
				className="position-absolute w-100 h-100"
				style={{ zIndex: "-1" }}
			>
				<SVGLetter
					letter={title.slice(0, 1)}
					size={350}
					alignment={alignment}
				/>
			</div>
		</div>
	);
};
export default PressArticleLinkSection;
