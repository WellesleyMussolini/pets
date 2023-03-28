import React, { useState, useEffect } from "react";
import styles from "./dog.module.css";
import Header from "../../components/header/Header";
import { api } from "../../config/api";
import { useParams } from 'react-router-dom';

const DogDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    useEffect(() => {
        api.get("/" + id).then((response) => setPet(response.data)).catch((error) => console.log(error));
    }, [id]);

    if (!pet) {
        return <div>LOADING...</div>
    }


    return (
        <>
            <p>BREED: {pet.breed}</p>
            <h1>PUPPIES</h1>
            <div>
                {pet.images[1].puppies.map(image => (
                    <img src={image} alt="puppy" />
                ))}
            </div>
            <h1>ADULT HOOD</h1>
            <div>
                {pet.images.map(image => (
                    <img src={image} alt="ADULT" />
                ))}
            </div>
        </>
    );
};

export default DogDetails;



















// const renderImages = () => {
//     return pet.images.map((image) => {
//         if (typeof image === "object") {
//             return Object.keys(image).map((key) => {
//                 return image[key].map((url) => {
//                     return <img key={url} src={url} alt={pet.breed} />;
//                 });
//             });
//         }
//         else if (typeof image === "string") {
//             return <img key={image} src={image} alt={pet.breed} />;
//         }
//         return null;
//     });
// };