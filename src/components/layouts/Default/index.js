import Header from './Header';

function Default({ children }) {
	return (
		<div>
			<Header />
			<div>{children}</div>
		</div>
	);
}

export default Default;
