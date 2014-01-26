define({
	canvas        : null,
	ctx           : null,
	GAME_WIDTH    : 1024,
	GAME_HEIGHT   : 768,
	SCENE_WIDTH   : 1024,
	SCENE_HEIGHT  : 768,
    playerSpeed   : 3,
    bulletSpeed   : 8,
    topLeftAnchor     : { x : 0,    y : 0 },
    topRightAnchor    : { x : 1024, y : 0 },
    bottomLeftAnchor  : { x : 0,    y : 768 },
    bottomRightAnchor : { x : 1024, y : 768 },
    colors : {
        purple : "rgb(66, 27, 121)",
        yellow : "rgb(255, 246, 133)",
        pink   : "rgb(240, 103, 167)",
        green  : "rgb(60, 187, 149)"
    },
    images : {
        player1 : [
            "medias/ship1_violet.png",
            "medias/ship1_jaune.png",
            "medias/ship1_rose.png",
            "medias/ship1_vert.png"
        ],
        player2 : [
            "medias/ship2_violet.png",
            "medias/ship2_jaune.png",
            "medias/ship2_rose.png",
            "medias/ship2_vert.png"
        ],
        player3 : [
            "medias/ship3_violet.png",
            "medias/ship3_jaune.png",
            "medias/ship3_rose.png",
            "medias/ship3_vert.png"
        ],
        player4 : [
            "medias/ship4_violet.png",
            "medias/ship4_jaune.png",
            "medias/ship4_rose.png",
            "medias/ship4_vert.png"
        ],

    }
});