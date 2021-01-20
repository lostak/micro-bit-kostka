led.setBrightness(255)
basic.showString("KOSTKA")
let hod = 0
basic.pause(1000)
while (true) {
    if (hod == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
        music.playMelody("C D E A - E A A ", 480)
    }
    if (hod == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playMelody("C - - - - - - - ", 320)
    }
    if (hod == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        music.playMelody("C D - - - - - - ", 320)
    }
    if (hod == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        music.playMelody("C D E - - - - - ", 320)
    }
    if (hod == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        music.playMelody("C D E F - - - - ", 320)
    }
    if (hod == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        music.playMelody("C D E F G - - - ", 320)
    }
    if (hod == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        music.playMelody("C D E F G A - - ", 320)
    }
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
    hod = randint(0, 5)
    hod += 1
    while (input.buttonIsPressed(Button.A)) {
    	
    }
}
