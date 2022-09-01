const root = ReactDOM.createRoot(document.getElementById('root'));

function App () {
	return (
	<div>
		<h1>Meu olá mundo com React</h1>
		<p>Haja detalhes.</p>
	</div>
	);
};

root.render(
  <React.StrictMode>
	<App />
  </React.StrictMode>
);
