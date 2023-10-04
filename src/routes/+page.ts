import type { PageLoad } from './$types';

export const load = (async () => {
    const res = await fetch("http://localhost:1337/ride/")
    let data = await res.json()

    return {data};
}) satisfies PageLoad;