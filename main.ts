enum Gadget {
    //% block="gun"
    Gun,
    //% block="helmet"
    Helmet

}

namespace lasertag {

    //% block: "the gun sends a shot"
    //% block: "Shot"
    //% group='Gun'
    export function send_shot() {
        

    }

    //% block: "the helmet receives a shot"
    //%block:"Receive shot"
    //% group='Helmet'
    export function receive_shot() {


    }

    //block:="select the number of lives of the player"
    //% block="lives $lives"
    //%group='Helmet'
    export function set_lives(lives: number) {

    }

    //% block: "the player loses a life"
    //%block="Lose life"
    //% group='Helmet'
    export function lose_life() {


    }


    //% block="When a shot is received"
    //%group="Helmet"
    export function onEvent(handler: () => void) {
        handler();
    }

    //% block: "select the type of gadget"
    //%block="Select gadget"
    //% gadget.fieldEditor="gridpicker"
    //% gadget.fieldOptions.width=220
    //% gadget.fieldOptions.columns=1
    export function select_gadget(gadget:Gadget) {


    }

}
