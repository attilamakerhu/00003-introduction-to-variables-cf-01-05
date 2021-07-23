input.onButtonPressed(Button.A, function () {
    Movie_title = 1
    basic.showString("Da Vinci Code")
    basic.pause(10380000)
    Movie_title = 0
})
let Movie_title = 0
let Tom_Hanks = "Tom Hanks"
basic.forever(function () {
    if (Movie_title == 1) {
        Tom_Hanks = "Robert Langdon"
    } else {
        Tom_Hanks = "Tom Hanks"
    }
})
