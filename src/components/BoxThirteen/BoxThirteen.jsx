import * as React from 'react';
import { Frame, Page } from 'framer';
import {
	QqOutlined,
	LockOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';
import './style/BoxThirteen.css';

export function BoxThirteen() {
	return (
		<div className='boxThirteenContainer'>
			<Page width={150} height={150} radius={30}>
				<Frame size={150} radius={30} background={'#111'}>
					<QqOutlined />
				</Frame>
				<Frame size={150} radius={30} background={'#333'}>
					<LockOutlined />
				</Frame>
				<Frame size={150} radius={30} background={'#fff'}>
					<MenuFoldOutlined />
				</Frame>
			</Page>
		</div>
	);
}

export default BoxThirteen;
