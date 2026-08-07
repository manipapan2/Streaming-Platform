export function movieDurationConvertor(minutes: number) {
    let clonedMinutes = minutes;
    let hours: number | null = null
    let mins: number;
    let result: string = ''

    if(minutes > 60) {
        hours = Math.floor(minutes / 60)
        clonedMinutes -= hours * 60

        mins = clonedMinutes
    } else {
        mins = clonedMinutes
    }

    if(hours) {
        result += `${hours}h `
    }

    result += `${mins}m`

    return result 
}