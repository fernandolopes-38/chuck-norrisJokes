import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
		--button-submit: #007dca;
		--button: #70ffff;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		font: 400 16px;
		background-image: var(--background);
		height: 100vh;
	}
	body, input, textarea, button {
		font-family: 'Chango', cursive;
	}
	button {
		cursor: pointer;
		border: 0;
	}

	@media(max-width: 1088px){
		html {
			font-size: 93.75%;
		}
	}

	@media(max-width: 720px){
		html {
			font-size: 87.5%;
		}
	}
`;
