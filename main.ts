basic.showString("Hola")
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}
basic.clearScreen()
basic.showString("Adios")
