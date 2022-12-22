// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`0a00080001030707070707070601010a0b0b0b0b0b0b0801010a0b0b0b0b0b0b0801010a0b0b0b0b0b0b0801010a0b0b0b0b0b0b0801010a0b0b0b0b0b0b08010104090909090909050101020202020202020201`, img`
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.tile0,myTiles.tile1,myTiles.tile3,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
