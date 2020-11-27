export const SVGContainer = ({ children, width, height, x, y }) => {
	console.log('children', { children });
	return (
		<svg width={width} height={height}>
			<g>
				{/* transform={`translate(${x},${y})`} */}
				{children}
			</g>
		</svg>
	);
};
