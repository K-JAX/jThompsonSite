import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const OverlayAnimDiv = (props) => {
	const [isAnimated, setAnimated] = useState(false);
	const { content, direction, status } = props;
	const el = useRef();
	const q = gsap.utils.selector(el);
	useEffect(() => {
		if (status === "entered") {
			restructure();
		} else if (status === "exiting") {
			animOutItem();
			animOutOverlay();
		}
	}, [status]);

	const restructure = () => {
		let tl = gsap.timeline();
		let el = ".overlay-anim-container *";
		tl.from(q(el), {
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
						anim_el.innerHTML = wrapped;
						anim_el.appendChild(overlay_el);
					} else {
						anim_el = q(el)[0];
						var wrapper = document.createElement("div");
						wrapper.className = "anim-item";
						anim_el.parentNode.insertBefore(wrapper, anim_el);
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
			{ x: 0, y: 0, opacity: 1, delay: 0.125, duration: 1, stagger: 0.25 }
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
				// duration: 0.125,
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
		if (direction === "down") {
			tl.from(q(el), {
				top: "100%",
				height: "0%",
				duration: 0.125,
			})
				.to(q(el), {
					top: "0%",
					height: "100%",
				})
				.to(q(el), {
					top: "-10%",
					height: "0%",
				});
		} else if (direction === "right") {
			tl.from(q(el), {
				left: "100%",
				width: "0%",
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

	return (
		<div className="overlay-anim-container" ref={el}>
			{content}
		</div>
	);
};
export default OverlayAnimDiv;

OverlayAnimDiv.defaultProps = {
	direction: "down",
	status: "entering",
};
