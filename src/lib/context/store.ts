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
    window.location.href = "http://localhost:5173/"

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

export async function editRide(id:number) {
    const res = await fetch(`http://localhost:1337/ride/post_ride/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        }),
    });
    // window.location.href=`http://localhost:5173/post_ride/${id}`

    return res.json();
}