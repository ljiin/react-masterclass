import styled from "styled-components";

const Father = styled.div`
	display:flex;
`;

const Box = styled.div`
	width:100px;
	height:100px;
	background-color: ${(props => props.bgColor)};
`;

const Btn = styled.button`
	background-color:tomato;
	border:none;
	color:#fff;
`

const Input = styled.input.attrs({required: true, minLength:10})`
	background-color:tomato;
`

function App() {
  return (
	<Father as="h1">
		<Btn>LOGIN</Btn>
		<Btn as="a" href="/">LOGIN</Btn>
		<Input />
		<Input />
		<Input />
		<Input />
	</Father>
  )
}

export default App;
