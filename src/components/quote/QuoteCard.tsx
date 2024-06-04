import React from 'react';

interface QuoteCardProps {
    text: string;
    author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author }) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card__wrapper quote__wrapper">
                <div className="description__wrapper">
                    <p className=""><strong>Author:</strong> {author}</p>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;
