//import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const styleH1 = {
	color: "red",
	fontFamily: "sans-serif",
	textAlign: "center"
};
 
const title = <h1 style={styleH1}>Título da Página</h1>;
const Rand = () => {
	let text = 'Número: ';
	var randomize = () => Math.floor(Math.random() * 10);
	return <span>{text}{randomize() % 2 === 0 ? 'par' : 'ímpar'}</span>
};

const App = () => {
	const frutas = [<li key="e1">Laranja</li>, <li key="e2">Goiaba</li>, <li key="e3">Abacate</li>];
	const carros = ['Ká', 'Gol', 'Polo'];
	return (
		<>
			{title}
			<p>Meu parágrafo gerado com <b>React</b>.</p>
			<Rand />
			<hr></hr>
			<ul>{frutas}</ul>
			<ul>{carros.map((carro => <li key={carro}>{carro}</li>))}</ul>
		</>
	);
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
