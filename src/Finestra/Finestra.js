import Frame from "Finestra/Frame"
import Utils from "Finestra/Utils"

import finestra_css from "scss/finestra.scss"

Utils.injectCSS( "finestra", finestra_css )

class Finestra {
	static Utils = Utils;
	static defaultFrameParams = {
		position: {
			x: 0,
			y: 0
		},
		size: {
			x: 300,
			y: 300
		}
	};

	constructor () {
		this.state = {}

		this.frameParams = {

		}

		this.content = {}
	}

	create ( params ) {
		params = { ...Finestra.defaultFrameParams, ...params }
		params.id = params.id || Utils.generateRandomString( "frame", 16 )
		params.name = params.name || params.id

		params.remove = this.remove.bind( this, params.id )

		this.content[ params.id ] = new Frame( params );
		return this.content[ params.id ]
	}

	remove ( id ) {
		let frame = this.content[id];
		delete this.content[id];
		frame.close();
	}

	setFocus ( id ) {
		for (let k in this.content) {
			if (k == id) {
				this.content[k].setZIndex(99999);
			} else {
				this.content[k].setZIndex(1);
			}
		}
	}

	makeStatic (key) {
		for ( let k in this.content ) {
			this.content[k].makeStatic( key );
		}
	}
}

export default Finestra;

