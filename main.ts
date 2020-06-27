input.onButtonPressed(Button.A, function () {
    if (vol > 0) {
        vol += 0 - 10
        music.setVolume(vol)
        basic.showString("" + (vol))
    }
})
input.onButtonPressed(Button.B, function () {
    if (vol < 150) {
        vol += 0 + 10
        music.setVolume(vol)
        basic.showString("" + (vol))
    }
})
let vol = 0
for (let index = 0; index < 4; index++) {
    WSTouchPiano.TP_ShowRGB(
    WSTouchPiano.TP_SetRGB(255, 0, 0),
    20000,
    30000,
    WSTouchPiano.TP_SetRGB(255, 0, 119)
    )
    WSTouchPiano.TP_ShowRGB(
    0,
    0,
    0,
    0
    )
}
let Color1 = 0
vol = 50
basic.forever(function () {
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.RED)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.ORANGE)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        WSTouchPiano.TP_PlayMusic(330, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.YELLOW)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
        WSTouchPiano.TP_PlayMusic(349, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.GREEN)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
        WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.BLUE)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
        WSTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.INDIGO)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
        WSTouchPiano.TP_PlayMusic(494, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.VIOLET)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
        WSTouchPiano.TP_PlayMusic(523, music.beat(BeatFraction.Half))
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.PURPLE)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.bB)) {
        music.playMelody("G B F A E C5 E G ", 120)
        Color1 = WSTouchPiano.TP_SetColor(RGB_COLOR.WHITE)
    }
    WSTouchPiano.TP_ShowRGB(
    Color1,
    Color1,
    Color1,
    Color1
    )
})
