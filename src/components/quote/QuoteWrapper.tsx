import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import { fetchQuote } from '../../api/api';

interface Quote {
    text: string;
    author: string;
}
const QuoteWrapper: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        const fetchQuoteData = async () => {
            try {
                const quoteData = await fetchQuote();
                setQuotes(quoteData);
            } catch (error) {
                console.error("Error fetching quote data:", error);
            }
        };
        fetchQuoteData();
    }, []);

    return (
        <div className="container">
            <h2 className='title'>Quote List</h2>
            <div className="quote-list">
                <div className="row">
                    {quotes.map((quote, index) => (
                        <QuoteCard key={index} text={quote.text} author={quote.author} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuoteWrapper;
