import React, {useState, useEffect} from "react";

export function CatGallery(){
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCats(data);
            setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }, []);


    if (isLoading) return <p>Loading cats...</p>;

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cats.map((cat) => (
            <div key={cats.id}>
                <img src={cat.url} alt="Kissa"></img>
            </div>
            ))}
        </div>
    )
}
