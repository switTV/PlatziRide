export async function postRide(title: string, start: string, imgBackground: string) {
    const res = await fetch("http://localhost:1337/ride/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            start: start,
            imgBackground: imgBackground
        })
    });

    return res.json();
}

export async function delRide(id:number) {
    const res = await fetch(`http://localhost:1337/ride/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        }),
    });
    window.location.reload();

    return res.json();
}