export type HomeNavigationStackParams = {
    HomeScreen: undefined,
    AddScreen: undefined,
    CalculationScreen: {
        loops: string,
        minimumNumber: string,
        maximumNumber: string,
        runLoop: boolean,
    }
    SubstractionScreen: undefined,
    SubstractionCalculationScreen: Calculation,
}

interface Calculation {
    loops: string,
    minimumNumber: string,
    maximumNumber: string,
}
