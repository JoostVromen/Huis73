namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Laptop = SpriteKind.create()
    export const Collectable = SpriteKind.create()
    export const Follow = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const bord = SpriteKind.create()
    export const Vleermuis = SpriteKind.create()
    export const trofee = SpriteKind.create()
    export const Creeper = SpriteKind.create()
    export const trofee_collectable = SpriteKind.create()
    export const mist = SpriteKind.create()
    export const Skelet = SpriteKind.create()
    export const health = SpriteKind.create()
    export const boom = SpriteKind.create()
    export const QR = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const health_collectable = SpriteKind.create()
    export const rugzak_inhoud = SpriteKind.create()
    export const volatile = SpriteKind.create()
    export const destructable = SpriteKind.create()
    export const cracks = SpriteKind.create()
    export const camera_guide = SpriteKind.create()
    export const klei = SpriteKind.create()
}
/**
 * Controller functies
 */
/**
 * Level 1 - Grot
 */
/**
 * Speler
 */
/**
 * Vijanden
 */
/**
 * Trofeeen en collectables
 */
/**
 * Game update functies
 */
// Level 2 - Huis73
sprites.onCreated(SpriteKind.health_collectable, function (sprite) {
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . f f f . . f f f . . 
        . f 2 2 2 f f 2 2 2 f . 
        . f 2 1 2 2 2 2 2 2 f . 
        . f 4 2 2 2 2 2 2 2 f . 
        . . f 4 2 2 2 2 2 f . . 
        . . . f 4 2 2 2 f . . . 
        . c c c f 2 2 f c c c . 
        . . c c c f f c c c . . 
        . . . . c c c c . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . f f f . . f f f . . 
        . f 2 2 2 f f 2 2 2 f . 
        . f 2 1 2 2 2 2 2 2 f . 
        . f 4 2 2 2 2 2 2 2 f . 
        . . f 4 2 2 2 2 2 f . . 
        . . . f 4 2 2 2 f . . . 
        . . . . f 2 2 f . . . . 
        . . c c c f f c c c . . 
        . . . c c c c c c . . . 
        . . . . c c c c . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . f f f . . f f f . . 
        . f 2 2 2 f f 2 2 2 f . 
        . f 2 1 2 2 2 2 2 2 f . 
        . f 4 2 2 2 2 2 2 2 f . 
        . . f 4 2 2 2 2 2 f . . 
        . . . f 4 2 2 2 f . . . 
        . . . . f 2 2 f . . . . 
        . . . . . f f . . . . . 
        . . . . c c c . . . . . 
        . . . c c c c c c . . . 
        . . . . c c c c . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . f f f . . f f f . . 
        . f 2 2 2 f f 2 2 2 f . 
        . f 2 1 2 2 2 2 2 2 f . 
        . f 4 2 2 2 2 2 2 2 f . 
        . . f 4 2 2 2 2 2 f . . 
        . . . f 4 2 2 2 f . . . 
        . . . . f 2 2 f . . . . 
        . . c c c f f c c c . . 
        . . . c c c c c c . . . 
        . . . . c c c c . . . . 
        . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
function init_huis73 () {
    sleutel = level_sprite(sprites.create(img`
        . . f f f f . . . . . . . . . . 
        . f 4 5 5 5 f . . . . . . . . . 
        f 4 4 4 4 4 4 f . . . . . . . . 
        f 4 4 f f 4 4 f . . . . . . . . 
        f 4 4 f f 4 4 f . . . . . . . . 
        f 4 4 5 5 4 4 f . . . . . . . . 
        . f 4 4 4 4 4 5 f . . . . . . . 
        . . f f f f 4 4 5 f . . . . . . 
        . . . . . . f 4 4 5 f . . . . . 
        . . . . . . . f 4 4 5 f . . . . 
        . . . . . . . . f 4 4 5 f . . . 
        . . . . . . . f 4 4 4 4 5 f . . 
        . . . . . . f e 4 f 4 4 e 5 f . 
        . . . . . . . f f 4 4 f f f f . 
        . . . . . . . . f e f . . . . . 
        . . . . . . . . . f . . . . . . 
        `, SpriteKind.Collectable), 33, 11, "", 2)
    sleutel_dungeon = level_sprite(sprites.create(img`
        . . . f . . . . . . . . f . . . 
        . . f 5 f . f f f f . f 5 f . . 
        . f 4 5 f f 4 4 4 4 f f 5 4 f . 
        . f 4 5 4 4 5 5 5 5 4 4 5 4 f . 
        . . f 4 5 5 5 5 5 1 5 5 4 f . . 
        . . . f 4 f 5 5 5 5 f 5 f . . . 
        . . f 4 5 f f 5 5 f f 5 4 f . . 
        . . f 4 5 5 f 5 5 f 5 5 4 f . . 
        . . . f 4 4 4 5 5 5 4 4 f . . . 
        . . . . f f 4 4 4 4 f f . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 4 5 f f . . . . . 
        . . . . . . f 4 5 1 5 f . . . . 
        . . . . . . f 4 5 5 5 f . . . . 
        . . . . . . f 4 5 f f . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.Collectable), 53, 6, "", 2)
    vis = level_sprite(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Collectable), 42, 27, "", 2)
    kat = level_sprite(sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Follow), 6, 36, "", 2)
    minecraft_pick = level_sprite(sprites.create(img`
        . . . . f f f f f . . . . . 
        . 4 e f 9 6 6 6 9 f . . . . 
        . e 4 9 6 f f f f . . . . . 
        . f 6 6 f . . . . . . . . . 
        f 6 9 f e 4 . . . . . . . . 
        f 6 f . f e 4 . . . . . . . 
        f 6 f . . f e 4 . . . . . . 
        f 6 f . . . f e 4 . . . . . 
        f 9 f . . . . f e 4 . . . . 
        . f . . . . . . f e 4 . . . 
        . . . . . . . . . f e 4 . . 
        . . . . . . . . . . f e 4 . 
        . . . . . . . . . . . f e 4 
        . . . . . . . . . . . . f e 
        `, SpriteKind.Collectable), 34, 56, "", 2)
    RobotArm = level_sprite(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f f . . 
        . . . . . . . . f b f b b c f . 
        . . . . . . . f b c c f f f f . 
        . . . . . . f b c c f . . d d . 
        . . . . . f b c c f . . d . . d 
        . . . . f b c c f . . . d . . d 
        . . . f f f f f . . . . . . . . 
        . . . f 8 8 f . . . . . . . . . 
        . . . f 8 8 f . . . . . . 8 . . 
        . . f f f f f f . . . . . . a . 
        . f 8 8 8 8 8 8 f . . 2 . 7 . . 
        . f f f f f f f f . . . . . . . 
        . . . d . . . . . . . . . . . . 
        d d d d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Object), 26, 29, "", 2)
    Jasper = level_sprite(sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.NPC), 24, 31, "Heb je de mysterieuze kerker al gevonden?", 2)
    Marloes = level_sprite(sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.NPC), 3, 34, "Onze kat Minoes is dol op vis!", 2)
    npc_kennisbende = level_sprite(sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.NPC), 55, 5, "Die sleutel is van de Mysterieuze Kerker...", 2)
    npc_keramiek = level_sprite(sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC), 22, 4, "Verderop in het bos ligt Bouwen met Bricks!", 2)
    npc_kunst = level_sprite(sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.NPC), 6, 17, "Schilderen, schetsen, film maken, we doen eigenlijk alles!", 2)
    Brigitta = level_sprite(sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.NPC), 5, 55, "Schilderen, schetsen, film maken, we doen eigenlijk alles!", 2)
    Minecraft_Steve = level_sprite(sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.NPC), 33, 56, "Welkom bij de Minecraft workshop!", 2)
    Chris = level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC), 40, 38, "Ik ben in de bloementuin de sleutel van het Digitaal Atelier verloren...", 2)
    atelier_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 27, 31, "", 2)
    voorlezen_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 4, 36, "", 2)
    bieb_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 3, 53, "", 2)
    minecraft_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 33, 58, "", 2)
    coderdojo_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 40, 34, "", 2)
    kunst_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 4, 23, "", 2)
    keramiek_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 18, 5, "", 2)
    kennisbende_trofee = level_sprite(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.trofee_collectable), 57, 8, "", 2)
    level_sprite(sprites.create(assets.image`myImage0`, SpriteKind.health_collectable), 35, 6, "", 2)
    level_sprite(sprites.create(assets.image`myImage0`, SpriteKind.health_collectable), 3, 49, "", 2)
    level_sprite(sprites.create(assets.image`myImage0`, SpriteKind.health_collectable), 57, 34, "", 2)
    level_sprite(sprites.create(assets.image`myImage0`, SpriteKind.health_collectable), 19, 41, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f b d b b f . . . . . . 
        . . . f d d d d b b f . . . . . 
        . . f d d d d d d c b f . . . . 
        . . f d d d d d d c b f . . . . 
        . f d d d d d d b b c b f . . . 
        . f b d d d d d d b b b f . . . 
        . . f c d d d d b b b f . . . . 
        . . . f f b b c b f f . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.klei), 17, 5, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f b d b b f . . . . . . 
        . . . f d d d d b b f . . . . . 
        . . f d d d d d d c b f . . . . 
        . . f d d d d d d c b f . . . . 
        . f d d d d d d b b c b f . . . 
        . f b d d d d d d b b b f . . . 
        . . f c d d d d b b b f . . . . 
        . . . f f b b c b f f . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.klei), 17, 4, "", 2)
    level_sprite(sprites.create(img`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        .ffffffffffffffffffffffffffffffffffffffffffffff.
        .f11111111111111111111111111111111111111111111f.
        .f1e11111811111f111f1fff1fff11fff11111811111e1f.
        .f1111111811111f111f1f111f11f1f111111181111111f.
        .f1111188888111f111f1ff11fff11ff11118888811111f.
        .f11111188811111f1f11f111f1f11f111111888111111f.
        .f111111181111111f111fff1f11f1f111111181111111f.
        .fccccccccccccccccccccccccccccccccccccccccccccf.
        `, SpriteKind.Object), 21, 1, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 26, 32, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 2 9 f f . f f f f 
        . f d d 1 9 2 5 2 f f f . . . . 
        f d d 1 f 9 9 2 f d 6 d f f f . 
        f b f f 9 9 9 9 f d d d d d d f 
        f b f 9 2 9 9 f d 6 d d 6 d d f 
        f b f 2 5 2 f d d d d d d d f e 
        f b f 9 2 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 22, 32, "", 2)
    level_sprite(sprites.create(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Object), 34, 4, "", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 25, 36, "In het Digitaal Atelier kan je alles maken op een MaakAvond, of kom meedoen aan het Uitvinderslab! ", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 7, 40, "Bij Huis73 voorlezen kunnen kinderen elke woensdag of vrijdag genieten van een spannend verhaal!", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 26, 60, "Kan jij ook geen genoeg krijgen van Minecraft? Dan is deze workshop iets voor jou!", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 9, 59, "Dit is de Huis 73 Bibliotheek! Kom spelen, lezen en ontdekken!", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 39, 43, "Bij de CoderDojo kunnen kinderen leren programmeren!", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 22, 8, "De draaischijf, jouw handen en de klei. Een geweldige combinatie waarmee zowel traditionele als vernieuwende vormen gemaakt kunnen worden.", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 10, 22, "Illustreren, tekenen,\\n film maken? Huis73 biedt cursussen voor alle soorten kunst!", 2)
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 57, 10, "Bouwen met Bricks! Hou jij ook zo van bouwen?! In deze serie van 3 lessen ga je steeds een creatieve en technische oplossing bedenken en bouwen aan iets dat om een oplossing vraagt!", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 22, 42, "Huis73 Kunst", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 21, 43, "Huis73 Keramiek", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 25, 42, "Digitaal Atelier", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 26, 43, "Huis73 Bibliotheek", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 26, 46, "Voorlezen voor kinderen", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 25, 47, "Minecraft workshop", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 22, 47, "CoderDojo", 2)
    level_sprite(sprites.create(assets.image`myImage`, SpriteKind.bord), 21, 46, "Bouwen met Bricks", 2)
    level_sprite(sprites.create(img`
        . . . . 6 7 7 7 7 7 7 6 . . . . 
        . . . . 7 f f 7 6 f f 7 . . . . 
        . . . . 7 f f 6 7 f f 7 . . . . 
        . . . . 6 7 7 f f 7 7 6 . . . . 
        . . . . 7 6 f f f f 7 7 . . . . 
        . . . . 6 7 f 7 7 f 7 7 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 6 7 7 7 6 6 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 6 7 7 7 7 6 . . . . . 
        . . . . . 7 7 6 7 6 7 . . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . 6 7 7 7 7 6 7 6 . . . . 
        . . . . 7 7 7 . . 7 7 7 . . . . 
        . . . . 6 6 6 . . 6 6 6 . . . . 
        `, SpriteKind.Creeper), 36, 58, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 38, 56, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 39, 56, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 39, 57, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 30, 56, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 29, 56, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 28, 57, "", 2)
    level_sprite(sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f d b b b b b b b b b b b 6 6 f 
        f b b b b b b b b b b b b 6 e f 
        f b b b b b b b b b b 6 6 e b f 
        f b b e 6 b b b b b b 6 b b b f 
        f b 6 6 6 6 b b b b b b b b b f 
        f a a a a a c c c c c c c c c f 
        f d d 6 6 d d c d d d d d d d f 
        f b b 6 6 b b c d b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b 6 b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f b b b b b b c b b b b b b b f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.destructable), 37, 1, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 56, 18, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 51, 17, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 53, 14, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 50, 12, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 54, 10, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 60, 8, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 58, 2, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 48, 7, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 45, 3, "", 2)
    level_sprite(sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Vleermuis), 47, 11, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 38, 35, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 38, 38, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 38, 39, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 42, 34, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 42, 35, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 42, 38, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 42, 39, "", 2)
    level_sprite(sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d f f . . . . . . 
        . . . . f d d f 9 f . . 1 f f f 
        . . . f d d 1 9 9 f f f f d b f 
        . . f d d 1 9 6 9 f f . f f f f 
        . f d d 1 9 6 9 6 f f f . . . . 
        f d d 1 f 6 9 6 f d 6 d f f f . 
        f b f f 6 9 6 9 f d d d d d d f 
        f b f 9 9 6 9 f d 6 d d 6 d d f 
        f b f 9 6 9 f d d d d d d d f e 
        f b f 9 9 9 f d 6 d d 6 d f e . 
        f b f 9 9 f d d d d d d d f . . 
        f b f 9 f d d 6 d d 6 d f e . . 
        . f b f f b b b d d d f e . . . 
        . . . e f f f f b b b f e . . . 
        . . . . e e e e f f f e . . . . 
        `, SpriteKind.Laptop), 42, 40, "", 2)
    maak_qr(img`
        1111111111111111111111111111111
        1fffffff1ffff11ff1ff111fffffff1
        1f11111f11f11f111111f11f11111f1
        1f1fff1f111f1f1111f1ff1f1fff1f1
        1f1fff1f1f1fffff1f1ff11f1fff1f1
        1f1fff1f1ff1f11fff1f1f1f1fff1f1
        1f11111f1ff111ff1f11ff1f11111f1
        1fffffff1f1f1f1f1f1f1f1fffffff1
        111111111ff11111f1ff1f111111111
        1f111f1fff11ff1111f11ffffff11f1
        11fff1f1ffff1ff1fff1111fffffff1
        1ffff11f1111f11fff1111f1ff111f1
        1fffff1111ffff1111f1ffff1ff1ff1
        111f11ff11fff111f1f11ff11111f11
        1f111f11fff1ff1fff1f11ff1fffff1
        1f1ff11fff11ff1ff1ff111f1fff1f1
        1111f11111ff111ff1ffff1f1111ff1
        11111ffff1f1111111f11ff1f111f11
        1ffff111f1f1111fffff1f1ffff1ff1
        1111ffff1f1f111fff1f1ff11f1f1f1
        111f1111ff11ff11f1f1f11f1111ff1
        1ff1ff1ffffff1fff1fffffffff11f1
        111111111ff1ff1fffff1f111f111f1
        1fffffff1fff1ffff1ffff1f1fff1f1
        1f11111f111ff1f1f1ff1f111f111f1
        1f1fff1f1f1ffff1f1f1fffffff11f1
        1f1fff1f11f1f11ff11f11f1f1111f1
        1f1fff1f11111f1ffffff11111ffff1
        1f11111f11111f1111ffffff1ff1ff1
        1fffffff1ff1f111f1f1ffffff11f11
        1111111111111111111111111111111
        `, 9, 54, "Scan de QR code voor meer informatie over de bieb!", 2)
    maak_qr(img`
        11111111111111111111111111111111111
        1fffffff11f11fff1ffff1fff11fffffff1
        1f11111f111f1f1fff1111f11f1f11111f1
        1f1fff1f1ffff11fff1f1fff1f1f1fff1f1
        1f1fff1f1ff111fff1f1f11fff1f1fff1f1
        1f1fff1f1ff11f111ffffff1f11f1fff1f1
        1f11111f1f11111ff1f111ff1f1f11111f1
        1fffffff1f1f1f1f1f1f1f1f1f1fffffff1
        111111111fffff11ff11f1ffff111111111
        1f1fffff11f11ff1f1f1111fff1fffff111
        1fffff111f1f1ff11f1ffff1f11ff1ff1f1
        11f1111ffff1111ff11111f11fff1f1ff11
        1f1ff1f11fffff11f111fffff1f11ffff11
        1f1f1f1ff111ff111ff1ff1fff11fff1f11
        11f11ff1ff1ffff11ff1ff1ff1fff1ffff1
        1ff1f1ff1ff1ff11f1111ff111fffffff11
        111f1ff11f11f11ff111ffff11ff1f1f111
        1f1111ff11ff11f111f1f11ffff1ff111f1
        111fff1111fffff11ffffffffffff1ff1f1
        1f111ffff111fff1ffff11111111ff1ff11
        111f11111fff1f11ff1ffff1f111fffff11
        1fff11fff111fff111f1f1111f11fff1ff1
        1f1ffff11111ffff1f1ffff1ff1f11f11f1
        1f11ff1f1f111f1ff11f1f111ff111f1f11
        1f11fff1f1f1ff1f1f11ffff11fff1ff1f1
        1f11fffff1f1ffff11f1f1111ffffff1ff1
        111111111f11f111111ff11fff111f1f1f1
        1fffffff111ff1ffff111f1fff1f1f1ff11
        1f11111f1ff1f1ff1111f1ffff111ffff11
        1f1fff1f1ffff1f111f1111f1ffffff1ff1
        1f1fff1f1f1f1ff1111ffffff1f11fffff1
        1f1fff1f1ff1f111f11f111ffffff111111
        1f11111f11f1f1111f11fffff1ff1fff111
        1fffffff1f1f111111f11f111ff1f111f11
        11111111111111111111111111111111111
        `, 5, 33, "Scan de QR code voor meer informatie over Verhaaltjestijd!", 2)
    maak_qr(img`
        111111111111111111111111111111111111111
        1fffffff1f1111ff1ff11ff1ff1fff1fffffff1
        1f11111f11111f11fff1f11f1f111f1f11111f1
        1f1fff1f111f1ff1f1ff1fff111ff11f1fff1f1
        1f1fff1f1f111fffff1ff11ff1ff1f1f1fff1f1
        1f1fff1f1ff11ff1ff1111f1f1f1ff1f1fff1f1
        1f11111f1f111f11ff1fff1f1fff111f11111f1
        1fffffff1f1f1f1f1f1f1f1f1f1f1f1fffffff1
        111111111fff1ff11ffff1f11f1f11111111111
        1f111f1fff11f1f1f1fffffff111f1fffff11f1
        1ff11f111ff1f1111f111ff1ffffff111ffff11
        111f111ff1ff1f1f1fff1111ff11f1fff11f111
        111f1ff1111111f111ff11f1f1111ff1111ff11
        1f1fff1ff1f1f111f1f11ff11f1f11fff11fff1
        11f11f11fff11ff1ff1111fff11ff1f11ff1111
        11f1f1ffff1fff1ff1f11f1ff11ff111ffff111
        1ff11f11fffff111f1f1ffff1f111fffff1f111
        1ff1ffffff1f11fff1ff11fff1111ffff1fff11
        111f11f11ff1111f111f1f11ff1ffff11f1ff11
        11fff11f11fff1ffff1f11ffff1ff1111f1f111
        11f111f11fff11ff1ffff1f1ff1f1111111ff11
        1ff11fffffff1f1f11fffff1ff11fffff11f111
        1fff1ff11f1ff1f1f1ff1f1ffff1f111ff11111
        1f11111ffff11111f1ff1ffff11ff111fffff11
        1111f1f11f11ff1ff1fff1f1f11f11f1ff1fff1
        111ff11f11ff11111ffff1ff1f11111f11fff11
        1fff11111ff1ff11f1f11ff1ffffff111fff111
        111ff11f111f11f1ffff1ffffff1fffffff1111
        1111fff111f1f1f11ffffff1f11f1f11111f1f1
        1ff11ffff1f1ff1f11f111f1f1111fffff1f1f1
        111111111f1ff111ff1f1f1ff11fff111f11111
        1fffffff1fff11fff1111fffffff1f1f1f11111
        1f11111f111ff111f1f111f11f11ff111fff111
        1f1fff1f1ffff1ff1ffffffff11f1fffffff111
        1f1fff1f11ff1f1ff1f11f1fff1ffffff1f1ff1
        1f1fff1f11ff1f1fffff11f1ff11ff1f111f111
        1f11111f11f1ff11fffff1f1ff11111f1f1ff11
        1fffffff1f111fff11f1f1f1ff11f1fff11fff1
        111111111111111111111111111111111111111
        `, 31, 56, "Scan de QR code voor meer informatie over de Minecraft workshop!", 2)
    maak_qr(img`
        11111111111111111111111111111111111
        1fffffff11f1f1f11111fffff11fffffff1
        1f11111f11f111ffffff1f11111f11111f1
        1f1fff1f1ff1f1f11f1f11ff111f1fff1f1
        1f1fff1f1f111f1f11f1f11f1f1f1fff1f1
        1f1fff1f1f111f11f11ffff1f11f1fff1f1
        1f11111f1fff11fff1ff1f11111f11111f1
        1fffffff1f1f1f1f1f1f1f1f1f1fffffff1
        111111111ff11f11ff111fffff111111111
        1f1fffff11f1f1fffffff11f111fffff111
        11f1fff11f1fff1f1111ff1ff11ff1ff1f1
        11f1f1fffff1f111ff111ff111f11f1ff11
        1f1f1f111ff11f1f1f111ffffff11fffff1
        11f1ffff111ff11111f11f1f11f1fff11f1
        1f1fff11fff1f11f1f1ff1fff11f11ffff1
        1f1fffff1ffffffff1f11f1111ff11fff11
        1ff1f1f11f11fff11f111fff1fffffff111
        1f11ff1fff1f1f1f11ff1f1ff1f1fff11f1
        1ff1fff111f1ff1f1111fff1f11ff1ff1f1
        11ff111fff1f1ffff11111f11f1fff1ff11
        1ff11f11ff11fff1ff1111f1fffffffff11
        111f111ff1111ff111f1f11f1f11fff1ff1
        1ff1f1f11f11ff1f1f1ffff1f11f111f1f1
        1f1fffffff11f1ffffff11ff1f111111f11
        1f1ff1f1111f1ff1ff11ffff11ff1fff111
        1f1f11fff1ff1f11f1fff11f1fffff11ff1
        111111111f1fff111fffff11ff111f1fff1
        1fffffff111f11f1f11111ffff1f1f1f111
        1f11111f1fff1fff1f1ffff1ff111ffff11
        1f1fff1f1f1f1f1f11f1f11f1ffffff1111
        1f1fff1f1ffff1111fffff11fff11f1fff1
        1f1fff1f1f1ff1fff1f11f1ffffff1ff111
        1f11111f111111ffff1f11f111f11fff111
        1fffffff1fffff11f1f1f111ff1ff111f11
        11111111111111111111111111111111111
        `, 24, 2, "Scan de QR code voor meer informatie over Huis73 keramiek workshops!", 2)
    maak_qr(img`
        1111111111111111111111111111111
        1fffffff11f11f11f11ff11fffffff1
        1f11111f1111f1f1f1ff1f1f11111f1
        1f1fff1f111f111111ffff1f1fff1f1
        1f1fff1f11ffff11f11f111f1fff1f1
        1f1fff1f1111f11fffff1f1f1fff1f1
        1f11111f1f11ff11ff11ff1f11111f1
        1fffffff1f1f1f1f1f1f1f1fffffff1
        1111111111fff111ffff1f111111111
        1f11f1ff1ff11fffff11f1f1f111111
        1f111f11f1111f111ff11fff11f11f1
        1fffffff111ff1ff11f1ff1f11fff11
        111f111111f1ffffff1f11f1ff1ff11
        1ffff11ff1f111f1fff1ffff11f1ff1
        1fff1f11f11f1f1f1111ff11f111111
        1111ffff1f1f111f11ff11ff11ffff1
        11f111f1ff111ff1ffff1f1111f1f11
        1f11ffff1ff1111111f11ff1f111f11
        1111ff1111ffff1f1f1f1ffff1f11f1
        1f1f1f1fff11f1111f111111f111ff1
        111f1ff1f1fff11ff1f1f11f1111ff1
        1f1fff1fff111fff11111fffff1f111
        111111111ff11f111ff11f111f1fff1
        1fffffff111f11f11f1f1f1f1f11f11
        1f11111f1f1111fff11fff111fffff1
        1f1fff1f11f1111f1ff11fffff11111
        1f1fff1f1ff1fff111f1ff1f1ffff11
        1f1fff1f1111f1ff1ffff1f11fff1f1
        1f11111f11f111ffffff1ff11f11f11
        1fffffff1f1f11fff1f1ffffff11f11
        1111111111111111111111111111111
        `, 25, 28, "Scan de QR code voor meer informatie over het Digitaal Atelier!", 2)
    maak_qr(img`
        111111111111111111111111111111111111111
        1fffffff1f1ff1f1f11ff11f1ffff11fffffff1
        1f11111f111ff1ff1f111f11111f1f1f11111f1
        1f1fff1f1111111111fffff1f11f111f1fff1f1
        1f1fff1f1ffff11f1f11f111f1f1111f1fff1f1
        1f1fff1f1ff1111fff1f11f1f111ff1f1fff1f1
        1f11111f1ffff1111f1ff1ff11111f1f11111f1
        1fffffff1f1f1f1f1f1f1f1f1f1f1f1fffffff1
        111111111fff11111fff1f1ff111ff111111111
        1f111f1ffff1f1ff111ff11f1f11f1fffff11f1
        11f111111111111f1ff1fff111ffff111f1ff11
        111f11fff1fffff11f1f1f1f11ffff11fff1111
        1ff111111fffff1111ff11f11f1f1f1fff1ff11
        1f11f1ff1f1f1111fff1fff1ff1ff1ff111fff1
        111f1ff1f1f1f11ff1f11111f111fff11ff1111
        1f1ff1ff111ff1f1f11f1fffff11f111ffff111
        11f111111f1ff11ff1111ff1ff11f1f1ff1f111
        11f1f1ff11ff1fffff111f11f11111fff1fff11
        1ffffff1fff111f1111ff1ff1ff1ff111f11f11
        11f11f1ff1ff1111f11ff1f1fff1f111ff1f111
        11fffff1f1f11f1ffff1fff1f11f111f111ff11
        1f1f11ff11ff11ff11f11fff1f1ffffff11f111
        1ff1f11111f11ffff11f11f1f1fffff1ff11111
        111f1fff11f11ffffff11f11ff1fff11fffff11
        11fffff111ff11f111ff1f1f1f11ff11ff1f111
        1f11111f1f11111f111f111fff11f1ffffffff1
        1f1ff1f1ff1f11111f11fff1111ffff11f11111
        1111f1ff1f1ff11f1ff11fff11ffff11ff1f111
        11111f1111f1f1ff11ff11ff1f11f11fff1f1f1
        1fffff1f1fff111ffff1ffffff111ffffffff11
        111111111f11f1fff1ff1f11ff1f1f111f11f11
        1fffffff1f11111ff11f11fff11f1f1f1f11f11
        1f11111f111ffffff1111ff1ff1f1f111fff111
        1f1fff1f1fff1f1fff11ff11ff111fffffff1f1
        1f1fff1f111ff1f111fff11f1f1f1f1ff111f11
        1f1fff1f11ff1f1ff11ff1f1f1ff11ff11f1f11
        1f11111f11fff1f1fff1fff1ff11fff11ffff11
        1fffffff1fff11ff11ff11ffff11f111f11fff1
        111111111111111111111111111111111111111
        `, 42, 37, "Scan de QR code voor meer informatie over de CoderDojo!", 2)
    maak_qr(img`
        111111111111111111111111111111111111111
        1fffffff1f11fffffff1ffffff11ff1fffffff1
        1f11111f1111f1ff111ff11f1f111f1f11111f1
        1f1fff1f11fff11ff1f111ff111f1f1f1fff1f1
        1f1fff1f1fff111f111f111ff1ff1f1f1fff1f1
        1f1fff1f1ff1ffff11f11111f1f1ff1f1fff1f1
        1f11111f1f1f1fff11f1ff111f1f111f11111f1
        1fffffff1f1f1f1f1f1f1f1f1f1f1f1fffffff1
        111111111f111111f11111ff1f1f11111111111
        1f111f1ffff1f1ffff11fff1f11ff1fffff11f1
        1fff1f111f1111f1111ff1fffffffff11ff1f11
        11f1111ff1f1111ff1f1f111ff11f1fff11f111
        1ffff111f11f1f11fff1fff1ff111ff1f11ff11
        1ff11fffff1111f111ff11ffff1f11fff1ffff1
        1f1ff111111f1ff1f11f1111f11ff1f11ff1f11
        111111ff1fff11f1f1f1111ff1fff111ffff111
        1f1111f11f1f1fffffffffff1f1f1ff1ff1f1f1
        1f1f1f1fff1ff111111f11f1ff1f111ff1fff11
        11f1ff11f1f111f11ff1ffffff11ff111ff1f11
        1f11ffff11fff11f1f1f1ffff11ff111f111111
        1f1ff1f1f111ff1111ff11f1ff1fff11ff1ff11
        1ff1ffff111fffffffffffff1f11fffff11f111
        1fffff11ffff11f1f1f11f11fff1f111ff11111
        111f11ff1ff1f11fff1f111ff111f11fffff111
        1ff1f1f1fffff1ff1f1111f1f11f1111ff1fff1
        11ff1f1ff1f1ff1f1f111f11111f11fff1ff1f1
        1f111111f1f1f1ff111ff1f1fff1ff111ff1111
        111111ff11f111f1f111f111f1f1fffff11f111
        111ff1111f1fff11fff1fffff11f1f11ff1fff1
        1ff1fffff11f1ff11fff11ff11111fffff1fff1
        111111111f1fff11f11111f1f1ffff111f11111
        1fffffff1f11fff1fff11f11fff11f1f1f11111
        1f11111f11fff11f1fff1f1f1f11ff111fff1f1
        1f1fff1f1ff1f111111ff11ff11f1ffffffff11
        1f1fff1f1111f1111f11ff11ff1ffffff1ff1f1
        1f1fff1f11ff1f111ff11ff1ff11ff1f11f1111
        1f11111f111f1ff111ff11ffff1111f11ffff11
        1fffffff1ffff111ffffffffff11f111f11fff1
        111111111111111111111111111111111111111
        `, 57, 7, "Scan de QR code voor meer informatie over Bouwen met Bricks!", 2)
    maak_qr(img`
        1111111111111111111111111111111
        1fffffff1fff1ff1ff1f111fffffff1
        1f11111f1111fff1111ff11f11111f1
        1f1fff1f11f11111ffffff1f1fff1f1
        1f1fff1f1ff1f1ff1f1ff11f1fff1f1
        1f1fff1f1ffff11fffff1f1f1fff1f1
        1f11111f1ff1fff11111ff1f11111f1
        1fffffff1f1f1f1f1f1f1f1fffffff1
        111111111fffff1f11ff1f111111111
        1f111f1ffff11f11f1f11ffffff11f1
        1111f111f11f1f1ff11f111fffffff1
        111fffff11f1ff1ffff111f1ff111f1
        11111ff1f1f1ff11f1ffffff1ff1ff1
        111fff1f11f11fff1ff11ff11111f11
        1f1ff111f11fff1fff1111ff1fffff1
        1ffff1ff11111ffff1ff111f1fff1f1
        111ffff11fff1ff11ff1ff1f1111ff1
        11ff11fffff111f11ff11ff1f111f11
        1ff1fff1f1f1ffffff1f1f1ffff1ff1
        11111f1ff111f111ffff1ff11f1f1f1
        11111f11f1f1111f11fff11f1111ff1
        1fff11ffffff1ffff1f1fffffff11f1
        111111111f111f11ff111f111f111f1
        1fffffff1f1ff1fff1ffff1f1fff1f1
        1f11111f11111ff1f1ff1f111f11111
        1f1fff1f1f1111f11ff1fffffff1f11
        1f1fff1f111f111fff1111f1f1111f1
        1f1fff1f11f1fff1f111f11111ffff1
        1f11111f11fff1f11ff1ffff1ff1ff1
        1fffffff1f1ffffff1f1ffffff11f11
        1111111111111111111111111111111
        `, 10, 15, "Scan de QR code voor meer informatie over Huis73 Amateurkunst!", 2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Skelet, function (sprite, otherSprite) {
    pijn()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile30`) && rugzak.indexOf(sleutel) >= 0) {
        tiles.setTileAt(location, assets.tile`myTile5`)
        tiles.setWallAt(location, false)
        music.baDing.play()
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile31`) && rugzak.indexOf(sleutel) >= 0) {
        tiles.setTileAt(location, assets.tile`myTile6`)
        tiles.setWallAt(location, false)
    }
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.doorLockedNorth) && rugzak.indexOf(sleutel_dungeon) >= 0) {
        verwijder_mist()
        tiles.setTileAt(location, sprites.dungeon.darkGroundNorth)
        tiles.setWallAt(location, false)
        music.baDing.play()
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile19`)) {
        tiles.setTileAt(location, assets.tile`myTile5`)
        tiles.setWallAt(location, false)
        music.baDing.play()
        Jasper.sayText("Welkom in het Digitaal Atelier!", 3000, false)
        Brigitta.sayText("Welkom in de Bibliotheek!", 3000, false)
        Chris.sayText("Welkom bij de CoderDojo!", 3000, false)
        Minecraft_Steve.sayText("Welkom bij de Minecraft workshop!", 3000, false)
        Marloes.sayText("Welkom bij Verhaaltjestijd!", 3000, false)
        npc_kennisbende.sayText("Welkom bij de Bouwen met Bricks!", 3000, false)
        npc_keramiek.sayText("Welkom in de Keramiekstudio!", 3000, false)
        npc_kunst.sayText("Welkom in onze Creatieve Ruimte!", 3000, false)
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile20`)) {
        tiles.setTileAt(location, assets.tile`myTile6`)
        tiles.setWallAt(location, false)
    }
})
function nieuw_level (num: number) {
    level = num
    for (let value of level_sprites) {
        if (sprites.readDataNumber(value, "level") == level) {
            tiles.placeOnTile(value, tiles.getTileLocation(sprites.readDataNumber(value, "level_col"), sprites.readDataNumber(value, "level_row")))
            if (sprites.readDataBoolean(value, "wall")) {
                tiles.setWallAt(tiles.getTileLocation(sprites.readDataNumber(value, "level_col"), sprites.readDataNumber(value, "level_row")), true)
            }
            value.setFlag(SpriteFlag.Ghost, false)
            value.setFlag(SpriteFlag.Invisible, false)
            if (value.kind() == SpriteKind.destructable) {
                sprites.readDataSprite(value, "destruct_sprite").setFlag(SpriteFlag.Invisible, false)
            }
        } else {
            value.setFlag(SpriteFlag.Invisible, true)
            value.setFlag(SpriteFlag.Ghost, true)
            if (value.kind() == SpriteKind.destructable) {
                sprites.readDataSprite(value, "destruct_sprite").setFlag(SpriteFlag.Invisible, true)
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rugzak.indexOf(minimap2) >= 0) {
        if (sprites.readDataBoolean(minimap2, "zichtbaar")) {
            minimap2.setFlag(SpriteFlag.Invisible, true)
            sprites.setDataBoolean(minimap2, "zichtbaar", false)
        } else {
            minimap2.setFlag(SpriteFlag.Invisible, false)
            sprites.setDataBoolean(minimap2, "zichtbaar", true)
        }
    }
})
sprites.onCreated(SpriteKind.destructable, function (sprite) {
    sprites.setDataNumber(sprite, "destruct_level", 0)
    sprites.setDataSprite(sprite, "destruct_sprite", sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.cracks))
    sprites.readDataSprite(sprite, "destruct_sprite").setPosition(sprite.x, sprite.y)
    sprites.readDataSprite(sprite, "destruct_sprite").z = 101
    sprites.readDataSprite(sprite, "destruct_sprite").setFlag(SpriteFlag.Invisible, false)
})
function pijn () {
    if (!(sprites.readDataBoolean(speler, "onkwetsbaar"))) {
        sprites.changeDataNumberBy(speler, "health", -1)
        music.zapped.play()
        scene.cameraShake(2, 200)
        teken_health()
        if (sprites.readDataNumber(speler, "health") <= 0) {
            music.wawawawaa.play()
            game.over(false, effects.melt)
        } else {
            sprites.setDataBoolean(speler, "onzichtbaar", false)
            sprites.setDataBoolean(speler, "onkwetsbaar", true)
            sprites.setDataNumber(speler, "eind_onkwetsbaar_tijd", game.runtime() + 1500)
        }
    }
}
function doe_klei (mySprite: Sprite) {
    list = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f b d b b f . . . . . . 
        . . . f d d d d b b f . . . . . 
        . . f d d d d d d c b f . . . . 
        . . f d d d d d d c b f . . . . 
        . f d d d d d d b b c b f . . . 
        . f b d d d d d d b b b f . . . 
        . . f c d d d d b b b f . . . . 
        . . . f f b b c b f f . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . f f f f . . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . . f b b f . . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . f d d d b f . . . . . 
        . . . . f d d d d b b f . . . . 
        . . . f d d d d d d b b f . . . 
        . . . f d d d d d d b b f . . . 
        . . . f d d d d d b b b f . . . 
        . . . . f d d b b b b f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . f f f f f f f . . . . . 
        . . . f 1 d d d d d d f . . . . 
        . . f 1 d d d d d d d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . . f d d d d d b b f . . . . 
        . . b b f f f f f f f b b . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 d d b f . . . . . 
        . . . . . . f d b f . . . . . . 
        . . . . . . f d b f . . . . . . 
        . . . . . f f d b f f . . . . . 
        . . . . f 1 d d d d b f . . . . 
        . . . . f d d d d d b f . . . . 
        . . . . f d d d d b b f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f d b f . . . . . . 
        . . . . . f f d b f f . . . . . 
        . . . f f d f d b f b f f . . . 
        . . f 1 d d f d b f b b b f . . 
        . . f d d d b b b b d d b f . . 
        . . . f d d 1 1 1 1 d b f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    if (rugzak.indexOf(verf) < 0) {
        sprites.changeDataNumberBy(mySprite, "frame", 1)
        if (sprites.readDataNumber(mySprite, "frame") > 4) {
            sprites.setDataNumber(mySprite, "frame", 0)
        }
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 3496, 255, 0, 175, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        mySprite.setImage(list[sprites.readDataNumber(mySprite, "frame")])
    } else {
        mySprite.setImage(list[sprites.readDataNumber(mySprite, "frame")])
        if (sprites.readDataString(verf, "kleur") == "blauw") {
            mySprite.image.replace(13, 6)
            mySprite.image.replace(11, 8)
            mySprite.image.replace(1, 9)
        } else if (sprites.readDataString(verf, "kleur") == "rood") {
            mySprite.image.replace(13, 2)
            mySprite.image.replace(11, 14)
            mySprite.image.replace(1, 3)
        } else if (sprites.readDataString(verf, "kleur") == "paars") {
            mySprite.image.replace(11, 12)
            mySprite.image.replace(13, 10)
            mySprite.image.replace(1, 11)
        } else {
        	
        }
    }
}
function draag_kroon () {
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . 1 f f f f f c f f 1 . . 
        f 5 5 5 f 1 5 5 f 5 5 c . 
        f 5 5 5 5 5 5 5 5 5 5 c . 
        c 4 2 4 4 2 4 4 2 4 4 c . 
        f f f f f f f f f f c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . 1 f f f f f c f f 1 . 
        f f 5 5 5 f 1 5 5 f 5 5 c 
        f f 5 5 5 5 5 5 5 5 5 5 c 
        . c 4 2 4 4 2 4 4 2 4 4 c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . 1 f f c f f f f f 1 . . 
        c 5 5 5 f 1 5 5 f 5 5 f f 
        c 5 5 5 5 5 5 5 5 5 5 f f 
        c 4 2 4 4 2 4 4 2 4 4 c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . f f f f . . . . . 
        1 . f f c c c c f f 1 5 . 
        5 5 5 5 f 1 5 5 f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 . 
        4 4 2 4 4 2 4 4 2 4 4 2 . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . 1 . f f c c c c f f 1 5 
        . 5 5 5 5 f 1 5 5 f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 4 4 2 4 4 2 4 4 2 4 4 2 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . 1 . f f c c c c f f 1 5 
        . 5 5 5 5 f 1 5 5 f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 4 4 2 4 4 2 4 4 2 4 4 2 
        . f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . 1 f f f c f f f f f 1 5 
        . 5 5 5 5 f 1 5 5 f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 4 4 2 4 4 2 4 4 2 4 4 2 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . 1 f f f c f f f f f 1 5 
        . 5 5 5 5 f 1 5 5 f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 4 4 2 4 4 2 4 4 2 4 4 2 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . 1 f f f c f f f f f 1 5 
        . 5 5 5 5 f 1 5 5 f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 
        . 4 4 2 4 4 2 4 4 2 4 4 2 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        5 1 f f f f f c f f f 1 . 
        5 5 5 5 f 1 5 5 f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 . 
        4 4 2 4 4 2 4 4 2 4 4 2 . 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        5 1 f f f f f c f f f 1 . 
        5 5 5 5 f 1 5 5 f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 . 
        4 4 2 4 4 2 4 4 2 4 4 2 . 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        5 1 f f f f f c f f f 1 . 
        5 5 5 5 f 1 5 5 f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 . 
        4 4 2 4 4 2 4 4 2 4 4 2 . 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    kroon = 1
}
function doelen_tooltip () {
    zoekDoelwit(speler)
    for (let value of sprites.allOfKind(SpriteKind.NPC)) {
        if (pointer.overlapsWith(value) && sprites.readDataNumber(tooltip, "ticks") == 0) {
            tooltip = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f d d d d f . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f d d f . . . . . . 
                . . . . . . f 5 5 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.volatile)
            tooltip.setFlag(SpriteFlag.Ghost, true)
            tooltip.setPosition(value.x - 0, value.y - 16)
            sprites.setDataNumber(tooltip, "ticks", 10)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    zoekDoelwit(speler)
    for (let value2 of sprites.allOfKind(SpriteKind.NPC)) {
        if (pointer.overlapsWith(value2)) {
            value2.sayText(sprites.readDataString(value2, "text"), 3000, false)
            music.magicWand.play()
        }
    }
    for (let value2 of sprites.allOfKind(SpriteKind.destructable)) {
        if (pointer.overlapsWith(value2)) {
            if (rugzak.indexOf(minecraft_pick) >= 0) {
                sla_destructable(value2)
            }
        }
    }
    for (let value22 of sprites.allOfKind(SpriteKind.QR)) {
        if (pointer.overlapsWith(value22)) {
            music.magicWand.play()
            sprites.readDataSprite(value22, "qr_sprite").setFlag(SpriteFlag.Invisible, false)
            game.showLongText(sprites.readDataString(value22, "url"), DialogLayout.Bottom)
            sprites.readDataSprite(value22, "qr_sprite").setFlag(SpriteFlag.Invisible, true)
        }
    }
    for (let value3 of sprites.allOfKind(SpriteKind.bord)) {
        if (pointer.overlapsWith(value3)) {
            game.showLongText(sprites.readDataString(value3, "text"), DialogLayout.Bottom)
        }
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Laptop)) {
        if (pointer.overlapsWith(value4)) {
            music.pewPew.play()
        }
    }
    for (let value4 of sprites.allOfKind(SpriteKind.klei)) {
        if (pointer.overlapsWith(value4)) {
            doe_klei(value4)
        }
    }
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile30`) || tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile31`)) {
        speler.sayText("Deze deur is op slot! Had ik maar een sleutel..", 3000, false)
    }
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), sprites.dungeon.greenSwitchUp)) {
        tiles.setTileAt(pointer.tilemapLocation(), sprites.dungeon.greenSwitchDown)
        if (level == 2) {
            music.sonar.play()
            make_effect_sprite(48, 57).startEffect(effects.halo, 2000)
            make_effect_sprite(49, 57).startEffect(effects.halo, 2000)
            tiles.setTileAt(tiles.getTileLocation(57, 48), assets.tile`myTile4`)
            tiles.setTileAt(tiles.getTileLocation(57, 49), assets.tile`myTile4`)
            tiles.setWallAt(tiles.getTileLocation(57, 48), false)
            tiles.setWallAt(tiles.getTileLocation(57, 49), false)
            scene.cameraShake(4, 500)
        }
    }
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), sprites.dungeon.chestClosed)) {
        tiles.setTileAt(pointer.tilemapLocation(), sprites.dungeon.chestOpen)
        if (level == 2) {
            minimap2.setPosition(80, 35)
            minimap2.setFlag(SpriteFlag.Invisible, false)
            sprites.setDataBoolean(minimap2, "zichtbaar", true)
            music.powerUp.play()
            game.showLongText("Er zit een plattegrond in deze kist!", DialogLayout.Bottom)
            game.showLongText("Druk op de \"B\" knop om hem te openen of te sluiten..", DialogLayout.Bottom)
            rugzak.push(minimap2)
            minimap2.setFlag(SpriteFlag.Invisible, true)
            sprites.setDataBoolean(minimap2, "zichtbaar", false)
            minimap2.setPosition(125, 35)
        }
    }
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile79`)) {
        tiles.setTileAt(pointer.tilemapLocation(), assets.tile`myTile81`)
        if (level == 2) {
            game.showLongText("Een gouden kroon! Het laatste geheim van de wereld van Huis73!", DialogLayout.Bottom)
            music.magicWand.play()
            draag_kroon()
        }
    }
    if (pointer.tilemapLocation().row == 2 && (pointer.tilemapLocation().column >= 20 && pointer.tilemapLocation().column <= 22)) {
        pak_verf()
    }
})
function geheime_gang () {
    for (let value of tiles.getTilesByType(sprites.dungeon.doorOpenNorth)) {
        if (value.row != hitbox.tilemapLocation().row || value.column != hitbox.tilemapLocation().column) {
            tiles.placeOnTile(hitbox, value)
            scene.cameraShake(2, 2000)
            scene.cameraFollowSprite(camera_punt)
            sprites.setDataNumber(camera_punt, "ticks", 5)
            for (let value2 of sprites.allOfKind(SpriteKind.destructable)) {
                if (value.row == value2.tilemapLocation().row || value.column != value2.tilemapLocation().column) {
                    value2.startEffect(effects.disintegrate, 500)
                    value2.setFlag(SpriteFlag.Invisible, true)
                    value2.setFlag(SpriteFlag.Ghost, true)
                    tiles.setWallAt(value2.tilemapLocation(), false)
                }
            }
            break;
        }
    }
}
// De speler krijgt de kat
sprites.onOverlap(SpriteKind.Player, SpriteKind.Follow, function (sprite, otherSprite) {
    if (rugzak.indexOf(vis) >= 0) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e b f b . 
            f d d f d d f d d f f d f . 
            f b d d b b d d 2 b f d f . 
            . f 2 2 2 2 2 2 d b d b f . 
            . f d d d d d d d f f f . . 
            . f d b d f f f d f . . . . 
            . . f f f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 b f f d f 
            . f 2 2 2 2 2 2 d b b d b f 
            . f d d d d d d d f f f f . 
            . . f d b d f d f . . . . . 
            . . . f f f f f f . . . . . 
            `],
        100,
        true
        )
        otherSprite.follow(speler, 80)
        otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        otherSprite.setKind(SpriteKind.Object)
        heeftKat = true
    }
})
function laad_grot () {
    tiles.setCurrentTilemap(tilemap`level3`)
    maak_bomen()
    nieuw_level(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.health_collectable, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.magicWand.play()
    sprites.changeDataNumberBy(speler, "health", 1)
    teken_health()
})
function maakSpeler () {
    hitbox = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    hitbox.setFlag(SpriteFlag.Invisible, true)
    speler = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    speler.setFlag(SpriteFlag.Ghost, true)
    speler.z = 20
    controller.moveSprite(hitbox, 90, 90)
    camera_punt = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f . . . f . . . f . . . . 
        . . f . . . . f . . . . f . . . 
        . . f . . . . f . . . . f . . . 
        . . f . . . . f . . . . f . . . 
        . f f f f f f . f f f f f f . . 
        . . f . . . . f . . . . f . . . 
        . . f . . . . f . . . . f . . . 
        . . f . . . . f . . . . f . . . 
        . . . f . . . f . . . f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    camera_punt.setFlag(SpriteFlag.Invisible, true)
    camera_punt.setFlag(SpriteFlag.Ghost, true)
    camera_punt.follow(hitbox, 600)
    scene.cameraFollowSprite(hitbox)
    pointer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    pointer.setFlag(SpriteFlag.Invisible, true)
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    speler,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    trofee_opmerkingen = [
    "Zo, dat is de eerste. Nog maar zeven te gaan!",
    "Weer een huis! Nog maar zes!",
    "Dat zijn er al drie, nog maar vijf te gaan!",
    "Ik ben op de helft, ik hoef nog maar vier huizen!",
    "Bijna klaar, nog maar drie!",
    "Nog maar twee!",
    "Ik ben er bijna, alleen het laatste huis nog...",
    "Hoera!"
    ]
    sprites.setDataNumber(speler, "health", 3)
}
sprites.onCreated(SpriteKind.Creeper, function (sprite) {
    sprite.setVelocity(50, 0)
    sprite.setBounceOnWall(true)
})
function maak_trofeeen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.trofee)
    if (rugzak.indexOf(atelier_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . f b f b b c f . 
            . . . . . . . f b c c f f f f . 
            . . . . . . f b c c f . . d d . 
            . . . . . f b c c f . . d . . d 
            . . . . f b c c f . . . d . . d 
            . . . f f f f f . . . . . . . . 
            . . . f 8 8 f . . . . . . . . . 
            . . . f 8 8 f . . . . . . 8 . . 
            . . f f f f f f . . . . . . a . 
            . f 8 8 8 8 8 8 f . . 2 . 7 . . 
            . f f f f f f f f . . . . . . . 
            . . . d . . . . . . . . . . . . 
            d d d d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trofee), 25, 41, "", 2)
    }
    if (rugzak.indexOf(bieb_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . b b b b b b b b . 
            b 1 1 1 b b 1 1 1 b 
            b 1 1 1 d d 1 1 1 b 
            c 1 1 1 d d 1 1 1 b 
            c 1 1 1 d d 1 1 1 b 
            c 1 1 1 d d 1 1 1 c 
            c b b b d d b b b c 
            . c c c c c c c c . 
            `, SpriteKind.trofee), 26, 42, "", 2)
    }
    if (rugzak.indexOf(voorlezen_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.trofee), 26, 45, "", 2)
    }
    if (rugzak.indexOf(minecraft_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 6 f . 
            . . f 7 f f f 7 7 7 f f f 6 f . 
            . . f 7 f f f 7 7 7 f f f 6 f . 
            . . f 7 f f f 7 7 7 f f f 6 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 6 f . 
            . . f 7 7 7 f f f f 7 7 7 6 f . 
            . . f 7 7 f f f f f f 7 7 6 f . 
            . . f 7 7 f f f f f f 7 7 6 f . 
            . . f 7 7 f 6 6 6 6 f 7 7 6 f . 
            . . f f f f f f f f f f f f f . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            `, SpriteKind.trofee), 25, 46, "", 2)
    }
    if (rugzak.indexOf(coderdojo_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . b b b b b b b b b . . . . 
            . . b 1 d d d d d d d 1 b . . . 
            . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
            . b d b c c c c c c c b d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 d 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c 6 6 6 6 6 6 6 c d b . . 
            . b d c c c c c c c c c d b . . 
            . c b b b b b b b b b b b c . . 
            c b c c c c c c c c c c c b c . 
            c 1 d d d d d d d d d d d 1 c . 
            c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
            c b b b b b b b b b b b b b c . 
            c c c c c c c c c c c c c c c . 
            `, SpriteKind.trofee), 22, 46, "", 2)
    }
    if (rugzak.indexOf(kennisbende_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . f . . . . . . f . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 9 9 9 9 9 9 9 6 f . . . 
            . . . f 9 8 1 9 8 1 9 6 f . . . 
            . . . f 9 9 9 9 9 9 9 6 f . . . 
            . . . f 9 9 9 9 9 9 9 6 f . . . 
            . . . f 2 9 9 9 9 2 9 6 f . . . 
            . . . f 9 2 2 2 2 9 9 6 f . . . 
            . . . c f f f f f f f f c . . . 
            . . . . c c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trofee), 21, 45, "", 2)
    }
    if (rugzak.indexOf(keramiek_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f d a a a f . . . . . 
            . . . . . . f c c f . . . . . . 
            . . . . . . f a a f . . . . . . 
            . . . . . f d a a c f . . . . . 
            . . . . f d a a a c c f . . . . 
            . . . f a a a a a a c c f . . . 
            . . . f a a a a a a c c f . . . 
            . . . f a a a a a a c c f . . . 
            . . . f a a a a a c c c f . . . 
            . . . . f a a c c c c f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trofee), 21, 42, "", 2)
    }
    if (rugzak.indexOf(kunst_trofee) >= 0) {
        level_sprite(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e 9 9 9 1 9 e e . . . . 
            . . . e 9 1 1 9 1 1 9 e . . . . 
            . . . e 9 9 9 9 9 9 9 e . . . . 
            . . . e 9 9 9 9 9 9 9 e . . . . 
            . . . e 9 7 7 9 7 7 9 e . . . . 
            . . . e 7 6 6 7 6 6 7 e . . . . 
            . . . e 6 6 6 6 6 6 6 e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . c c c c c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.trofee), 22, 41, "", 2)
    }
    for (let value5 of sprites.allOfKind(SpriteKind.trofee)) {
        value5.z = 105
        value5.setFlag(SpriteFlag.Ghost, true)
        animation.runMovementAnimation(
        value5,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
    }
}
function teken_rugzak () {
    sprites.destroyAllSpritesOfKind(SpriteKind.rugzak_inhoud)
    index2 = 0
    for (let value6 of rugzak) {
        if (value6 == vis) {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . 
                . . . . . . b b b . . . 
                . . . b b b d d d b . . 
                . . b d 4 4 b d d b . b 
                . b 4 4 1 4 d b d d b b 
                b 4 f 4 1 4 4 1 b b 4 b 
                f 4 4 4 1 4 4 1 4 4 4 b 
                f 4 4 4 1 4 4 1 f f 4 f 
                . f 4 d 4 4 d f . . f f 
                . . f 4 4 4 f d b . . f 
                . . . f f f d d b . . . 
                . . . . . . b b . . . . 
                `, SpriteKind.rugzak_inhoud)
            index2 += 1
        } else if (value6 == sleutel) {
            mySprite = sprites.create(img`
                . f f f f . . . . . . . 
                f 4 4 4 5 f . . . . . . 
                f 4 f f 4 f . . . . . . 
                f 4 f f 4 f . . . . . . 
                f 4 5 5 4 5 f . . . . . 
                . f f f f 4 5 f . . . . 
                . . . . . f 4 5 f . . . 
                . . . . . f 4 4 5 f . . 
                . . . . f e 4 f 4 5 f . 
                . . . . . f f 4 e 5 f . 
                . . . . . . f e f f . . 
                . . . . . . . f . . . . 
                `, SpriteKind.rugzak_inhoud)
            index2 += 1
        } else if (value6 == sleutel_dungeon) {
            mySprite = sprites.create(img`
                . . f . . f f f . . f . 
                f f 5 f f 4 4 4 f f 5 f 
                f 4 5 4 4 5 5 1 4 4 5 4 
                . f 4 5 f 5 5 5 f 5 4 f 
                . f 4 5 f f 5 f f 5 4 f 
                . . f 4 4 4 5 5 4 4 f . 
                . . . f f 4 4 4 f f . . 
                . . . . . f 4 f . . . . 
                . . . . . f 4 f f . . . 
                . . . . . f 4 1 5 f . . 
                . . . . . f 4 f f . . . 
                . . . . . . f . . . . . 
                `, SpriteKind.rugzak_inhoud)
            index2 += 1
        } else if (value6 == minecraft_pick) {
            mySprite = sprites.create(img`
                . . . . f f f f f . . . 
                . e f f 6 6 6 6 9 f . . 
                . f 9 6 6 f f f f . . . 
                . f 6 e 4 . . . . . . . 
                f 6 6 f e 4 . . . . . . 
                f 6 f . f e 4 . . . . . 
                f 6 f . . f e 4 . . . . 
                f 6 f . . . f e 4 . . . 
                f 9 f . . . . f e 4 . . 
                . f . . . . . . f e 4 . 
                . . . . . . . . . f f . 
                . . . . . . . . . . . . 
                `, SpriteKind.rugzak_inhoud)
            index2 += 1
        } else if (value6 == verf) {
            mySprite = sprites.create(verf.image, SpriteKind.rugzak_inhoud)
            index2 += 1
        } else {
            continue;
        }
        mySprite.setPosition(87 + index2 * 13, 6)
        mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite.z = 100
    }
}
function maak_minimap () {
    myMinimap = minimap.minimap(MinimapScale.Sixteenth, 2, 1)
    minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Object)
    minimap2.setFlag(SpriteFlag.RelativeToCamera, true)
    minimap2.setPosition(125, 35)
    minimap2.z = 120
    minimap2.setFlag(SpriteFlag.Invisible, true)
}
function zoekDoelwit (bron: Sprite) {
    if (characterAnimations.matchesRule(bron, characterAnimations.rule(Predicate.FacingUp))) {
        tiles.placeOnTile(pointer, bron.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
    } else if (characterAnimations.matchesRule(bron, characterAnimations.rule(Predicate.FacingDown))) {
        tiles.placeOnTile(pointer, bron.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
    } else if (characterAnimations.matchesRule(bron, characterAnimations.rule(Predicate.FacingLeft))) {
        tiles.placeOnTile(pointer, bron.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
    } else if (characterAnimations.matchesRule(bron, characterAnimations.rule(Predicate.FacingRight))) {
        tiles.placeOnTile(pointer, bron.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
    }
}
sprites.onCreated(SpriteKind.Vleermuis, function (sprite) {
    sprite.setVelocity(50, 0)
    sprite.setBounceOnWall(true)
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
function pak_verf () {
    if (rugzak.indexOf(verf) >= 0) {
        rugzak.removeAt(rugzak.indexOf(verf))
    }
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile7`)) {
        tiles.setTileAt(tiles.getTileLocation(20, 2), assets.tile`myTile89`)
        tiles.setTileAt(tiles.getTileLocation(21, 2), assets.tile`myTile93`)
        tiles.setTileAt(tiles.getTileLocation(22, 2), assets.tile`myTile94`)
        teken_rugzak()
        return
    }
    tiles.setTileAt(tiles.getTileLocation(20, 2), assets.tile`myTile89`)
    tiles.setTileAt(tiles.getTileLocation(21, 2), assets.tile`myTile93`)
    tiles.setTileAt(tiles.getTileLocation(22, 2), assets.tile`myTile94`)
    if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile89`)) {
        tiles.setTileAt(tiles.getTileLocation(20, 2), assets.tile`myTile7`)
        verf = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . . f 9 9 9 9 f . . . 
            . . f 9 9 9 9 9 9 f . . 
            . . f f 9 9 9 9 f f . . 
            . . f 6 f f f f 6 f . . 
            . . f 6 6 6 6 6 6 f . . 
            . . f 6 6 6 6 6 6 f . . 
            . . f 6 1 1 1 6 6 f . . 
            . . . f 6 6 6 6 f . . . 
            . . . . f f f f . . . . 
            . . . . . . . . . . . . 
            `, SpriteKind.Object)
        sprites.setDataString(verf, "kleur", "blauw")
    } else if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile93`)) {
        tiles.setTileAt(tiles.getTileLocation(21, 2), assets.tile`myTile7`)
        verf = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . . f 2 2 2 2 f . . . 
            . . f 2 2 2 2 2 2 f . . 
            . . f f 2 2 2 2 f f . . 
            . . f 2 f f f f 2 f . . 
            . . f 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 f . . 
            . . f 2 1 1 1 2 2 f . . 
            . . . f 2 2 2 2 f . . . 
            . . . . f f f f . . . . 
            . . . . . . . . . . . . 
            `, SpriteKind.Object)
        sprites.setDataString(verf, "kleur", "rood")
    } else if (tiles.tileAtLocationEquals(pointer.tilemapLocation(), assets.tile`myTile94`)) {
        tiles.setTileAt(tiles.getTileLocation(22, 2), assets.tile`myTile7`)
        verf = sprites.create(img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . . f b b b b f . . . 
            . . f b b b b b b f . . 
            . . f f b b b b f f . . 
            . . f a f f f f a f . . 
            . . f a a a a a a f . . 
            . . f a a a a a a f . . 
            . . f a 1 1 1 a a f . . 
            . . . f a a a a f . . . 
            . . . . f f f f . . . . 
            . . . . . . . . . . . . 
            `, SpriteKind.Object)
        sprites.setDataString(verf, "kleur", "paars")
    } else {
    	
    }
    rugzak.push(verf)
    teken_rugzak()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vleermuis, function (sprite, otherSprite) {
    pijn()
})
function teken_health () {
    sprites.destroyAllSpritesOfKind(SpriteKind.health)
    for (let index = 0; index <= sprites.readDataNumber(speler, "health") - 1; index++) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . 
            . . f f f . . f f f . . 
            . f 2 2 2 f f 2 2 2 f . 
            f 2 2 1 2 2 2 2 2 2 2 f 
            f 2 2 2 2 2 2 2 2 2 2 f 
            f 4 2 2 2 2 2 2 2 2 2 f 
            . f 4 2 2 2 2 2 2 2 f . 
            . . f 4 2 2 2 2 2 f . . 
            . . . f 4 2 2 2 f . . . 
            . . . . f 4 2 f . . . . 
            . . . . . f f . . . . . 
            . . . . . . . . . . . . 
            `, SpriteKind.health)
        mySprite.setPosition(10 + index * 13, 6)
        mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite.z = 100
    }
}
// De kat eet een vleermuis op
sprites.onOverlap(SpriteKind.Object, SpriteKind.Vleermuis, function (sprite, otherSprite) {
    if (sprite == kat) {
        otherSprite.destroy(effects.disintegrate, 300)
        music.buzzer.play()
        kat.setKind(SpriteKind.Follow)
    }
})
function sla_destructable (mySprite: Sprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    sprites.changeDataNumberBy(mySprite, "destruct_level", 1)
    list = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . d f . . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . f f . . . . . 
        . . . . . d f . f d d . . . . . 
        . . . . . . d f d . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f d . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f d . . . . . . . . 
        . . . . . f d . f . . . f . . . 
        . . . . . f . . f . . f d . . . 
        . . . f f f . . d f f d . . . . 
        . . f d d d f . f d d . . . . . 
        . . d . . . d f d . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f d . . . . . . . . 
        . . . . d d d f . . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . f . . . . . . . . . . . 
        . . . . d f . f f . . . . . . . 
        . . . . . d f d d . . . . . . . 
        . . . f . f d . f . . . f f . . 
        . . . f . f . . f . . f d d . . 
        . . . f f f . . d f f d . . . . 
        . . f d d d f . f d f . . . . . 
        . f d . . . d f d . d . . . . . 
        . f . f . . . f . . . . . . . . 
        . d . d f . . f f . . . . . . . 
        . . . . f f f d d . . . . . . . 
        . . . f d d d f . . . . . . . . 
        . . f d . . . d f f f . . . . . 
        . . d . . . . . d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    if (sprites.readDataNumber(mySprite, "destruct_level") >= 4) {
        sprites.destroy(sprites.readDataSprite(mySprite, "destruct_sprite"))
        mySprite.startEffect(effects.disintegrate, 500)
        mySprite.setFlag(SpriteFlag.Invisible, true)
        mySprite.setFlag(SpriteFlag.Ghost, true)
        tiles.setWallAt(mySprite.tilemapLocation(), false)
    } else {
        sprites.readDataSprite(mySprite, "destruct_sprite").setImage(list[sprites.readDataNumber(mySprite, "destruct_level")])
        sprites.readDataSprite(mySprite, "destruct_sprite").setPosition(mySprite.x, mySprite.y)
    }
}
sprites.onCreated(SpriteKind.trofee_collectable, function (sprite) {
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
function eindfeest () {
    controller.moveSprite(hitbox, 0, 0)
    tiles.placeOnTile(hitbox, tiles.getTileLocation(23, 44))
    scene.cameraFollowSprite(camera_punt)
    speler.setFlag(SpriteFlag.Invisible, true)
    hitbox.setFlag(SpriteFlag.Ghost, true)
    effects.confetti.startScreenEffect(5000)
    pause(4000)
    game.showLongText("Gefeliciteerd! Je hebt alle huizen gevonden! Je bent een echte Huis73-fan!", DialogLayout.Bottom)
    if (kroon == 0) {
        game.showLongText("Er is in deze wereld ook nog een geheime kroon te vinden! Speel door om hem te zoeken!", DialogLayout.Bottom)
    } else {
        game.showLongText("Door het spel uit te spelen en de kroon te vinden heb je echt alle geheimen ontdekt!", DialogLayout.Bottom)
    }
    if (game.ask("Spel afsluiten?", "(A = ja, B = nee)")) {
        game.over(true, effects.confetti)
    } else {
        controller.moveSprite(hitbox, 100, 100)
        scene.cameraFollowSprite(hitbox)
        speler.setFlag(SpriteFlag.Invisible, false)
        hitbox.setFlag(SpriteFlag.Ghost, false)
    }
}
function level_sprite (mySprite: Sprite, col: number, row: number, text: string, level: number) {
    level_sprites.push(mySprite)
    sprites.setDataNumber(mySprite, "level_col", col)
    sprites.setDataNumber(mySprite, "level_row", row)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(col, row))
    sprites.setDataNumber(mySprite, "level", level)
    if (text.length != 0 || mySprite.kind() == SpriteKind.destructable) {
        sprites.setDataString(mySprite, "text", text)
        mySprite.z = 19
        tiles.setWallAt(tiles.getTileLocation(col, row), true)
        sprites.setDataBoolean(mySprite, "wall", true)
    } else {
        sprites.setDataBoolean(mySprite, "wall", false)
    }
    mySprite.setFlag(SpriteFlag.Ghost, false)
    return mySprite
}
function maak_qr (myImage: Image, x: number, y: number, text: string, level: number) {
    tiles.setWallAt(tiles.getTileLocation(x, y), true)
    qrcode = level_sprite(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
        . f 4 5 5 5 5 5 5 5 5 5 5 4 f . 
        . f e 6 6 6 6 6 6 6 6 6 6 e f . 
        . f e 6 f f f 1 1 f f f 6 e f . 
        . f e 6 f 1 f 1 f f 1 f 6 e f . 
        . f e 6 f f f f 1 f f f 6 e f . 
        . f e 6 1 f 1 f f f f 1 6 e f . 
        . f e 6 f f f 1 f f 1 1 6 e f . 
        . f e 6 f 1 f f f 1 f 1 6 e f . 
        . f e 6 f f f 1 f 1 1 1 6 e f . 
        . f f 8 8 8 8 8 8 8 8 8 8 f f . 
        . . . f f f f f f f f f f . . . 
        . . . f e e e e e e e e f . . . 
        . c c f f f f f f f f f f c . . 
        `, SpriteKind.QR), x, y, text, level)
    qrcode.z = 1
    sprites.setDataSprite(qrcode, "qr_sprite", sprites.create(myImage, SpriteKind.Object))
    sprites.setDataString(qrcode, "url", text)
    sprites.readDataSprite(qrcode, "qr_sprite").setPosition(80, 40)
    sprites.readDataSprite(qrcode, "qr_sprite").setFlag(SpriteFlag.RelativeToCamera, true)
    sprites.readDataSprite(qrcode, "qr_sprite").setFlag(SpriteFlag.Ghost, true)
    sprites.readDataSprite(qrcode, "qr_sprite").setFlag(SpriteFlag.Invisible, true)
    sprites.readDataSprite(qrcode, "qr_sprite").z = 101
    sprites.readDataSprite(qrcode, "qr_sprite").scale = 2
}
function make_effect_sprite (row: number, col: number) {
    value8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effect)
    tiles.placeOnTile(value8, tiles.getTileLocation(col, row))
    value8.setFlag(SpriteFlag.AutoDestroy, true)
    value8.setFlag(SpriteFlag.Ghost, true)
    value8.setFlag(SpriteFlag.Invisible, true)
    return value8
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectable, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.magicWand.play()
    rugzak.push(otherSprite)
    teken_rugzak()
})
function distance_between_sprites (mySprite: Sprite, mySprite2: Sprite) {
    return Math.sqrt((mySprite.x - mySprite2.x) ** 2 + (mySprite.y - mySprite2.y) ** 2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trofee_collectable, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.magicWand.play()
    rugzak.push(otherSprite)
    maak_trofeeen()
    speler.sayText(trofee_opmerkingen[sprites.allOfKind(SpriteKind.trofee).length - 1], 3000, false)
    if (sprites.allOfKind(SpriteKind.trofee).length == 8) {
        pause(300)
        eindfeest()
    }
})
function maak_bomen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.boom)
    for (let value62 of tiles.getTilesByType(assets.tile`boom`)) {
        tiles.setTileAt(value62, sprites.castle.tileGrass3)
        boom2 = sprites.create(img`
            .............6666...............
            ..........666667766.6666........
            .........677777777767776........
            ......66667775577757777666......
            .....677666675557557776777666...
            .....6776777775555577777766776..
            ...66666777777775777777766666...
            .66667767777755757555777776776..
            6666777677775577557555777767766.
            .6667767777777775577777777767666
            .c6766777677777775777777677766..
            cc77666667777777777777777666666c
            cc76666677777777777777777766776c
            c6666776777777777777766677666776
            66667766667776777767767766766666
            ccc76677677776677766767776776ccc
            cc7766776777677677676667767766cc
            .666c676667677766667766666666cc.
            .ccc66676666776666677677666cccc.
            ...ccc77c6767666676676677666ccc.
            ...cc676c7766676677666666c666cc.
            ....c6cc676c6677677c66c666ccc...
            ....ccccc6c66667667cc6ccc6ccc...
            ......ccccc66c66c66cccccccc.....
            .......cc.cc6c6ccc6cccc.cc......
            ...........cccccccccc...........
            .............feeeeee............
            ............feeeeeefe...........
            .........eeeeefeeeffee..........
            ............ffffeef..ee.........
            ...............fee..............
            ................e...............
            `, SpriteKind.boom)
        tiles.placeOnTile(boom2, value62)
        tiles.setWallAt(value62, true)
        boom2.y += -10
        boom2.z = 21
        boom2.setFlag(SpriteFlag.Ghost, true)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile41`)) {
        tiles.setTileAt(value7, sprites.castle.tileGrass3)
        boom2 = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.boom)
        tiles.placeOnTile(boom2, value7)
        tiles.setWallAt(value7, true)
        boom2.y += -15
        boom2.z = 21
        boom2.setFlag(SpriteFlag.Ghost, true)
    }
    for (let value72 of tiles.getTilesByType(assets.tile`myTile82`)) {
        tiles.setTileAt(value72, sprites.castle.tileDarkGrass3)
        boom2 = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.boom)
        tiles.placeOnTile(boom2, value72)
        tiles.setWallAt(value72, true)
        boom2.y += -15
        boom2.z = 21
        boom2.setFlag(SpriteFlag.Ghost, true)
    }
}
function maak_mist () {
    for (let mist_x = 0; mist_x <= 8; mist_x++) {
        for (let mist_y = 0; mist_y <= 23; mist_y++) {
            tiles.setTileAt(tiles.getTileLocation(mist_x + 54, mist_y + 39), assets.tile`myTile80`)
        }
    }
    for (let mist_x2 = 0; mist_x2 <= 2; mist_x2++) {
        for (let mist_y2 = 0; mist_y2 <= 19; mist_y2++) {
            tiles.setTileAt(tiles.getTileLocation(mist_x2 + 52, mist_y2 + 43), assets.tile`myTile80`)
        }
    }
    for (let mist_x3 = 0; mist_x3 <= 2; mist_x3++) {
        for (let mist_y3 = 0; mist_y3 <= 11; mist_y3++) {
            tiles.setTileAt(tiles.getTileLocation(mist_x3 + 50, mist_y3 + 44), assets.tile`myTile80`)
        }
    }
}
sprites.onCreated(SpriteKind.Skelet, function (sprite) {
    sprite.setVelocity(50, 0)
    sprite.setBounceOnWall(true)
    characterAnimations.loopFrames(
    sprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
    300,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `],
    300,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
function verwijder_mist () {
    if (kerker_gezien == 0) {
        kerker_gezien = 1
        laad_huis73()
        level_sprite(sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Skelet), 54, 39, "", 2)
        level_sprite(sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Skelet), 51, 48, "", 2)
        level_sprite(sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Skelet), 61, 51, "", 2)
        level_sprite(sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Skelet), 52, 52, "", 2)
        level_sprite(sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Skelet), 56, 55, "", 2)
    }
}
function laad_huis73 () {
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`level1`)
    nieuw_level(2)
    maak_bomen()
    maak_trofeeen()
    if (kerker_gezien == 0) {
        maak_mist()
    }
}
function init_grot () {
    level_sprite(sprites.create(assets.image`bord`, SpriteKind.bord), 7, 12, "Dit level is nog niet gebouwd! Als je een goed idee hebt kan je de functie \"init_grot\" aanpassen en je eigen level maken..", 1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Creeper, function (sprite, otherSprite) {
    pijn()
})
/**
 * Begin van het spel
 */
let entry_disabled = 0
let kerker_gezien = 0
let boom2: Sprite = null
let value8: Sprite = null
let qrcode: Sprite = null
let myMinimap: minimap.Minimap = null
let index2 = 0
let trofee_opmerkingen: string[] = []
let heeftKat = false
let tooltip: Sprite = null
let pointer: Sprite = null
let kroon = 0
let mySprite: Sprite = null
let verf: Sprite = null
let list: Image[] = []
let minimap2: Sprite = null
let level_sprites: Sprite[] = []
let level = 0
let rugzak: Sprite[] = []
let kennisbende_trofee: Sprite = null
let keramiek_trofee: Sprite = null
let kunst_trofee: Sprite = null
let coderdojo_trofee: Sprite = null
let minecraft_trofee: Sprite = null
let bieb_trofee: Sprite = null
let voorlezen_trofee: Sprite = null
let atelier_trofee: Sprite = null
let Chris: Sprite = null
let Minecraft_Steve: Sprite = null
let Brigitta: Sprite = null
let npc_kunst: Sprite = null
let npc_keramiek: Sprite = null
let npc_kennisbende: Sprite = null
let Marloes: Sprite = null
let Jasper: Sprite = null
let RobotArm: Sprite = null
let minecraft_pick: Sprite = null
let kat: Sprite = null
let vis: Sprite = null
let sleutel_dungeon: Sprite = null
let sleutel: Sprite = null
let camera_punt: Sprite = null
let speler: Sprite = null
let hitbox: Sprite = null
maakSpeler()
init_huis73()
init_grot()
laad_huis73()
let flame = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Object)
flame.setFlag(SpriteFlag.Ghost, true)
tiles.placeOnTile(hitbox, tiles.getTileLocation(24, 44))
speler.setPosition(hitbox.x, hitbox.y)
camera_punt.setPosition(hitbox.x, hitbox.y)
maak_minimap()
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .bd111111111111111111db.
    bd1dbbbbbbbbbbbbbbbbd1db
    b1dbbbbbbbbbbbbbbbbbbd1b
    b1bd1111111111111111db1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1bd1111111111111111db1b
    bd1bbbbbbbbbbbbbbbbbb1db
    bbd111111111111111111dbb
    .bbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.showLongText("Ontdek hier de wereld van Huis73!", DialogLayout.Top)
game.showLongText("Met de 'A' knop kun je dingen openmaken en praten!", DialogLayout.Center)
game.showLongText("Ga op ontdekkingsreis en verzamel alle items!", DialogLayout.Bottom)
teken_health()
// Hitbox logica voor elk frame
game.onUpdate(function () {
    speler.setPosition(hitbox.x, hitbox.y)
    for (let value of sprites.allOfKind(SpriteKind.volatile)) {
        if (sprites.readDataBoolean(value, "attached")) {
            value.setPosition(sprites.readDataSprite(value, "attached_sprite").x + sprites.readDataNumber(value, "offset_x"), sprites.readDataSprite(value, "attached_sprite").y + sprites.readDataNumber(value, "offset_y"))
        }
    }
})
// Animaties die af en toe afspelen
game.onUpdateInterval(12000, function () {
    if (level == 2) {
        RobotArm.startEffect(effects.fountain, 400)
        if (Math.percentChance(50) != heeftKat) {
            mySprite = sprites.create(img`
                .......fffffffff........
                ......f111111111f.......
                .....f11111bbb111f......
                ....f111bbbdddb111f.....
                ...f111bd44bddb1b11f....
                ...f11b44144bddbb11f....
                ...f1b4f41441bb4b11f....
                ...f1f4441441444b11f....
                ...f1f4441441ff4f11f....
                ...f11f4d44df11ff11f....
                ...f111f444fdb11f11f....
                ....f111fffddb1111f.....
                .....f11111bb1111f......
                ......f111111111f.......
                .......fffffffff........
                ........................
                ............ff..........
                ...........fd1f.........
                ...........fddf.........
                ............ff..........
                ..........f.............
                .........f1f............
                ..........f.............
                ........f...............
                `, SpriteKind.volatile)
        } else {
            mySprite = sprites.create(img`
                .......fffffffff........
                ......f1f1111111f.......
                .....f1fc11111111f......
                ....f1ffc111111ff1f.....
                ...f1ffc3c3c1ffcbc1f....
                ...f1fcbbbcffbbcc11f....
                ...f1cb1bb1fbbcbc11f....
                ...f1cbbbbbbbbcbc11f....
                ...f1fbcbbcbbcccc11f....
                ...f1fb1ff1bbbfc111f....
                ...f11fbbbbbbcfcc11f....
                ....f11fbbbbcf1111f.....
                .....f11fffff1111f......
                ......f111111111f.......
                .......fffffffff........
                ........................
                ............ff..........
                ...........fd1f.........
                ...........fddf.........
                ............ff..........
                ..........f.............
                .........f1f............
                ..........f.............
                ........f...............
                `, SpriteKind.volatile)
        }
        if (heeftKat) {
            sprites.setDataSprite(mySprite, "attached_sprite", kat)
            sprites.setDataBoolean(mySprite, "attached", true)
            sprites.setDataNumber(mySprite, "offset_x", 2)
            sprites.setDataNumber(mySprite, "offset_y", -18)
        }
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.bobbing),
        6000,
        true
        )
        mySprite.setPosition(kat.x + 2, kat.y - 18)
        sprites.setDataNumber(mySprite, "ticks", 6)
    }
})
game.onUpdateInterval(500, function () {
    doelen_tooltip()
    for (let value of sprites.allOfKind(SpriteKind.volatile)) {
        sprites.changeDataNumberBy(value, "ticks", -1)
        if (sprites.readDataNumber(value, "ticks") <= 0) {
            sprites.destroy(value)
        }
    }
    if (sprites.readDataNumber(camera_punt, "ticks") > 0) {
        sprites.changeDataNumberBy(camera_punt, "ticks", -1)
    } else if (sprites.readDataNumber(camera_punt, "ticks") == 0) {
        sprites.changeDataNumberBy(camera_punt, "ticks", -1)
        scene.cameraFollowSprite(hitbox)
    } else {
    	
    }
})
// Level specifieke AI
game.onUpdateInterval(500, function () {
    if (level == 2) {
        tiles.placeOnRandomTile(flame, sprites.dungeon.hazardLava0)
        flame.startEffect(effects.fire, 400)
        for (let value82 of sprites.allOfKind(SpriteKind.Vleermuis)) {
            if (heeftKat) {
                if (kat.kind() == SpriteKind.Object) {
                    if (distance_between_sprites(kat, value82) < 40) {
                        kat.follow(value82, 100)
                        heeftKat = false
                    }
                }
            }
        }
        if (speler.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles6)) {
            laad_grot()
            tiles.placeOnTile(hitbox, tiles.getTileLocation(7, 14))
        }
        if (speler.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenNorth)) {
            if (entry_disabled == 0) {
                entry_disabled = 1
                geheime_gang()
            }
        } else {
            entry_disabled = 0
        }
    } else if (level == 1) {
        if (speler.tileKindAt(TileDirection.Center, sprites.dungeon.doorClosedSouth) && level == 1) {
            laad_huis73()
            tiles.placeOnTile(hitbox, tiles.getTileLocation(6, 5))
        }
    }
    if (sprites.readDataBoolean(minimap2, "zichtbaar")) {
        myMinimap = minimap.minimap(MinimapScale.Sixteenth, 2, 1)
        minimap.getImage(myMinimap).fillRect(speler.x / 16 + 1, speler.y / 16 + 1, 2, 2, 1)
        minimap2.setImage(minimap.getImage(myMinimap))
    }
})
// Knipperen bij onkwetsbaarheid
game.onUpdateInterval(100, function () {
    if (sprites.readDataBoolean(speler, "onkwetsbaar")) {
        if (game.runtime() < sprites.readDataNumber(speler, "eind_onkwetsbaar_tijd")) {
            sprites.setDataBoolean(speler, "onzichtbaar", !(sprites.readDataBoolean(speler, "onzichtbaar")))
        } else {
            sprites.setDataBoolean(speler, "onzichtbaar", false)
            sprites.setDataBoolean(speler, "onkwetsbaar", false)
        }
        speler.setFlag(SpriteFlag.Invisible, sprites.readDataBoolean(speler, "onzichtbaar"))
    }
})
