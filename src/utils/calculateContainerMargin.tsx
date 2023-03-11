const calculateContainerMargin = (cardsNumber: number): string => {
    if (cardsNumber > 6) {
        return `0 24rem 0 0`
    }
    return `0 ${cardsNumber * 2.1}rem 0 0`
}

export default calculateContainerMargin