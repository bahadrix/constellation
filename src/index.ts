// Base
import * as PIXI from 'pixi.js'

export interface Configuration {
    sceneElement: Element,
    width: number, 
    height: number
}

export default class Constellation {

    
    private app: PIXI.Application

    constructor(private configuration: Configuration) { 

        console.log("Loaded config", this.configuration);

        this.app = new PIXI.Application({
            width: configuration.width,
            height: configuration.height,
            backgroundColor: 0x1099bb
        });
        
        configuration.sceneElement.appendChild(this.app.view);

        // for grids with fragment shader: https://codepen.io/ardenpm/pen/pVojYG 

    }

}

