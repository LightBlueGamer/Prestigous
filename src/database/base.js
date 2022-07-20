import Josh from '@joshdb/core';
import provider from '@joshdb/sqlite';

export const profiles = new Josh({
	name: 'profiles',
	provider
});
