input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Trash += 1
    music.play(music.stringPlayable("C D E F G A B C5 ", 315), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.showNumber(Trash)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    Recycle += 1
    music.play(music.stringPlayable("C5 B A G F E D C ", 315), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Sad)
    basic.showNumber(Recycle)
})
let Total = 0
let Trash = 0
let Recycle = 0
basic.showString("Score")
Recycle = 0
Trash = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles(
"Recycle",
"Trash",
"Total"
)
loops.everyInterval(50000, function () {
    datalogger.log(
    datalogger.createCV("Recycle", Recycle),
    datalogger.createCV("Trash", Trash),
    datalogger.createCV("Total", Total)
    )
})
basic.forever(function () {
    Total = Recycle + Trash
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Recycle")
        basic.showNumber(Recycle)
        basic.showString("Trash")
        basic.showNumber(Trash)
        basic.showString("Total")
        basic.showNumber(Total)
    }
})
