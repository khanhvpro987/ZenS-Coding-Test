import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.png'
import avatar from '../../../../assets/images/avatar.png'

function Header() {
	return (
		<header className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" width={70} />
			</div>
			<div className={styles.profileWrapper}>
				<div className={styles.profile}>
					<p className={styles.font1}>Handicrafted by</p>
					<p>Jim HLS</p>
				</div>
				<div className={styles.avatar}>
					<img src={avatar} alt="avatar" width={65}/>
				</div>
			</div>
		</header>
	);
}

export default Header;
