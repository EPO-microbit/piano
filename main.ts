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
let Color2 = 0
let Color3 = 0
basic.forever(function () {
    if (Color1 > 255) {
        Color1 = 0
    } else if (Color2 > 255) {
        Color2 = 0
    } else if (Color3 > 255) {
        Color3 = 0
    }
    WSTouchPiano.TP_ShowRGB(
    WSTouchPiano.TP_SetRGB(Color1, Color2, Color3),
    WSTouchPiano.TP_SetRGB(Color3, Color1, Color2),
    WSTouchPiano.TP_SetRGB(Color2, Color3, Color1),
    WSTouchPiano.TP_SetRGB(Color1, Color1, Color1)
    )
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Half))
        Color1 += 50
        Color2 += 50
        Color3 += 50
    } else if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        WSTouchPiano.TP_PlayMusic(294, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        WSTouchPiano.TP_PlayMusic(330, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
        WSTouchPiano.TP_PlayMusic(349, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
        WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
        WSTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
        WSTouchPiano.TP_PlayMusic(494, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
        WSTouchPiano.TP_PlayMusic(523, music.beat(BeatFraction.Half))
    } else if (WSTouchPiano.TP_Press(TP_PIANO.bB)) {
        music.playMelody("G B F A E C5 E G ", 120)
    }
})
