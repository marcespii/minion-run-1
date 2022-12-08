enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................ffff...........................................................................
        ..................................................................................f6666f..........................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffff....fffffffffffffffffffffffffffffffffffffffffffffffffffff
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff66666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66ffff66f66666666666666666666666f66ffff6666666666666666666666666ffff66f6666666666666f66666666666666666666666666ffff66f66666666666f66fff66666666666666666f66fff6666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666ffff66f6666666666666666666666666ffff6f6666666f66666666666666ff6f66666666ffff66f66666ffff66f666666666666666666f666666666666666ffff66f666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................ffff..................ffff...................................................................................
        ....................................................f6666f................f6666f..................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffffffffffffff666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666fff66f66666666666666666fff66f66666666666f66ffff66666666666666666666666666f6666666666666f66ffff6666666666666666666666666ffff66f66666666666666666666666f66ffff66
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666f66ffff666666666666666f666666666666666666f66ffff66666f66ffff66666666f6ff66666666666666f6666666f6ffff6666666666666666666666666f66ffff666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (trex.y == 94 && end == 0) {
        trex.vy = -160
        animation.setAction(trex, ActionKind.Jumping)
    }
})
function initTRex () {
    trex = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `, SpriteKind.Player)
    idle = animation.createAnimation(ActionKind.Idle, 600)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555555555555...........
        .......55555bbbb55555...........
        .......ffffb1ff1bffff...........
        .......ffffb1ff1bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    animation.attachAnimation(trex, idle)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555..5...............
        ...........55...555.............
        ...........5....................
        ...........55...................
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........55..55...............
        ...........555..5...............
        ................5...............
        ................55..............
        `)
    animation.attachAnimation(trex, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......55555bbbb55555...........
        .......ffffb1111bffff...........
        .......5555b1ff1b5555...........
        .......5555b1ff1b5555...........
        .......ffffb1111bffff...........
        .......55555bbbb55555...........
        .......55555555555555...........
        .......55555555555555...........
        .......555f555555f555...........
        .......5555ffffff5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    animation.attachAnimation(trex, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........555555...............
        ..........55555555..............
        .........5555555555.............
        ........555555555555............
        .......5555bbbbbb5555...........
        .......fffb111111bfff...........
        .......555b111111b555...........
        .......555b11ff11b555...........
        .......555b111111b555...........
        .......fffb111111bfff...........
        .......5555bbbbbb5555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555555555555...........
        .......55555ffff55555...........
        .......55555555555555...........
        .......55555555555555...........
        ........555555555555............
        .........5555555555.............
        ..........55555555..............
        ...........555555...............
        ...........5....5...............
        ...........5....5...............
        ...........55...55..............
        `)
    animation.attachAnimation(trex, dead)
    trex.z = 3
    trex.setPosition(15, 94)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(trex, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let idle: animation.Animation = null
let trex: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
game.setDialogCursor(img`
    ................................
    ..1111111111111111111111111111..
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111155555511111111111111
    11111111111555555551111111111111
    11111111115555555555111111111111
    11111111155555555555511111111111
    1111111155555bbbb555551111111111
    11111111ffffb1111bffff1111111111
    111111115555b1ff1b55551111111111
    111111115555b1ff1b55551111111111
    11111111ffffb1111bffff1111111111
    1111111155555bbbb555551111111111
    11111111555555555555551111111111
    11111111555555555555551111111111
    11111111555f555555f5551111111111
    111111115555ffffff55551111111111
    11111111555555555555551111111111
    11111111555555555555551111111111
    11111111555555555555551111111111
    11111111155555555555511111111111
    11111111115555555555111111111111
    11111111111555555551111111111111
    11111111111155555511111111111111
    11111111111151111511111111111111
    11111111111151111511111111111111
    11111111111555115551111111111111
    11111111111111111111111111111111
    .111111111111111111111111111111.
    ..1111111111111111111111111111..
    `)
game.splash("Minion Run")
scene.setBackgroundColor(9)
initGround()
initTRex()
info.setScore(0)
end = 0
game.showLongText("Prem qualsevol botó per saltar", DialogLayout.Top)
game.onUpdate(function () {
    if (trex.y < 94) {
        trex.ay = 400
    } else {
        trex.ay = 0
        trex.y = 94
        if (end == 0) {
            animation.setAction(trex, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .........b...b...b...b..........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .........b...b...b...b..........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .........b...b...b...b..........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbb.bbb.bbb.bbb.........
            ........bbbfbbbfbbbfbbb.........
            ........bfbfbfbfbfbfbfb.........
            ........bbbfbbbfbbbfbbb.........
            ........bbb.bbb.bbb.bbb.........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................1111111.........
            ...............11111111.........
            .............111111111111.......
            .............111111111111111....
            .............111111111111111....
            ..........11111111111111111111..
            .........111111111111111111111..
            .....11111111111111111111111111.
            .....11111111111111111111111111.
            .1111111111111111111111111111111
            11111111111111111111111111111111
            ..1111..........................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
