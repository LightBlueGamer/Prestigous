export const config = {
    guildId: '994973815438323722',
    developers: ['232466273479426049', '934834077247369236'],
    admins: [],
    moderators: [],
    support: [],
    permLevels: [
        {
            level: 0,
            name: 'User',
            check: () => true,
        },
        {
            level: 7,
            name: 'Support',
            check: (interaction) => {
                const person = interaction.author ?? interaction.user;
                return config.support.includes(person.id);
            },
        },
        {
            level: 8,
            name: 'Moderator',
            check: (interaction) => {
                const person = interaction.author ?? interaction.user;
                return config.moderators.includes(person.id);
            },
        },
        {
            level: 9,
            name: 'Admin',
            check: (interaction) => {
                const person = interaction.author ?? interaction.user;
                return config.admins.includes(person.id);
            },
        },
        {
            level: 10,
            name: 'Developer',
            check: (interaction) => {
                const person = interaction.author ?? interaction.user;
                return config.developers.includes(person.id);
            },
        },
    ],
};
