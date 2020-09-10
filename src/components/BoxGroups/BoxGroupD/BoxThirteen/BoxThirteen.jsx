import * as React from 'react';
import { Frame, Page } from 'framer';
import {
	QqOutlined,
	UserOutlined,
	SmileOutlined,
	SkinOutlined,
	RocketOutlined,
	ShoppingCartOutlined,
	StarOutlined,
	WifiOutlined,
	ThunderboltOutlined,
} from '@ant-design/icons';
import './style/BoxThirteen.css';

export function BoxThirteen() {
	return (
		<div className='boxThirteenContainer'>
			<Page
				currentPage={0}
				width={350}
				height={350}
				radius={30}
				alignment='center'
				defaultEffect={'pile'}
				direction='horizontal'
				wheelEnabled={true}
				animateCurrentPageUpdate={true}
				momentum
				onChangePage={(current, previous) => {
					console.log(
						current,
						'<<< current',
						previous,
						'<<< previous'
					);
				}}>
				<Frame size={150} radius={30} background={'#111'}>
					<div className='iconContainer'>
						<div className='iconText'>Penguin</div>
						<QqOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#222'}>
					<div className='iconContainer'>
						<div className='iconText'>User</div>
						<UserOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#333'}>
					<div className='iconContainer'>
						<div className='iconText'>Smile</div>
						<SmileOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#444'}>
					<div className='iconContainer'>
						<div className='iconText'>Shirt</div>
						<SkinOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#555'}>
					<div className='iconContainer'>
						<div className='iconText'>Rocket</div>
						<RocketOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#666'}>
					<div className='iconContainer'>
						<div className='iconText'>Cart</div>
						<ShoppingCartOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#777'}>
					<div className='iconContainer'>
						<div className='iconText'>Star</div>
						<StarOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#888'}>
					<div className='iconContainer'>
						<div className='iconText'>Wifi</div>
						<WifiOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#999'}>
					<div className='iconContainer'>
						<div className='iconText'>Lightning</div>
						<ThunderboltOutlined
							style={{
								fill: 'blue',
								color: '#fff',
								width: '25%',
								height: '25%',
							}}
						/>
					</div>
				</Frame>
			</Page>
		</div>
	);
}

export default BoxThirteen;
