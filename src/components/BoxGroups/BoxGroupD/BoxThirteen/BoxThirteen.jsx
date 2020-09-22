import * as React from 'react';
// import { useState, useEffect } from 'react'; // Full screen mode Modal Idea requires
import { Link } from 'react-router-dom';
import { Frame, Page } from 'framer';
import {
	ArrowLeftOutlined,
	QqOutlined,
	UserOutlined,
	SmileOutlined,
	RocketOutlined,
	GithubOutlined,
	ShoppingCartOutlined,
	StarOutlined,
	WifiOutlined,
	ThunderboltOutlined,
	SwapOutlined,
	PieChartOutlined,
	LinkedinOutlined,
	QuestionOutlined,
	FullscreenOutlined,
	ArrowRightOutlined,
} from '@ant-design/icons';
import './style/BoxThirteen.css';

export function BoxThirteen() {
	// Full screen mode Modal Idea in progress
	// const [isOpen, setisOpen] = useState(false);

	// useEffect(() => {
	// 	handleShowDialog();
	// }, []);

	// const handleShowDialog = () => {
	// 	this.setisOpen({ isOpen: !this.state.isOpen });
	// 	console.log('handleShowDialog');
	// };

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
				<Frame size={150} radius={30} background={'#000'}>
					<div className='iconContainer'>
						<div className='iconText'>Swipe</div>
						<div className='hrefContainer'>
							<ArrowLeftOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#111'}>
					<div className='iconContainer'>
						<div className='iconText'>Penguin</div>
						<a
							className='hrefContainer'
							href='https://images.unsplash.com/photo-1512505845917-07824a4c8dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'>
							<div className='hrefContainer'>
								<QqOutlined
									style={{
										color: '#fff',
										width: '25%',
										height: '25%',
									}}
								/>
							</div>
						</a>
					</div>
				</Frame>

				<Frame size={150} radius={30} background={'#222'}>
					<div className='iconContainer'>
						<div className='iconText'>New User</div>
						<Link to='/signup' className='hrefContainer'>
							<UserOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</Link>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#333'}>
					<div className='iconContainer'>
						<div className='iconText'>Smile</div>
						<a
							className='hrefContainer'
							href='https://images.unsplash.com/photo-1574304916324-9924d079f806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'>
							<div className='hrefContainer'>
								<SmileOutlined
									style={{
										color: '#fff',
										width: '25%',
										height: '25%',
									}}
								/>
							</div>
						</a>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#444'}>
					<div className='iconContainer'>
						<div className='iconText'>Fullscreen</div>
						<div className='hrefContainer'>
							<FullscreenOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#555'}>
					<div className='iconContainer'>
						<div className='iconText'>Rocket</div>
						<div className='hrefContainer'>
							<RocketOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#666'}>
					<div className='iconContainer'>
						<div className='iconText'>Cart</div>
						<div className='hrefContainer'>
							<ShoppingCartOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#777'}>
					<div className='iconContainer'>
						<div className='iconText'>Star</div>
						<div className='hrefContainer'>
							<StarOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#888'}>
					<div className='iconContainer'>
						<div className='iconText'>Wifi</div>
						<div className='hrefContainer'>
							<WifiOutlined
								style={{
									color: '#fff',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#999'}>
					<div className='iconContainer'>
						<div className='iconText'>Power</div>
						<div className='hrefContainer'>
							<Link to='/battery' className='hrefContainer'>
								<ThunderboltOutlined
									style={{
										color: '#fff',
										width: '25%',
										height: '25%',
									}}
								/>
							</Link>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#aaa'}>
					<div className='iconContainer'>
						<div className='iconText'>Swap</div>
						<div className='hrefContainer'>
							<SwapOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#bbb'}>
					<div className='iconContainer'>
						<div className='iconText'>Pie Chart</div>
						<div className='hrefContainer'>
							<PieChartOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#ccc'}>
					<div className='iconContainer'>
						<div className='iconText'>Questions</div>
						<div className='hrefContainer'>
							<QuestionOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#ddd'}>
					<div className='iconContainer'>
						<div className='iconText'>GitHub</div>
						<a
							className='hrefContainer'
							href='https://github.com/davesheinbein'>
							<GithubOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</a>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#eee'}>
					<div className='iconContainer'>
						<div className='iconText'>LinkedIn</div>
						<a
							className='hrefContainer'
							href='https://www.linkedin.com/in/david-sheinbein/'>
							<LinkedinOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</a>
					</div>
				</Frame>
				<Frame size={150} radius={30} background={'#fff'}>
					<div className='iconContainer'>
						<div className='iconText'>Swipe</div>
						<div className='hrefContainer'>
							<ArrowRightOutlined
								style={{
									color: '#000',
									width: '25%',
									height: '25%',
								}}
							/>
						</div>
					</div>
				</Frame>
			</Page>
		</div>
	);
}

export default BoxThirteen;
