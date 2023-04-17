import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/Loading/Loading";
import { pet } from "../../../services/pet-service";
import PetsIcon from '@mui/icons-material/Pets';
import HeartIcon from "../img/heart.png";
import Bone from "../img/bone.png";
import Dog from "../img/dog.png";
import Scale from "../img/weighing-machine.png";
import Heart from "../img/heart-attack.png";
import { Container, BreedVitalStats, Stats, Image, Typography } from "./pet.styles";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        pet.get(setDog, `/pets/${id}`, "data");
        return;
    }, [id]);

    if (!dog) {
        return <LoadingScreen />
    }

    const traits = [
        { name: 'Inteligência', value: 5 },
        { name: 'Agilidade', value: 4 },
        { name: 'Força', value: 4 },
        { name: 'Agressividade', value: 2 },
    ];

    return (
        <Container>
                <BreedVitalStats>
                    <Stats>
                        <Image src={Dog} alt="life span" />
                        <Typography>Dog Breed Group:</Typography>
                    </Stats>
                    <Stats>
                        <Image src={Bone} alt="life span" />
                        <Typography>Height:</Typography>
                    </Stats>
                    <Stats>
                        <Image src={Scale} alt="life span" />
                        <Typography>Weight:</Typography>
                    </Stats>
                    <Stats>
                        <Image src={Heart} alt="life span" />
                        <Typography>Life Span:</Typography>
                    </Stats>
                </BreedVitalStats>
                {/* 
                <h2>BREED: {dog.breed}</h2>
                <h1>PUPPIES</h1>
                <div>
                    {dog.images[1].puppies.map((image, index) => (
                        <img src={image} alt="puppy" key={index} />
                    ))}
                </div>
                
                <h1>ADULT HOOD</h1>
                <div>
                    {dog.images.map((image, index) => (
                        <img src={image} alt="ADULT" key={index} />
                    ))}
                </div>
                <div>
                    {traits.map((trait, index) => (
                        <div key={index}>
                            <strong>{trait.name}</strong>
                            {[...Array(5)].map((_, index) => (
                                <PetsIcon
                                    key={index}
                                    color={index < trait.value ? 'primary' : 'disabled'}
                                />
                            ))}
                        </div>
                    ))}
                </div> */}
        </Container>
    );
};

export default Pet;



/*
import PetsIcon from '@mui/icons-material/Pets';


const Pet = () => {
    const traits = [
        { name: 'Inteligência', value: 5 },
        { name: 'Agilidade', value: 4 },
        { name: 'Força', value: 4 },
        { name: 'Agressividade', value: 2 },
    ];
     return (
            <div>
                <h2>Border Collie</h2>
                {traits.map((trait, index) => (
                    <div key={index}>
                        <strong>{trait.name}:</strong>
                        {[...Array(5)].map((_, i) => (
                            <PetsIcon
                                key={i}
                                color={i < trait.value ? 'primary' : 'disabled'}
                            />
                        ))}
                    </div>
                ))}
            </div>
                );
};

export default Pet;
*/