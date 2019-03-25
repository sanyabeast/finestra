class Utils {
	static injectCSS ( id, cssString ) {
		if ( !document.querySelector( `#telechart-css-${id}` ) ) {
			document.querySelector( "head" ).appendChild( this.parseHTML( `<style id="telechart-css-${id}" type="text/css">${cssString}</style>` ) )
		} else {
			document.querySelector( `#telechart-css-${id}` ).textContent = cssString
		}
	}

	static loopCollection ( collection, iteratee ) {
		if (!collection) return
			
		if ( Array.isArray( collection ) || typeof collection.length == "number" ) {
			for ( let a = 0, l = collection.length; a < l; a++ ) {
				if ( iteratee( collection[a], a, collection ) ) break
			}
		} else {
			for ( let k in collection ) {
				if ( iteratee( collection[k], k, collection ) ) break
			}
		}
	}

	static loop ( from, to, increment, looseEquation, callback ) {
		if ( looseEquation ) {
			for ( var a = from, iteration = 0; a < to; a+=increment ) {
				if ( callback( a, iteration ) ) break
					iteration++
			}
		} else {
			for ( var a = from, iteration = 0; a <= to; a+=increment ) {
				if ( callback( a, iteration ) ) break
					iteration++
			}
		}	
	}

	static generateRandomString ( prefix, length ) {
		let string = "";

		while ( string.length < length ) {
			string = string + ( Math.random().toString( 32 ).substring( 3, 12 ) );
		}

		string = string.substring(0, length);
		return `${prefix}-${string}`
	}

	static parseHTML ( htmlString ) {
		let temp = document.createElement( "div" )
		temp.innerHTML = htmlString
		return temp.children[0]
	}
}

export default Utils