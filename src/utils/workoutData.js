export const TEMPOS = ['3 0 2', '2 2 2', '4 1 1', '5 3 1', '1 0 1', '3 2 1', '2 1 1']

export const SCHEMES = {
    strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60]
    },
    growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60]
    },
    cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45]
    }
}

export const WORKOUTS = {
    individual: ['biceps', 'triceps', 'chest', 'back', 'shoulders', 'quads', 'hamstrings', 'glutes', 'calves', 'abs'],
    bro_split: {
        push: ['triceps', 'chest', 'shoulders'],
        pull: ['back', 'shoulders', 'biceps'],
        legs: ['glutes', 'calves', 'hamstrings', 'quads']
    },
    body_builder_split: {
        chest: ['chest'],
        back: ['back'],
        shoulders: ['shoulders'],
        legs: ['glutes', 'quads', 'hamstrings', 'calves'],
        arms: ['biceps', 'triceps'],
        abs: ['abs']
    },
    upper_lower: {
        upper: ['triceps', 'biceps', 'shoulders', 'chest', 'back'],
        lower: ['quads', 'calves', 'hamstrings', 'glutes']
    }
}