const { isAxiosError } = require("axios");

/**
 * Terms, standard accepted for the Quizzler
 */
class Term {

    constructor(term, example = "", description = "", prompt = "Use the term", references = "", category = "", attachment="", priority = 5) {
        this.term = term;
        this.example = example;
        this.description = description;
        this.references = references;
        this.attachment = attachment;
        this.category = category;
        this.prompt = prompt;
        this.priority = priority;
        this.slug = this.slugify(this.term);
        this.formula_name = this.slug;
    }

    /**
     *  Slugify the term 
     */
    slugify = (term) => {
        return term.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-')
    }

    get asJson() {
        return {
            term: this.term, example: this.example, description: this.description, references: this.references,
            category: this.category, prompt: this.prompt,
            formula_name: this.slug, attachment: this.attachment
        };
    }

};


class Terminology extends Term {
    constructor(term, description = "", example = "", auto_imags = false){
        super(term, example, description, "Use this on an example")
    }
}


/**
 * Follows Composition Pattern, it should be able to store other Term Storages, turn them on and off
 */
class TermStorage {
    
    /**
     * Initialization, by default TermStorage is acitve.
     * @param {List[JsonText]} terms Terms to be added to this deck
     * @param {string} deck_name The deckname, optional if is the parent deckname
     * @param {List[TermStorage]} decks The decks required for the Storages
     */
    constructor(terms = [], deck_name="",{ decks=[], is_active=true} = {}) {
        this.terms = terms;
        this.deck_name = deck_name;
        this.is_active = is_active;
        this.decks = decks;
        this.priority = 5; //By default
    }

    /**
     * 
     * @param {TermStorage} deck the deck to append to the storage, by default is active usually
     */
    addDeck(deck){
        this.decks.push(deck);
    }
    
    /**
     * Follows the design of array.push, easier to memorize
     * @param {Term} term Pushes this term into the terms of the storage
     */
    push(term){
        this.terms.push(term);
    }

    /**
     * Appends all decks that are active + its current cards.
     * @returns {List<Json>} Gets the terminologies as a List<Json>
     */
    get jsonTerms() {
        const res = [];
        // Add own cards
        for (const term of this.terms) {
            res.push(term)
        }

        //Add cards of the decks that are active
        for(const deck of this.decks){
            if(deck.is_active){
                res.push(...deck.jsonTerms);
            }
        }

        return res;
    }

    /**
     * @returns {List<Term>} Returns as a List of Terms
     */
    get listTerms(){
        return this.jsonTerms.map(
            obj => new Term(
                obj?.term ?? "", obj?.example ?? "", obj?.description ?? "", obj?.prompt ?? "", obj?.references ?? "", obj?.category ?? "", obj?.attachment
                )
        );
    }

    /**
     * 
     * @param is_active_settings {deck_name,is_active} settings Takes in the settings in key:true/false format to turn on or off of the decks inside.
     */
    changeIsActiveSettingsFromDecks(is_active_settings)
    {
        for (const deck_name of Object.keys(is_active_settings)){
            this.decks[deck_name].is_active = is_active_settings[deck_name];
        }
    }

    /**
     * Simply explains the insides as well as the name of the deck
     */
    explain(){
        console.log("termGenerator content:");
        console.log(`From deck: ${this.deck_name} contains decks: ${this.decks.length}`);
        console.log(this.jsonTerms);
    }



};

module.exports = {Term, Terminology, TermStorage};