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

export async function editRide(newRide: object, id: string) {
    const res = await fetch(`http://localhost:1337/ride/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRide)
    })
    
    window.location.href = "http://localhost:5173/"
    return res.json()
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

export async function getRide(title: string, start: string, imgBackground: string, id:number) {
    const res = await fetch(`http://localhost:1337/ride/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            start: start,
            imgBackground: imgBackground
        }),
    });
    window.location.reload();

    return res.json();
}

