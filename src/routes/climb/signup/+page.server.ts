import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, 'https://forms.gle/4YnPpuD4Sfv12pYq8');
}
