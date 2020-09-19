import React, { Component } from 'react';
import { curveBasis } from '@vx/curve';
import { AreaClosed } from '@vx/shape';
import { scaleTime, scaleLinear } from '@vx/scale';
import { ParentSize } from '@vx/responsive';
import { GradientPurpleTeal as Gradient } from '@vx/gradient';
import { extent, max } from 'd3-array';
import { Spring } from 'react-spring/renderprops';
import './style/BoxTwelve.css';

const data = [
	{
		date: new Date('2018-04-08T12:33:40.624Z'),
		value: 2110,
	},
	{
		date: new Date('2018-04-08T11:33:40.624Z'),
		value: 1156,
	},
	{
		date: new Date('2018-04-08T10:33:40.624Z'),
		value: 715,
	},
	{
		date: new Date('2018-04-08T09:33:40.624Z'),
		value: 2797,
	},
	{
		date: new Date('2018-04-08T08:33:40.624Z'),
		value: 2361,
	},
	{
		date: new Date('2018-04-08T07:33:40.624Z'),
		value: 731,
	},
	{
		date: new Date('2018-04-08T06:33:40.624Z'),
		value: 908,
	},
	{
		date: new Date('2018-04-08T05:33:40.624Z'),
		value: 691,
	},
	{
		date: new Date('2018-04-08T04:33:40.624Z'),
		value: 1408,
	},
	{
		date: new Date('2018-04-08T03:33:40.624Z'),
		value: 1748,
	},
	{
		date: new Date('2018-04-08T02:33:40.624Z'),
		value: 2834,
	},
	{
		date: new Date('2018-04-08T01:33:40.624Z'),
		value: 310,
	},
	{
		date: new Date('2018-04-08T00:33:40.624Z'),
		value: 2877,
	},
	{
		date: new Date('2018-04-07T23:33:40.624Z'),
		value: 2792,
	},
	{
		date: new Date('2018-04-07T22:33:40.624Z'),
		value: 250,
	},
	{
		date: new Date('2018-04-07T21:33:40.624Z'),
		value: 1602,
	},
	{
		date: new Date('2018-04-07T20:33:40.624Z'),
		value: 1871,
	},
	{
		date: new Date('2018-04-07T19:33:40.624Z'),
		value: 250,
	},
	{
		date: new Date('2018-04-07T18:33:40.624Z'),
		value: 2897,
	},
	{
		date: new Date('2018-04-07T17:33:40.624Z'),
		value: 1902,
	},
];

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
			<ParentSize className='boxTwelveParentContainer'>
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
					// console.log(xScale, '<<<  xScale');
					// console.log(yMax, '<<<  yMax');
					// console.log(yScale, '<<<  yScale');
					// console.log(interpolate, '<<<  interpolate');

					return (
						<div
							className='boxTwelveContainer'
							onClick={this.toggle}>
							<svg
								width={width}
								height={height / 2}
								className='boxTwelveSVG'>
								<Gradient id='gradient' />
								<g className='boxTwelvePathGroup'>
									<Spring to={{ interpolate }}>
										{(props) => (
											<AreaClosed
												data={data.map((d, i) => ({
													...d,
													value: props.interpolate[i],
												}))}
												xScale={xScale}
												yScale={yScale}
												x={x}
												y={y}
												strokeWidth={2}
												stroke={'url(#gradient)'}
												fill={'url(#gradient)'}
												curve={curveBasis}
												className='boxTwelvePath'
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
