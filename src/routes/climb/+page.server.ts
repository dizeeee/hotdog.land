import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://forms.gle/99fMx33FunKY6GEC7');
}
