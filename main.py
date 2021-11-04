mod = False
hod = 1
lock = True
def furt():
    global hod
    global mod
    global lock
    # přepínání modu 6 a 10
    if input.button_is_pressed(Button.B):
        if lock == True:
            lock = False
            basic.show_leds("""
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            """)
        else:
            lock = True
            basic.show_string("x")
    if lock == False:
        if input.button_is_pressed(Button.A):
            if mod == True:
                mod = False
                basic.show_string("6s")
            else:
                mod = True
                basic.show_string("10s")
        if input.is_gesture(Gesture.SHAKE):
            if mod == True:
                hod = randint(1, 10)
            else:
                hod = randint(1, 6)
            if hod == 1:
                basic.show_leds("""
                    . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                """)
            elif hod == 2:
                basic.show_leds("""
                    . . . . .
                                . # . . .
                                . . . . .
                                . . . # .
                                . . . . .
                """)
            elif hod == 3:
                basic.show_leds("""
                    . . . . .
                                . # . . .
                                . . # . .
                                . . . # .
                                . . . . .
                """)
            elif hod == 4:
                basic.show_leds("""
                    . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
                """)
            elif hod == 5:
                basic.show_leds("""
                    . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                """)
            elif hod == 6:
                basic.show_leds("""
                    . . . . .
                                . # . # .
                                . # . # .
                                . # . # .
                                . . . . .
                """)
            elif hod == 7:
                basic.show_leds("""
                    . . . . .
                                . # . # .
                                . # # # .
                                . # . # .
                                . . . . .
                """)
            elif hod == 8:
                basic.show_leds("""
                    . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
                """)
            elif hod == 9:
                basic.show_leds("""
                    . . . . .
                                . # # # .
                                . # # # .
                                . # # # .
                                . . . . .
                """)
            elif hod == 10:
                basic.show_leds("""
                    . . # . .
                                . # # # .
                                # . . . #
                                . # # # .
                                . . # . .
                """)
            for i in range(hod):
                music.play_tone(Note.C, music.beat(1))
                music.rest(music.beat(4))
        else:
            pass
basic.forever(furt)