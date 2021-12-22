import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const OverlayAnimDiv = (props) => {
	const [isAnimated, setAnimated] = useState(false);
	// const [animState, setAnimState] = useState("");
	const { content, direction, status } = props;
	const el = useRef();
	const q = gsap.utils.selector(el);
	useEffect(() => {
		if (status === "entered") {
			restructure();
		} else if (status === "exiting") {
			animOutItem();
			// animOutOverlay();
		}
	}, [status]);

	const restructure = async () => {
		let tl = gsap.timeline();
		let el = ".overlay-anim-container *";
		await tl.from(q(el), {
			onStart: () => {
				if (q(".overlay-anim-container .anim-item").length === 0) {
					var anim_el;
					var overlay_el = document.createElement("div");
					overlay_el.className = "anim-overlay";

					// find out if node has inner text (ie. distinguish between <img> and <p>)
					if (q(el)[0].innerHTML !== "") {
						anim_el = q(el)[0];
						var wrapped =
							"<div class='anim-item' >" +
							anim_el.innerHTML +
							"</div>";
						anim_el.style.opacity = "1";

						anim_el.innerHTML = wrapped;

						anim_el.appendChild(overlay_el);
					} else {
						anim_el = q(el)[0];
						var wrapper = document.createElement("div");
						wrapper.className = "anim-item";
						anim_el.parentNode.insertBefore(wrapper, anim_el);
						anim_el.style.opacity = "1";

						wrapper.appendChild(anim_el);
						wrapper.appendChild(overlay_el);
					}
				}
				animOverlay();
				animItem();
				setAnimated(true);
			},
		});
	};

	const animItem = () => {
		let el = ".overlay-anim-container .anim-item";
		gsap.fromTo(
			q(el),
			{
				x: direction === "right" ? 10 : 0,
				y: direction === "down" ? 10 : 0,
				opacity: 0,
			},
			{ x: 0, y: 0, opacity: 1, delay: 0.5, duration: 1, stagger: 0.25 }
		);
	};

	const animOutItem = () => {
		let el = ".overlay-anim-container .anim-item";
		gsap.fromTo(
			q(el),
			{ x: 0, y: 0, opacity: 1 },
			{
				x: direction === "right" ? 10 : 0,
				y: direction === "down" ? 10 : 0,
				opacity: 0,
				// duration: 0.075,
			}
		);
	};

	const animOverlay = () => {
		let tl = gsap.timeline();
		let el = ".overlay-anim-container .anim-overlay";
		if (direction === "down") {
			tl.from(q(el), {
				top: "-50%",
				height: "10%",
			}).to(q(el), {
				top: "100%",
				height: "0%",
				stagger: 0.25,
			});
		} else if (direction === "right") {
			tl.from(q(el), {
				left: "-50%",
				width: "10%",
			}).to(q(el), {
				left: "100%",
				width: "0%",
			});
		}
	};

	const animOutOverlay = () => {
		let tl = gsap.timeline();
		let el = ".overlay-anim-container .anim-overlay";
		// tl.duration(1);
		if (direction === "down") {
			tl.from(q(el), {
				top: "100%",
				height: "0%",
				duration: 0.2,
			})
				.to(q(el), {
					top: "0%",
					height: "100%",
					duration: 0.2,
				})
				.to(q(el), {
					top: "-10%",
					height: "0%",
					duration: 0.2,
				});
		} else if (direction === "right") {
			tl.from(q(el), {
				left: "100%",
				width: "0%",
				duration: 0.02,
			})
				.to(q(el), {
					left: "0%",
					width: "100%",
				})
				.to(q(el), {
					left: "-10%",
					width: "0%",
				});
		}
	};

	if (status === "entering") return null;
	if (!content) return null;

	return (
		<OverlayAnimContainer
			className={`overlay-anim-container ${isAnimated && "finished"}`}
			ref={el}
		>
			{content}
		</OverlayAnimContainer>
	);
};
export default OverlayAnimDiv;

OverlayAnimDiv.defaultProps = {
	direction: "down",
	status: "entering",
};

const OverlayAnimContainer = styled.div`
	*:not(div) {
		opacity: 0;
	}
	&.finished {
		*:not(div) {
			opacity: 1;
		}
	}
`;
