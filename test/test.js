let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        it("Should return false for a non-palindrome", function () {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });
        it("Should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        })
        it("Should return true for a mixed-case palindrome", function() {
            let mixedPalindrome = new Phrase("RaceCar");
            assert(mixedPalindrome.palindrome());
        });
        it("Should return true for a palindrome with punctuation", function () {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });
    });
    describe("#letters", function() {            
        it("Should return only letters", function () {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        });
        it("Should return an empty string on nomatch", function () {
            let punctuatedPalindrome = new Phrase("1234 5679 ,.?!");
            assert.strictEqual(punctuatedPalindrome.letters(), "");
        });
    });
});