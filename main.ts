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
let Color1 = 1000
let Color2 = 10000
let Color3 = 20000
let Color4 = 30000
basic.forever(function () {
    if (Color1 > 65000) {
        Color1 = 1000
    } else if (Color2 > 65000) {
        Color2 = 1000
    } else if (Color3 > 65000) {
        Color3 = 1000
    } else if (Color4 > 65000) {
        Color4 = 1000
    }
    WSTouchPiano.TP_ShowRGB(
    Color1,
    Color2,
    Color3,
    Color4
    )
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Half))
        Color1 += 1000
        Color2 += 1000
        Color3 += 1000
        Color4 += 1000
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
