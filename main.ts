let Temperatur_Real = 0
basic.forever(function () {
    Temperatur_Real = input.temperature()
    Temperatur_Real += -12.5
    if (Temperatur_Real <= 25) {
        basic.setLedColor(0x007fff)
        basic.showString("Temp" + input.temperature() + "° C")
    } else {
        basic.setLedColor(0xff0000)
        music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("Temp" + input.temperature() + "° C zu hoch! Lüfte mal wieder!")
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
})
