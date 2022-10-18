import styles from './Home.module.scss';
import Data from '../../data/data.json';

function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.mainWrapper}>
				<div className={styles.banner}>
					<div className={styles.bannerContentWrapper}>
						<h2>A joke a day keeps the doctor away</h2>
						<h3>If you joke wrong way, your teeth have to pay. &#40;Serious&#41;</h3>
					</div>
				</div>
				<div className={styles.jokeContentWrapper}>
					<div className={styles.jokeContent}>
						{Data.map(post => {
							return <div key={post.id}>{post.content}</div>;
						})}
					</div>
					<div className={styles.buttonWrapper}>
						<div>
							<button className={styles.funnyButton} type="button">
								This is Funny!
							</button>
						</div>
						<div>
							<button className={styles.notFunnyButton} type="button">
								This is not funny.
							</button>
						</div>
					</div>
				</div>
			</main>
			<footer className={styles.footerWrapper}>
				<p className={styles.footerContent}>
					This website is created as part of Hlsolutions program. The materials contained on this website are
					provided for general information only and do not constitute any form of advice. HLS assumes no
					responsibility for the accurancy of any particular statement and accepts no liability for any loss
					or damage which may arise from reliance on the information contained on this site.
				</p>
				<p className={styles.copyright}>Copyright 2021 HLS</p>
			</footer>
		</div>
	);
}

export default Home;
