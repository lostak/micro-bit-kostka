def on_sound_loud():
    basic.show_number(input.temperature())
input.on_sound(DetectedSound.LOUD, on_sound_loud)
