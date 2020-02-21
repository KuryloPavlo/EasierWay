
export const BuyTicketActions = {
    INCREASE_AMOUNT: 'INCREASE_AMOUNT',
    DECREASE_AMOUNT: 'DECREASE_AMOUNT',
}

export const increaseAmount = (field: string) => ({
    type: BuyTicketActions.INCREASE_AMOUNT,
    payload: field
})

export const decreaseAmount = (field: string) => ({
    type: BuyTicketActions.DECREASE_AMOUNT,
    payload: field
})