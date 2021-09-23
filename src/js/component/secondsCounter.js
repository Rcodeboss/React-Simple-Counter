import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import PropType from "prop-types";

export const SecondsCounter = ({ seconds }) => {
	const digits = seconds
		.toString()
		.padStart(6, "0")
		.split("");
	return (
		<div className="container d-flex align-items-center bg-dark text-white">
			<div>
				<AiOutlineClockCircle size={150} />
			</div>
			<div className="textsize">
				{digits.map(num => {
					return num;
				})}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropType.number
};
