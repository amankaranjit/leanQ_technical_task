import React, { useState, useEffect } from 'react';
import SportsCard from './SportsCard';
import { fetchSports } from '../../api/api';

interface Sport {
    matchId: number;
    matchDateTime: string;
    timeZoneID: string;
    leagueId: number;
    leagueName: string;
    leagueSeason: number;
    leagueShortcut: string;
    matchDateTimeUTC: string;
    group: {
        groupName: string;
        groupOrderID: number;
        groupID: number;
    };
    lastUpdateDateTime: string;
    location: {
        locationCity: string;
        locationStadium: string;
    };
    matchIsFinished: boolean;
}

const SportsWrapper: React.FC = () => {
    const [sports, setSports] = useState<Sport[]>([]);

    useEffect(() => {
        const fetchSportsData = async () => {
            try {
                const sportsData = await fetchSports();
                console.log("Sports Data:", sportsData);

                // Transform API data to match Sport interface
                const transformedData = sportsData.map((match: any) => ({
                    matchId: match.matchID,
                    matchDateTime: match.matchDateTime,
                    timeZoneID: match.timeZoneID,
                    leagueId: match.leagueId,
                    leagueName: match.leagueName,
                    leagueSeason: match.leagueSeason,
                    leagueShortcut: match.leagueShortcut,
                    matchDateTimeUTC: match.matchDateTimeUTC,
                    group: match.group,
                    lastUpdateDateTime: match.lastUpdateDateTime,
                    location: match.location,
                    matchIsFinished: match.matchIsFinished,
                }));

                setSports(transformedData);
            } catch (error) {
                console.error("Error fetching sports data:", error);
            }
        };

        fetchSportsData();
    }, []);

    return (
        <div className="container">
            <h2 className='title'>Sports List</h2>
            <div className="sports-list">
                <div className="row">
                    {sports.map((sport, index) => (
                        <SportsCard
                            key={index}
                            result={sport}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SportsWrapper;
