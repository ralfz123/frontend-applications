export const SVGContainer = ({ children, width, height}) => {
	console.log('children', { children });
	return (
		<svg width={width} height={height}>
			<g>
				{children}
			</g>
		</svg>
	);
};