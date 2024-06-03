import React from 'react';

interface SportCardProps {
    result: {
        matchId: number;
        matchDateTime: string;
        timeZoneID: string;
        leagueId: number;
        leagueName: string;
        leagueSeason: number;
        leagueShortcut: string;
        matchDateTimeUTC: string;
      
        lastUpdateDateTime: string;
        location: {
            locationCity: string;
            locationStadium: string;
        };
        matchIsFinished: boolean;
    };
}

const SportsCard: React.FC<SportCardProps> = ({ result }) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card__wrapper sports__wrapper">
                <div className="description__wrapper">                    
                    <p><strong>Match ID:</strong> {result.matchId}</p>
                    <p><strong>Match Date Time:</strong> {result.matchDateTime}</p>
                    <p><strong>Time Zone:</strong> {result.timeZoneID}</p>
                    <p><strong>League Season:</strong> {result.leagueSeason}</p>
                    <p><strong>Location City:</strong> {result.location.locationCity}</p>                    
                    <p><strong>Match Date Time UTC:</strong> {result.matchDateTimeUTC}</p>
                    <p><strong>Match is Finished:</strong> {result.matchIsFinished ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div>
    );
};

export default SportsCard;
