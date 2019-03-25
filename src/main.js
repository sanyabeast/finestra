import Finestra from "Finestra/Finestra"
let finestra = window.finestra = new Finestra( {
    minWidth: 300,
    minHeight: 300
} )

Finestra.Utils.loop( 0, 4, 1, true, ( index )=>{
	let frame = finestra.create({
        position: {
            x: ( index % 2 ) * 320 + 20,
            y: Math.floor( index / 2 ) * 320 + 20
        },
        onCreate: ( xframe )=>{
        	xframe.setBodyContent( Finestra.Utils.parseHTML(
        		`
        			<div style="color:#000">${xframe.id}</div>
        		`
        	) )
        },
        onClose: ( frame )=>{
            console.log( frame )
        }
    });

	frame.addCustomButton( "alarm_on", {
		onClick: ()=>{
			alert( "Hello!" )
		}
	}, "test" )
} )


