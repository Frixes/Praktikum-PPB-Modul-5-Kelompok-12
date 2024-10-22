import { useEffect, useState } from 'react';

export default function Profile() {
    const members = [
        { name: "Tian-222120122130072", githubUsername: "Frixes" },
        { name: "Rahadian-222120122130053", githubUsername: "RahadianAW" },
        { name: "Louis-222120122140154", githubUsername: "github_louis_username" },
        { name: "Ghazi-222120122140114", githubUsername: "ghziirmdhn" }
    ];

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            const fetchedProfiles = await Promise.all(
                members.map(async (member) => {
                    const response = await fetch(`https://api.github.com/users/${member.githubUsername}`);
                    const data = await response.json();
                    return { ...member, img: data.avatar_url, followers: data.followers };
                })
            );
            setProfiles(fetchedProfiles);
        };

        fetchProfiles();
    }, []);

    return (
        <div className="content-wrapper">
            <header>
                <h1 id="titleGroup">Profile</h1>
            </header>
            <div className="content">
                <ul>
                    {profiles.map((profile, index) => (
                        <li key={index} className="profile-card">
                            <img src={profile.img} alt={profile.name} />
                            <p>{profile.name}</p>
                            <p>Followers: {profile.followers}</p>
                            <a 
                                href={`https://github.com/${profile.githubUsername}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                GitHub Profile
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
