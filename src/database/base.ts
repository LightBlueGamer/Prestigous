import Josh from '@joshdb/core';
import provider from '@joshdb/sqlite'
import type { Clan } from '../game/classes/Clan.js';
import type { Configuration } from '../game/classes/Configuration.js';
import type { Profile } from '../game/classes/Profile.js';

export const profiles = new Josh<Profile>({
    name: 'profiles',
    provider,
});

export const configuration = new Josh<Configuration>({
    name: 'configuration',
    provider,
});

export const clan = new Josh<Clan>({
    name: 'clan',
    provider,
});