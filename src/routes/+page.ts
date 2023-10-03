import type { PageLoad } from './$types';

export const load = (async () => {
    const res = await fetch("http://localhost:1337/ride/")
    let data = await res.json()

    async function postRide(title:string, start:string, imgBackground:string) {
        var formdata = new FormData();
        formdata.append("title", "Viaje a Rio gallegos");
        formdata.append("start", "1/10/24");
        formdata.append("imgBackground", "https://imgs.search.brave.com/6hLFJjdQUhW2e438Z4uK2nSgz40ltxGIxJ-exf8RmYM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGxhY2Vzb25s/aW5lLmNvbS9waG90/b3MvNDIzMTZfZWxf/Y2hhbHRlbl9yaW9f/Z2FsbGVnb3MuanBn/P3F1YWxpdHk9ODAm/dz03MDA");

        fetch("http://localhost:1337/ride/", {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        })
        
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }

    return {data, postRide};
}) satisfies PageLoad;