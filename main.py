def on_forever():
    if input.temperature() <= 25:
        basic.set_led_color(0x007fff)
        basic.show_string("Temp" + str(input.temperature()) + "° C")
    else:
        basic.set_led_color(0xff0000)
        music.begin_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
        basic.show_string("Temp" + str(input.temperature()) + "° C zu hoch! Lüfte mal wieder!",)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """,)
    basic.pause(5000)
basic.forever(on_forever)