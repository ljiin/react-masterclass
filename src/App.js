import styled from "styled-components";

const Father = styled.div`
	display:flex;
`;

const BoxOne = styled.div`
	width:100px;
	height:100px;
	background-color: teal;
`;

const BoxTwo = styled.div`
	width:100px;
	height:100px;
	background-color: tomato;
`;

function App() {
  return (
	<Father>
		<BoxOne />
		<BoxTwo />
	</Father>
  )
}

export default App;
