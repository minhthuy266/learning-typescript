const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function devide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }
  return message
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

// Destructuring

const logWeather = ({date, weather}: {date: Date; weather: string}) => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
