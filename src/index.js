const colorMindAPI = 'http://colormind.io/api/';
const paletteData  = {
    model : 'ui',
}

const colorMindAPICall = new XMLHttpRequest();

colorMindAPICall.onreadystatechange = function() {
    if ( 4 === colorMindAPICall.readyState && 200 === colorMindAPICall.status ) {
        const palette = JSON.parse( colorMindAPICall.responseText ).result;
        console.log( palette );
	}
}

colorMindAPICall.open( 'POST', colorMindAPI, true );
colorMindAPICall.send( JSON.stringify( paletteData ) );