import React, { Component } from 'react';
import { curveBasis } from '@vx/curve';
import { AreaClosed } from '@vx/shape';
import { scaleTime, scaleLinear } from '@vx/scale';
import { ParentSize } from '@vx/responsive';
import { GradientDarkgreenGreen as Gradient } from '@vx/gradient';
import { genDateValue } from '@vx/mock-data';
import { extent, max } from 'd3-array';
import { Spring } from 'react-spring/renderprops';
import './style/BoxTwelve.css';

const data = genDateValue(20);
const x = (d) => d.date;
const y = (d) => d.value;

// console.log(data, '<<<  data');
// console.log(x, '<<<  x');
// console.log(y, '<<<  y');

class BoxTwelve extends Component {
	state = { toggle: true };
	toggle = () =>
		this.setState((state) => ({ toggle: !state.toggle }));
	// ,
	// console.log(this.toggle, '<<<  this.toggle') // This disable the toggle but shows when it's being hit
	render() {
		return (
			<ParentSize id='parentContainer'>
				{({ width, height }) => {
					const xScale = scaleTime({
						range: [0, width],
						domain: extent(data, x),
					});
					const yMax = max(data, y);
					const yScale = scaleLinear({
						range: [height / 2, 0],
						domain: [0, yMax],
						nice: true,
					});
					const interpolate = data.map(
						(d) => Math.random() * yMax
					);

					// console.log(
					// 	xScale,
					// 	'<<<  xScale this is the ones inside'
					// );
					// console.log(
					// 	yMax,
					// 	'<<<  yMax this is the ones inside'
					// );
					// console.log(
					// 	yScale,
					// 	'<<<  yScale this is the ones inside'
					// );
					// console.log(
					// 	interpolate,
					// 	'<<<  interpolate this is the ones inside'
					// );

					return (
						<div
							style={{
								width: '100%',
								height: '100%',
								cursor: 'pointer',
							}}
							onClick={this.toggle}
							id='boxTwelveContainer'>
							<div id='boxTwelveHeading'>
								Click to
								<br />
								Randomize the
								<br />
								Graph
							</div>
							<svg
								style={{
									position: 'absolute',
									bottom: 0,
								}}
								width={width}
								height={height / 2}
								id='boxTwelveSVG'>
								<Gradient id='PinkRed' />
								<g>
									<Spring to={{ interpolate }}>
										{(props) => (
											<AreaClosed
												id='boxTwelveArea'
												data={data.map((d, i) => ({
													...d,
													value: interpolate[i],
												}))}
												yScale={yScale}
												x={(d) => xScale(x(d))}
												y={(d) => yScale(y(d))}
												strokeWidth={2}
												stroke={'url(#PinkRed)'}
												fill={'url(#PinkRed)'}
												curve={curveBasis}
											/>
										)}
									</Spring>
								</g>
							</svg>
						</div>
					);
				}}
			</ParentSize>
		);
	}
}

export default BoxTwelve;
