export default function getMessage(guess,random){
    const guessnum=Number(guess)
    if(guessnum<random) return "You guessed a smaller number"
    if (guessnum>random) return "You guessed a larger number"
    if (guessnum===random) return "Congratulations!! You have guessed the right number..."

}