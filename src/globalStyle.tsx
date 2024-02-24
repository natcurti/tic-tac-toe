<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Outfit:wght@500..700&display=swap');
</style>;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
	--dark-gray: #1A2A33;
	--medium-gray: #1F3641;
	--off-white: #A8BFC9;
	--white: #DBE8ED;
	--yellow: #F2B137;
	--light-yellow: #FFC860;
	--blue: #31C3BD;
	--light-blue: #65E9E4;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, img, ul, li, fieldset, form, label, legend,
article, aside, details, figure, figcaption, footer, header, 
menu, nav, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: "Outfit", sans-serif;
	background-color: var(--dark-gray);
	color: var(--off-white);
}


`;

export default GlobalStyle;
