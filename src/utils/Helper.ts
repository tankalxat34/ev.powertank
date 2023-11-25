// здесь находятся функции, которые могут быть полезными в приложении

export function toRusTime(time: number, options?: Intl.DateTimeFormatOptions | undefined): string {
    return new Date(time).toLocaleDateString('ru-ru', options || { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
}