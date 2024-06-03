
import React from 'react';

interface ToyCardProps {
    name: string;
    image: string;
    type: string[];
    base_experience: number;
    abilities: string[];
}

const ToyCard: React.FC<ToyCardProps> = ({ name, image, type, base_experience, abilities }) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card__wrapper">
                <div className="img__wrapper">
                    <figure>
                        <img src={image} alt={`${name} Image`} />
                    </figure>
                </div>
                <div className="description__wrapper">
                    <h2>{name}</h2>
                    <div className='type__wrap'>
                        {type.map((t, index) => (
                            <span key={index} className="type">{t}</span>
                        ))}
                    </div>
                    <p className='badge'><strong>Base Experience:</strong> {base_experience}</p>


                    <div className="abilities">
                        <p>Abilities:</p>
                        <ol>
                            {abilities.map((ability, index) => (
                                <li key={index}>{ability}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;