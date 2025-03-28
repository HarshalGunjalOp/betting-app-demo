'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { format } from 'date-fns';

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Mock data for contests
const mockContests = [
    { 
        id: 1, 
        title: 'NFL - Eagles vs Cowboys', 
        category: 'Football',
        date: new Date(2023, 11, 25), 
        status: 'open',
        odds: { home: '+140', away: '-160' },
        teams: { home: 'Eagles', away: 'Cowboys' }
    },
    { 
        id: 2, 
        title: 'NBA - Lakers vs Celtics', 
        category: 'Basketball',
        date: new Date(2023, 11, 23), 
        status: 'open',
        odds: { home: '-120', away: '+110' },
        teams: { home: 'Lakers', away: 'Celtics' }
    },
    { 
        id: 3, 
        title: 'UFC 300 - Main Event', 
        category: 'MMA',
        date: new Date(2024, 0, 15), 
        status: 'upcoming',
        odds: { fighter1: '-200', fighter2: '+180' }
    },
    { 
        id: 4, 
        title: 'Premier League - Arsenal vs Liverpool', 
        category: 'Soccer',
        date: new Date(2023, 11, 22), 
        status: 'open',
        odds: { home: '+110', away: '+130', draw: '+240' },
        teams: { home: 'Arsenal', away: 'Liverpool' }
    },
];

export default function Contests() {
    const [contests, setContests] = useState(mockContests);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    // Filter contests based on search term and category filter
    useEffect(() => {
        let filtered = mockContests;
        
        if (searchTerm) {
            filtered = filtered.filter(contest => 
                contest.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (filter !== 'all') {
            filtered = filtered.filter(contest => contest.category === filter);
        }
        
        setContests(filtered);
    }, [searchTerm, filter]);

    // Get unique categories for filter buttons
    const categories = ['all', ...new Set(mockContests.map(contest => contest.category))];

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">
                Betting Contests
            </h1>
            
            {/* Search and filters */}
            <div className="mb-8">
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search contests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                
                <div className="flex gap-2 flex-wrap">
                    {categories.map(category => (
                        <Badge 
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setFilter(category)}
                        >
                            {category === 'all' ? 'All Categories' : category}
                        </Badge>
                    ))}
                </div>
            </div>
            
            {/* Contests grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contests.length > 0 ? (
                    contests.map(contest => (
                        <Card key={contest.id} className="flex flex-col h-full">
                            <CardContent className="flex-grow pt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold">
                                        {contest.title}
                                    </h3>
                                    <Badge 
                                        variant={contest.status === 'open' ? "success" : "warning"}
                                    >
                                        {contest.status === 'open' ? 'Open' : 'Upcoming'}
                                    </Badge>
                                </div>
                                
                                <p className="text-muted-foreground">
                                    {format(contest.date, 'MMMM d, yyyy')}
                                </p>
                                
                                <div className="mt-4">
                                    {contest.teams ? (
                                        <div className="grid grid-cols-2 gap-3">
                                            <Button 
                                                variant="outline" 
                                                className="justify-between py-5"
                                            >
                                                <span>{contest.teams.home}</span>
                                                <Badge>{contest.odds.home}</Badge>
                                            </Button>
                                            <Button 
                                                variant="outline" 
                                                className="justify-between py-5"
                                            >
                                                <span>{contest.teams.away}</span> 
                                                <Badge>{contest.odds.away}</Badge>
                                            </Button>
                                            {contest.odds.draw && (
                                                <div className="col-span-2 mt-2">
                                                    <Button 
                                                        variant="outline" 
                                                        className="w-full justify-between py-5"
                                                    >
                                                        <span>Draw</span>
                                                        <Badge>{contest.odds.draw}</Badge>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Button 
                                            variant="default" 
                                            className="w-full mt-2"
                                        >
                                            View Odds
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                            
                            <CardFooter className="pt-0">
                                <Button className="w-full">
                                    Place Bet
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full">
                        <p className="text-xl text-center py-10">
                            No contests found. Try adjusting your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}