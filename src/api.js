const APIBASE = 'https://backend-mern-project-1.vercel.app/api/notes'

export function FetchNotes(){
   return fetch(APIBASE).then(res=>res.json())
}

export function UpdateNote(title , content , id){
    return fetch(`${APIBASE}/${id}` , {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title:title , content:content})
    }).then(res=>res.json())
}

export function AddNote(title , content){
    return fetch(`${APIBASE}` , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title:title , content:content})
    }).then(res=>res.json())
}


export function GetOneNote(id){
    return fetch(`${APIBASE}/${id}`).then(res=>res.json())
}

export function DeleteNote(id){
    return fetch(`${APIBASE}/${id}` , {
        method:"DELETE"
    }).then(res=>res.json())
}

