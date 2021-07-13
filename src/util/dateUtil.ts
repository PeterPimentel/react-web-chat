function addLeadingZero(value: number): string {
    if (value <= 9) {
        return `0${value}`;
    }
    return value.toString();
}

// YYYY-MONTH-DAY
export function dateToString(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`;
}
