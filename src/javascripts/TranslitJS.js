'use strict';

/**
 * Class TranslitJS
 * @package src/javascripts
 *
 * @author  <xMoveton@gmail.com> <Tg:@xMoveton>
 * @version 1.0.1
 */
class TranslitJS {

    constructor (text) {
        this.text = text;

        // talit to cyrillic
        this.latins = latins;
    }

    latin_to_cyrillic () {
        let cyrillic = '';

        for (let i = 0; i < this.text.length; i++) {
            cyrillic += this.latins[this.text[i]] || this.text[i];
        }

        return cyrillic;
    }
}