import Josh from '@joshdb/core';
import provider from '@joshdb/sqlite';
import type { Profile } from '../game/classes/Profile.js';

export const profiles = new Josh<Profile>({
    name: 'profiles',
    provider,
});
