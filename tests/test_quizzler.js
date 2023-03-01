/**
 * Testing the Quizzler such as adding different 
 */

const utils = require('../utils/utils');
const { TermStorage } = require('../utils/structures');


describe("Quizzler Terminology Tests", () => {

    function setupQuizer() {
        // TDODO
        const terms = [
            {
                term: "Sample Term", prompt: "Do X", category: "category",
                description: "some Descirpiton", attachment: "./img/2023-02-07-10-29-38.png"
            }
        ]

        let decks = new TermStorage(terms, "Academic Terms");
        let rootDeck = new TermStorage([], "Master Deck");
        rootDeck.addDeck(decks);
        const mQuizer = new utils.FlashQuizzer([], [], rootDeck.listTerms);;
        return mQuizer

    }

    
    function setupDigitalImageQuizer() {
        // TDODO
        const terms = [
            {
                term: "Sample Term", prompt: "Do X", category: "category",
                description: "some Descirpiton", attachment: "https://wngnelson.com/assets/img_src/oct/images/4804295.jpg"
            }
        ]

        let decks = new TermStorage(terms, "Academic Terms");
        let rootDeck = new TermStorage([], "Master Deck");
        rootDeck.addDeck(decks);
        const mQuizer = new utils.FlashQuizzer([], [], rootDeck.listTerms);;
        console.log("rootDeck", rootDeck.listTerms);
        return mQuizer

    }

    it("Check that images are added properly", () => {
        /**
         * There is no actual way other than running a test with an image example
         */
        const mQuizer = setupDigitalImageQuizer();
        mQuizer.pick_and_ask_term_question();

    });
});



