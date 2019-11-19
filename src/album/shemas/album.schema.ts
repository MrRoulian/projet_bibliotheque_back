import * as mongoose from 'mongoose';

export const AlbumSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
        trim: true,
    },
    decription: {
        type: String,
        trim: true,
    },
    auteur: {
        type: String,
        trim: true,
    },
    photo0: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo1: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo2: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo3: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo4: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo5: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo6: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo7: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo8: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
    photo9: {
        path: {
            type: String,
            required: true,
            trim: true,
        },
        titre: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        auteur: {
            type: String,
            trim: true,
        },
    },
}, {
    toJSON: { virtuals: true },
    versionKey: false,
});
