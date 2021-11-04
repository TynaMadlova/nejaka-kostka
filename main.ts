let mod = false
let hod = 1
let lock = true
basic.forever(function furt() {
    
    
    
    //  přepínání modu 6 a 10
    if (input.buttonIsPressed(Button.B)) {
        if (lock == true) {
            lock = false
            basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        } else {
            lock = true
            basic.showString("x")
        }
        
    }
    
    if (lock == false) {
        if (input.buttonIsPressed(Button.A)) {
            if (mod == true) {
                mod = false
                basic.showString("6s")
            } else {
                mod = true
                basic.showString("10s")
            }
            
        }
        
        if (input.isGesture(Gesture.Shake)) {
            if (mod == true) {
                hod = randint(1, 10)
            } else {
                hod = randint(1, 6)
            }
            
            if (hod == 1) {
                basic.showLeds(`
                    . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                `)
            } else if (hod == 2) {
                basic.showLeds(`
                    . . . . .
                                . # . . .
                                . . . . .
                                . . . # .
                                . . . . .
                `)
            } else if (hod == 3) {
                basic.showLeds(`
                    . . . . .
                                . # . . .
                                . . # . .
                                . . . # .
                                . . . . .
                `)
            } else if (hod == 4) {
                basic.showLeds(`
                    . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
                `)
            } else if (hod == 5) {
                basic.showLeds(`
                    . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                `)
            } else if (hod == 6) {
                basic.showLeds(`
                    . . . . .
                                . # . # .
                                . # . # .
                                . # . # .
                                . . . . .
                `)
            } else if (hod == 7) {
                basic.showLeds(`
                    . . . . .
                                . # . # .
                                . # # # .
                                . # . # .
                                . . . . .
                `)
            } else if (hod == 8) {
                basic.showLeds(`
                    . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
                `)
            } else if (hod == 9) {
                basic.showLeds(`
                    . . . . .
                                . # # # .
                                . # # # .
                                . # # # .
                                . . . . .
                `)
            } else if (hod == 10) {
                basic.showLeds(`
                    . . # . .
                                . # # # .
                                # . . . #
                                . # # # .
                                . . # . .
                `)
            }
            
            for (let i = 0; i < hod; i++) {
                music.playTone(Note.C, music.beat(1))
                music.rest(music.beat(4))
            }
        } else {
            
        }
        
    }
    
})
