const calculateDeckMargin = (cardsNumber: number): string => {
    if (cardsNumber > 6) {
        return `0 -24rem 0 0`
    }
    return `0 ${cardsNumber * -4}rem 0 0`
}

export default calculateDeckMargin